<template>
    <header class="d-flex justify-content-between text-light">
        <div class="logo">
            <img alt="Boolflix Logo" src="../assets/logo.png">
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Cerca un titolo" v-model="searchText"
                @keyup.enter.prevent="searchMoviesAndSeries">
            <i class="fa fa-solid fa-magnifying-glass" @click="searchMoviesAndSeries"></i>
        </div>
    </header>
</template>

<script>
import { fetchMovies } from '../store'
import { fetchSeries } from '../store'

export default {
    data() {
        return {
            searchText: ""
        }
    },
    methods: {
        searchMoviesAndSeries() {
            fetchMovies(this.searchText);
            fetchSeries(this.searchText);
        }
    },
    mounted() {
        this.searchMoviesAndSeries()
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