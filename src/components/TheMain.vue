<template>
    <div>
        <h4>Movies</h4>
        <ul>
            <li v-for="movie in findMovies" :key="movie.title">{{movie.title}}</li>
        </ul>
        <h4>Series</h4>
        <ul>
            <li v-for="serie in findSeries" :key="serie.title">{{serie.title}}</li>
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