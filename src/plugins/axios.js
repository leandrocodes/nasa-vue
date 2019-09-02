import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.axios = axios.create({
            baseURL: 'https://api.nasa.gov/',
            headers: {
                "Authorization": "apod?api_key=A2xfR6se7zb54COLHWsVwgHhtlS0OF1syc6gtQUP"
            }

        })
    }
})
