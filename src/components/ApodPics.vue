<template>
    <div class="apod">
        <h1>APOD</h1>
        <div class="apod-result" v-if="result">
            <h1> {{ result.title }} </h1>
            <img :src="result.hdurl" alt />
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            result: "",
            api_key: "A2xfR6se7zb54COLHWsVwgHhtlS0OF1syc6gtQUP"
        }
    },
    created() {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${this.api_key}`)
            .then(res => {this.result = res.data})
    }
}
</script>

<style>
</style>