<template>
    <div>
        <input type="text" v-model="query" />
        <p>{{ query }}</p>
    </div>
</template>

<script>
export default {
    name: "HelloWolrd",
    data() {
        return {
            query: "",
            results: "",
        }
    },
    methods: {
        getPics() {
          this.results = 'result goes here...'
        }
    }
}
</script>

<style>
</style>