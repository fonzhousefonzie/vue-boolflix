<template>
    <main>
        <h2>Film</h2>
        <ul>
            <div class="loader" :class="{ 'd-none': !loadingMovies }"><img src="../assets/loader.png" alt=""></div>
            <li v-for="movie in findMovies" :key="movie.title" class="my-3" :class="{ 'd-none': loadingMovies }">
                <div class="img-container"><img :src="imgLoader(movie)" :alt="movie.title">
                    <div class="info-container">
                        <strong class="fs-4">{{ movie.title }}</strong>
                        <br>
                        <strong>Titolo originale:</strong> {{ movie.original_title }}
                        <br>
                        <strong>Lingua Originale: </strong><span>{{ movie.original_language }}
                            <lang-flag :iso="movie.original_language" :squared="false" />
                        </span>
                        <br>
                        <strong>Voto:</strong> <span v-html="voteLoader(movie)"></span>
                        <br>
                        <strong>Trama: </strong>{{ movie.overview }}
                    </div>
                </div>
            </li>
        </ul>
        <h2>Serie Tv</h2>
        <ul>
            <div class="loader" :class="{ 'd-none': !loadingSeries }"><img src="../assets/loader.png" alt=""></div>
            <li v-for="serie in findSeries" :key="serie.name" class="my-3" :class="{ 'd-none': loadingMovies }">
                <div class="img-container"><img :src="imgLoader(serie)" :alt="serie.name">
                    <div class="info-container">
                        <strong class="fs-4">{{ serie.name }}</strong>
                        <br>
                        <strong>Titolo originale:</strong> {{ serie.original_name }}
                        <br>
                        <strong>Lingua Originale:</strong><span>{{ serie.original_language }}
                            <lang-flag :iso="serie.original_language" :squared="false" />
                        </span>
                        <br>
                        <strong>Voto:</strong> <span v-html="voteLoader(serie)"></span>
                        <br>
                        <strong>Trama: </strong>{{ serie.overview }}
                    </div>
                </div>
            </li>
        </ul>
    </main>
</template>

<script>
import { state } from '@/store'

export default {
    methods: {
        imgLoader(name) {
            if (name.poster_path === null) {
                return require('../assets/imgError.png')
            } else {
                return 'https://image.tmdb.org/t/p/w342' + name.poster_path
            }
        },
        voteLoader(name) {
            const vote = Math.ceil(name.vote_average / 2);
            const full = [];
            const empty = [];

            for (let i = 0; i < vote; i++) {
                full.push('<i class="fa fa-solid fa-star"></i>')
            }
            for (let i = 0; i < (5 - vote); i++) {
                empty.push('<i class="fa fa-regular fa-star"></i>')
            }
            const fullVote = full.join('') + empty.join('');

            return fullVote;
        }
    },
    computed: {
        findMovies() {
            return state.moviesList
        },
        findSeries() {
            return state.seriesList
        },
        loadingMovies() {
            let loading = state.loadingMovies;
            return loading
        },
        loadingSeries() {
            let loading = state.loadingSeries;
            return loading
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    overflow: auto;
    padding: 1rem 3rem;

    .loader {
        min-height: 200px;
        width: 100%;

        img {
            margin-top: 3rem;
            max-width: 50px;
            animation: rotate 700ms linear infinite;
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }

            50% {
                transform: rotate(180deg);
            }

            to {
                transform: rotate(360deg);
            }
        }
    }

    li {
        .img-container {
            height: 514px;
            position: relative;

            img {
                max-height: 100%;
            }
        }

        .info-container {
            opacity: 0;
            text-align: left;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0,0,0,0.9);
            border: 1px solid white;
            padding: 1rem;
            overflow: auto;

            span {
                position: relative;

                .flag-icon {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                }
            }

            &:hover{
                opacity: 1;
            }
        }

    }
}
</style>