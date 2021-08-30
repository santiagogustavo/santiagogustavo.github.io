import { v4 as uuidv4 } from 'uuid';

export const state = () => ({
  windows: {},
  activeWindow: undefined,
});

export const mutations = {
  REGISTER_WINDOW: (state, payload) => {
    state.windows = {
      ...state.windows,
      [payload.id]: payload,
    };
  },
  MINIMIZE_WINDOW: (state, payload) => {
    state.windows = {
      ...state.windows,
      [payload]: {
        ...state.windows[payload],
        isMinimized: true,
      },
    };
  },
  RESTORE_WINDOW: (state, payload) => {
    state.windows = {
      ...state.windows,
      [payload]: {
        ...state.windows[payload],
        isMinimized: false,
      },
    };
  },
  CLOSE_WINDOW: (state, payload) => {
    state.windows = {
      ...state.windows,
      [payload]: {
        ...state.windows[payload],
        isClosed: true,
      },
    };
  },
  REMOVE_WINDOW: (state, payload) => {
    const { [payload]: removed, ...windows } = state.windows;
    state.windows = windows;
  },
  MINIMIZE_ALL: (state) => {
    const mutatedWindows = { ...state.windows };
    Object.keys(mutatedWindows).forEach(id => {
      const { modal } = mutatedWindows[id];
      mutatedWindows[id] = { ...mutatedWindows[id], isMinimized: !modal && true };
    });
    state.windows = mutatedWindows;
    state.activeWindow = undefined;
  },
  MINIMIZE_CURRENT_WINDOW: (state) => {
    if (!state.activeWindow) {
      return;
    }
    state.windows = {
      ...state.windows,
      [state.activeWindow]: {
        ...state.windows[state.activeWindow],
        isMinimized: true,
      },
    };
  },
  SET_ACTIVE_WINDOW: (state, payload) => {
    state.activeWindow = payload;
  },
  SET_LAST_ACTIVE_WINDOW: (state) => {
    const remainingWindows = Object.values(state.windows).filter(
      (window) => !window.isMinimized && !window.isClosed
    );
    const lastActiveWindow = remainingWindows.length
      ? remainingWindows[remainingWindows.length - 1].id
      : undefined;
    state.activeWindow = lastActiveWindow;
  }
};

export const actions = {
  registerWindow({ commit }, window) {
    const id = uuidv4();
    commit('REGISTER_WINDOW', {
      id,
      isMinimized: false,
      isClosed: false,
      ...window,
    });
    commit('SET_ACTIVE_WINDOW', id);
  },
  minimizeWindow({ commit }, id) {
    commit('MINIMIZE_WINDOW', id);
    commit('SET_LAST_ACTIVE_WINDOW');
  },
  restoreWindow({ commit }, id) {
    commit('RESTORE_WINDOW', id);
    commit('SET_ACTIVE_WINDOW', id);
  },
  closeWindow({ commit }, id) {
    commit('CLOSE_WINDOW', id);
    commit('SET_LAST_ACTIVE_WINDOW');
    setTimeout(() => {
      commit('REMOVE_WINDOW', id);
    }, 500);
  },
  minimizeAll({ commit }, id) {
    commit('MINIMIZE_ALL');
  },
  minimizeCurrentWindow({ commit }) {
    commit('MINIMIZE_CURRENT_WINDOW');
    commit('SET_LAST_ACTIVE_WINDOW');
  },
  setActiveWindow({ commit }, id) {
    commit('SET_ACTIVE_WINDOW', id);
  },
  setLastActiveWindow({ commit }) {
    commit('SET_LAST_ACTIVE_WINDOW');
  },
};

export const getters = {
  getWindows: (state) => state?.windows,
  getWindowById: (state) => (id) => state?.windows[id],
  getActiveWindow: (state) => state?.activeWindow,
};
