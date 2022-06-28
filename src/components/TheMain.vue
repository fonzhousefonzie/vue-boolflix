<template>
    <div>
        <h4>Movies</h4>
        <ul>
            <li v-for="movie in findMovies" :key="movie.title"><strong>Titolo:</strong> {{movie.title}}<br><strong>Titolo originale:</strong> {{movie.original_title}}<br><strong>Lingua Originale:</strong> {{movie.original_language}}<br><strong>Voto:</strong> {{movie.vote_average}}</li>
        </ul>
        <h4>Series</h4>
        <ul>
            <li v-for="serie in findSeries" :key="serie.name"><strong>Titolo:</strong> {{serie.name}}<br><strong>Titolo originale:</strong> {{serie.original_name}}<br><strong>Lingua Originale:</strong> {{serie.original_language}}<br><strong>Voto:</strong> {{serie.vote_average}}</li>
        </ul>
    </div>
</template>

<script>
import { state } from '@/store'

export default {
    computed:{
        findMovies(){
            return state.moviesList
        },
        findSeries(){
            return state.seriesList
        }
    }
}
</script>

<style lang="scss" scoped>
    h4{
        text-align: center;
    }
</style>