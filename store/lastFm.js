import { formatTrack } from '@/formatters/lastFm';
import { getRecentTracks } from '@/services/lastFm';

export const state = () => ({
  isLoading: false,
  recentTracks: undefined,
  error: undefined,
});

export const mutations = {
  FETCH_RECENT_TRACKS_PENDING: state => {
    state.isLoading = true;
  },
  FETCH_RECENT_TRACKS_SUCCESS: (state, payload) => {
    state.isLoading = false;
    state.recentTracks = payload;
  },
  FETCH_RECENT_TRACKS_REJECT: (state, payload) => {
    state.isLoading = false;
    state.error = payload;
  },
};

export const actions = {
  fetchRecentTracks({ commit }) {
    commit('FETCH_RECENT_TRACKS_PENDING');
    getRecentTracks({ limit: 4 })
      .then(({ data: { recenttracks } }) => {
        commit(
          'FETCH_RECENT_TRACKS_SUCCESS',
          recenttracks?.track?.map(track => formatTrack(track))
        );
      })
      .catch(error => commit('FETCH_RECENT_TRACKS_REJECT', error));
  },
};

export const getters = {
  getRecentTracks: state => state?.recentTracks,
  getError: state => state?.error,
  getIsLoading: state => state?.isLoading,
};
