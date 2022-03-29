<template>
  <HeaderTop />
  <h2>안녕!!</h2>
  <h2>{{ food }}맛있게 먹어!!</h2>
</template>



<script>
import HeaderTop from "./components/layout/HeaderTop.vue";

export default {
  name: "App",
  components: {
    HeaderTop,
  },
  data() {
    return {
      animal: "monkey",
      food: "banana",
    };
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
