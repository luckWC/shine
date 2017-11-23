<template>
  <div id="app">
    <v-footer></v-footer>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import footer from './common/footer/footer.vue';
export default {
  name: 'app',
  components:{
    'v-footer': footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
