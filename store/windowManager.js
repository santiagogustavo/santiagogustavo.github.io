export const state = () => ({
  windows: {},
  activeWindow: undefined,
});

export const mutations = {
  'REGISTER_WINDOW': (state, payload) => {
    state.windows = {
      ...state.windows,
      [payload.id]: payload,
    };
    state.activeWindow = payload.id;
  },
  'MINIMIZE_WINDOW': (state, payload) => {
    state.windows = {
      ...state.windows,
      [payload]: {
        ...state.windows[payload],
        isMinimized: true,
      },
    };
  },
  'RESTORE_WINDOW': (state, payload) => {
    state.windows = {
      ...state.windows,
      [payload]: {
        ...state.windows[payload],
        isMinimized: false,
      },
    };
    state.activeWindow = payload;
  },
  'CLOSE_WINDOW': (state, payload) => {
    const { [payload]: removed, ...windows } = state.windows;
    const remainingWindows = Object.keys(windows);
    const lastActiveWindow = remainingWindows.length ? remainingWindows[remainingWindows.length - 1] : '';
    state.windows = windows;
    state.activeWindow = lastActiveWindow;
  },
  'SET_ACTIVE_WINDOW': (state, payload) => {
    state.activeWindow = payload;
  },
};

export const actions = {
  registerWindow({ commit }, window) {
    commit('REGISTER_WINDOW', window);
  },
  minimizeWindow({ commit }, id) {
    commit('MINIMIZE_WINDOW', id);
  },
  closeWindow({ commit }, id) {
    commit('CLOSE_WINDOW', id);
  },
  setActiveWindow({ commit }, id) {
    commit('SET_ACTIVE_WINDOW', id);
  },
};

export const getters = {
  getWindowById: (state) => (id) => state?.windows[id],
  activeWindow: (state) => state?.activeWindow,
};
