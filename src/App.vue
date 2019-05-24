<template>
  <div id="app">
    <Cards></Cards>
    <search></search>
  </div>
</template>

<script>
import Cards from "./components/Cards";
import Search from "./components/Search";

import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);

export default {
  name: "app",
  components: {
    Search,
    Cards
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
