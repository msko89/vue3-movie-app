import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    movies: [],
    message: '',
    loading: false,
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },

    resetMovies(state) {
      state.movies = [];
    },
  },
  actions: {
    async searchMovies({ state, getters, commit }, payload) {
      try {
        const { title, type, year, number } = payload;
        const OMDB_API_KEY = '7035c60c';
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${number}`
        );

        const { Search, totalResults } = res.data;

        commit('updateState', {
          movies: Search || [],
        });
      } catch (error) {
        alert(error);
      }
    },
  },
};
