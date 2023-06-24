<template>
  <div>
    <NavBar />
    <router-view :list="data"></router-view>
  </div>
</template>

<script>
import data from "./assets/theme";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  data() {
    return {
      data,
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
</style>
