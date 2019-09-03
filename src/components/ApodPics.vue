/* eslint-disable */
<template>
    <div class="apod">
        <h1>APOD</h1>
        <button @click="getApod">get</button>


        <div class="apod-result" v-if="result">
          <img :src="result.hdurl" alt="">
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            result: ''
        }
    },
    methods: {
        getApod() {
            axios
                .get(
                    `https://api.nasa.gov/planetary/apod?api_key=A2xfR6se7zb54COLHWsVwgHhtlS0OF1syc6gtQUP`
                )
                .then(res => {
                   this.result = res.data
                })
        }
    }
}
</script>

<style>

</style>