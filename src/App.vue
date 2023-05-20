<template>
  <site-loader />
</template>

<script>
import SiteLoader from "./components/SiteLoader.vue";

export default {
  components: {
    SiteLoader,
  },
};
</script>

<style>
#app {
  background-image: repeating-linear-gradient(
    to right,
    rgba(172, 172, 194, 0.2),
    rgba(172, 172, 194, 0.2) 2px,
    transparent 2px,
    transparent
  );
  background-size: 84px 84px;
  background-color: #000000;
  height: 100vh;
  width: 100vw;
  color: white;
}
</style>