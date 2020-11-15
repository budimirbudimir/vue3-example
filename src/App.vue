<template>
  <div id="app">
    <img alt="Shopping List" src="./assets/logo.png" />
    <shopping-list msg="Vue 3 App" />
  </div>
</template>

<script>
import ShoppingList from "./components/ShoppingList.vue";

export default {
  name: "App",
  components: {
    ShoppingList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>