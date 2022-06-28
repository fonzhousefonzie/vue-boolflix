import Vue from 'vue';
import axios from 'axios';

export const state = Vue.observable({
    moviesList : [],
    seriesList : []
});

export function fetchMovies(searchText){
    axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "6fc530c8a4a5679024aea82b062cbd34",
        query: searchText,
        language: "it-IT"
      }
    }).then((resp) => {
        state.moviesList = resp.data.results
    })
}

export function fetchSeries(searchText){
    axios.get("https://api.themoviedb.org/3/search/tv", {
      params: {
        api_key: "6fc530c8a4a5679024aea82b062cbd34",
        query: searchText,
        language: "it-IT"
      }
    }).then((resp) => {
        state.seriesList = resp.data.results
    })
}