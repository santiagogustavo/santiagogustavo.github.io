import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0',
  timeout: 10000,
});

export const getRecentTracks = config => instance.get('/', {
  params: {
    method: 'user.getrecenttracks',
    user: 'santiago-re',
    api_key: process.env.NUXT_ENV_LASTFM_API_KEY,
    format: 'json',
    ...config,
  }
});
