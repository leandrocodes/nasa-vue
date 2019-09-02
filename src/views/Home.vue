<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PicsNasa msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PicsNasa from '@/components/PicsNasa.vue'

export default {
  name: 'home',
  components: {
    PicsNasa
  }
}
</script>
