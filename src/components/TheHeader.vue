<template>
    <header class="d-flex justify-content-between text-light">
        <div class="logo" @click="refresh()">
            <img alt="Boolflix Logo" src="../assets/logo.png">
        </div>
        <div class="search-bar">
            <div class="dropdown text-start">
                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Film per Genere
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#" v-for="genre in moviesGenres" :key="genre.name"
                            @click.prevent="showSelectedMoviesByGenre(genre.id)">{{ genre.name }}</a></li>
                </ul>
            </div>
            <div class="dropdown text-start">
                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Serie Tv per Genere
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#" v-for="genre in seriesGenres" :key="genre.name"
                            @click.prevent="showSelectedSeriesByGenre(genre.id)">{{ genre.name }}</a></li>
                </ul>
            </div>
            <input type="text" placeholder="Cerca un titolo" v-model="searchText"
                @keyup.enter.prevent="searchMoviesAndSeries">
            <i class="fa fa-solid fa-magnifying-glass" @click="searchMoviesAndSeries"></i>
        </div>
    </header>
</template>

<script>
import { fetchMovies, fetchSeries, fetchMoviesByGenre, fetchSeriesByGenre } from '../store'
import axios from 'axios'

export default {
    data() {
        return {
            searchText: "",
            moviesGenres: [],
            seriesGenres: []
        }
    },
    methods: {
        searchMoviesAndSeries() {
            fetchMovies(this.searchText);
            fetchSeries(this.searchText);
            this.searchText = "";
        },
        getMoviesGenres() {
            axios.get("https://api.themoviedb.org/3/genre/movie/list", {
                params: {
                    api_key: "6fc530c8a4a5679024aea82b062cbd34",
                    language: "it-IT"
                }
            }).then((resp) => {
                for (let i = 0; i < resp.data.genres.length; i++) {
                    this.moviesGenres.push(resp.data.genres[i]);
                }
            });
        },
        getSeriesGenres() {
            axios.get("https://api.themoviedb.org/3/genre/tv/list", {
                params: {
                    api_key: "6fc530c8a4a5679024aea82b062cbd34",
                    language: "it-IT"
                }
            }).then((resp) => {
                for (let i = 0; i < resp.data.genres.length; i++) {
                    this.seriesGenres.push(resp.data.genres[i]);
                }
            });
        },
        showSelectedMoviesByGenre(id) {
            fetchMoviesByGenre(id);
        },
        showSelectedSeriesByGenre(id) {
            fetchSeriesByGenre(id);
        },
        refresh(){
            window.location.reload();
        }
    },
    mounted() {
        this.searchMoviesAndSeries(),
            this.getMoviesGenres(),
            this.getSeriesGenres()
    }
}
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    max-height: 4rem;
    background: #141414;
    padding: 1rem 2rem;
    z-index: 10;

    .logo {
        height: 100%;
        cursor: pointer;

        img {
            max-width: 150px;
            max-height: 100%;
        }
    }

    .search-bar {
        display: flex;
        gap: 1rem;
        align-items: center;

        input {
            background-color: #141414;
            color: whitesmoke;
            border: 1px solid whitesmoke;
        }

        i {
            cursor: pointer;
        }
    }
}
</style>