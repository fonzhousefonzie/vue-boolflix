<template>
    <div>
        <strong>Cast: </strong>
        <ul>
            <li v-for="actor in actors" :key="actor">{{ actor }}</li>
        </ul>
        <strong>Generi: </strong>
        <ul>
            <li v-for="genre in genres" :key="genre">{{ genre }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props:{
        id: Number,
        kind: String
    },
    data(){
        return{
            actors: [],
            genres:[]
        }
    },
    methods:{
        getActors() {
            axios.get(`https://api.themoviedb.org/3/${this.kind}/${this.id}/credits`, {
                params: {
                    api_key: "6fc530c8a4a5679024aea82b062cbd34"
                }
            }).then((resp) => {
                for (let i = 0; i < 5; i++) {
                    this.actors.push(resp.data.cast[i].name);
                }
            });
        },
        getGenres() {
            axios.get(`https://api.themoviedb.org/3/${this.kind}/${this.id}`, {
                params: {
                    api_key: "6fc530c8a4a5679024aea82b062cbd34"
                }
            }).then((resp) => {
                for (let i = 0; i < resp.data.genres.length; i++) {
                    this.genres.push(resp.data.genres[i].name);
                }
            });
        }
    },
    mounted(){
        this.getActors(),
        this.getGenres()
    }
}
</script>

<style lang="scss" scoped>
</style>