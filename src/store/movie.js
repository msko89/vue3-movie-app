export default {
  // module
  namespaced: true,
  // data
  state: () => ({
    movies: [],
  }),
  // computed
  getters: {
    movieIds(state) {
      return state.movies.map((movie) => movie.imdbID);
    },
  },
  // methods
  // 변이
  mutations: {
    resetMovies(state) {
      state.movies = [];
    },
  },
  // 비동기
  actions: {
    searchMovies({ state, getters, commit }) {},
  },
};
