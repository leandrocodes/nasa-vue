<template>
    <div>
        <input type="text" v-model="query" :key-up="getPics()" />
        <p>{{ query }}</p>

        <div v-for="result in results" class="img-result" :key="result">
            <img v-bind:src="result.links[0].href" />
            <p>{{result.data[0].title.substring(0,80)}}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            query: "",
            results: ""
        }
    },
    methods: {
        getPics() {
            axios
                .get(
                    `https://images-api.nasa.gov/search?q=${this.query}&media_type=image`
                )
                .then(res => {
                    this.results = res.data.collection.items
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style>

</style>