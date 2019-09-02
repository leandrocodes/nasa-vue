<template>
    <div>
        <input type="text" v-model="query" @keyup.prevent="getPics()" />
        <p>{{ query }}</p>

        <div class="results" v-if="results != '' ">
            <div v-for="result in results" class="img-result" :key="result">
                <img v-bind:src="result.links[0].href" />
                <p>{{result.data[0].title.substring(0,80)}}</p>
            </div>
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
            axios.get(`https://images-api.nasa.gov/search?q=${this.query}&media_type=image`)
                
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
 input[type="text"] {
    max-width: 960px;
    width: 100%;
    padding: 8px;
  }

  .results {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .img-result {
    position: relative;
    margin: 1em;
    width: 200px;
    height: 200px;
    float: left;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .img-result p {
    width: 100%;
    z-index: 10;
    padding: 8px;
    margin: 0;
    color: white;
    text-align: center;
    text-shadow: 0px 1px 3px rgba(0,0,0,0.4);
    background: transparent;  /* fallback for old browsers */
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
  }
  .img-result img {
    position:absolute;
    width: inherit; height: inherit;
    object-fit: cover;
  }
</style>