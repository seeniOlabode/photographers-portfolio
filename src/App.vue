<template>
  <site-header />
  <image-gallery @toggle-gallery="galleryOpen = !galleryOpen" />
  <site-services />
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteServices from "./components/SiteServices.vue";
import ImageGallery from "./components/ImageGallery.vue";

export default {
  components: {
    SiteHeader,
    SiteServices,
    ImageGallery,
  },
  provide() {
    return {
      getGalleryOpen: () => this.galleryOpen,
    };
  },
  data() {
    return {
      galleryOpen: false,
    };
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
  font-family: Helvetica, Arial, sans-serif;
}
</style>