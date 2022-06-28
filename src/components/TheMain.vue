<template>
    <main>
        <h4>Film</h4>
        <ul>
            <li v-for="movie in findMovies" :key="movie.title" class="my-3">
                <div class="img-container"><img :src="imgLoader(movie)"
                        :alt="movie.title"></div>
                <br>
                <strong>Titolo:</strong> {{ movie.title }}
                <br>
                <strong>Titolo originale:</strong> {{ movie.original_title }}
                <br>
                <strong>Lingua Originale: </strong><span>{{ movie.original_language }}
                    <lang-flag :iso="movie.original_language" :squared="false"/>
                </span>
                <br>
                <strong>Voto:</strong> <span v-html="voteLoader(movie)"></span>
            </li>
        </ul>
        <h4>Serie Tv</h4>
        <ul>
            <li v-for="serie in findSeries" :key="serie.name" class="my-3">
                <img :src="imgLoader(serie)" :alt="serie.name">
                <br>
                <strong>Titolo:</strong> {{ serie.name }}
                <br>
                <strong>Titolo originale:</strong> {{ serie.original_name }}
                <br>
                <strong>Lingua Originale:</strong>
                <lang-flag :iso="serie.original_language" :squared="false"/>
                <br>
                <strong>Voto:</strong> <span v-html="voteLoader(serie)"></span>
            </li>
        </ul>
    </main>
</template>

<script>
import { state } from '@/store'

export default {
    methods: {
        imgLoader(name){
            if(name.poster_path === null){
                return require('../assets/imgError.png')
            } else {
            return 'https://image.tmdb.org/t/p/w185' + name.poster_path
            }
        },
        voteLoader(name){
            const vote = Math.ceil(name.vote_average / 2);
            const full = [];
            const empty = [];

            for (let i=0; i<vote; i++){
                full.push('<i class="fa fa-solid fa-star"></i>')
            }
            for (let i=0; i<(5 - vote); i++){
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

    li {
        .img-container {
            height: 278px;
            img{
                max-height: 100%;
            }
        }

        span {
            position: relative;

            .flag-icon {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
            }
        }

    }
}
</style>