import Vue from 'vue';
import axios from 'axios';

export const state = Vue.observable({
  moviesList: [],
  seriesList: [],
  loadingMovies: false,
  loadingSeries: false
});

export function fetchTopRated() {
  state.loadingMovies = true;
  axios.get("https://api.themoviedb.org/3/movie/top_rated", {
    params: {
      api_key: "6fc530c8a4a5679024aea82b062cbd34",
      language: "it-IT",
      page: 1
    }
  }).then((resp) => {
    state.moviesList = resp.data.results;
    state.loadingMovies = false;
  });
  state.loadingSeries = true;
  axios.get("https://api.themoviedb.org/3/tv/top_rated", {
    params: {
      api_key: "6fc530c8a4a5679024aea82b062cbd34",
      language: "it-IT",
      page: 1
    }
  }).then((resp) => {
    state.seriesList = resp.data.results;
    state.loadingSeries = false
  })
}

export function fetchMovies(searchText) {
  state.loadingMovies = true;
  axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "6fc530c8a4a5679024aea82b062cbd34",
      query: searchText,
      language: "it-IT"
    }
  }).then((resp) => {
    state.moviesList = resp.data.results;
    state.loadingMovies = false
  })
}

export function fetchSeries(searchText) {
  state.loadingSeries = true;
  axios.get("https://api.themoviedb.org/3/search/tv", {
    params: {
      api_key: "6fc530c8a4a5679024aea82b062cbd34",
      query: searchText,
      language: "it-IT"
    }
  }).then((resp) => {
    state.seriesList = resp.data.results;
    state.loadingSeries = false
  })
}

export function fetchMoviesByGenre(id) {
  state.loadingMovies = true;
  axios.get("https://api.themoviedb.org/3/discover/movie", {
    params: {
      api_key: "6fc530c8a4a5679024aea82b062cbd34",
      with_genres: id,
      language: "it-IT"
    }
  }).then((resp) => {
    state.moviesList = resp.data.results;
    state.loadingMovies = false;
  });
}

export function fetchSeriesByGenre(id) {
  state.loadingSeries = true;
  axios.get("https://api.themoviedb.org/3/discover/tv", {
    params: {
      api_key: "6fc530c8a4a5679024aea82b062cbd34",
      with_genres: id,
      language: "it-IT"
    }
  }).then((resp) => {
    state.seriesList = resp.data.results;
    state.loadingSeries = false;
  });
}