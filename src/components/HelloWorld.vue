<template>
    <div>
        <input type="text" v-model="query" v-on:key-up="getPics()">
        <p>{{ query }}</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            query: "",
            results: "",
        }
    },
    methods: {
        getPics() {
          axios.get(`https://images-api.nasa.gov/search?q=${this.query}&media_type=image`)
              .then(res =>{
                this.results = res.data.collection.items
              })
              .catch(err =>{
                console.log(err)
              })
        }
    }
}
</script>

<style>
</style>