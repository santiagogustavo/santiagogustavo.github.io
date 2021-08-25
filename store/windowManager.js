export const state = () => ({
  windows: {},
});

export const mutations = {
  'REGISTER_WINDOW': (state, payload) => {
    state.windows[payload.id] = payload;
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
  'CLOSE_WINDOW': (state, payload) => {
    const { [payload]: removed, ...windows } = state.windows;
    state.windows = windows;
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
};

export const getters = {
  getWindowById: (state) => (id) => state?.windows[id],
};
