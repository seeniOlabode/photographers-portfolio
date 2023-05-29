<template>
  <site-header @loaded="siteloaded = true" />
  <image-gallery
    v-if="siteloaded"
    @toggle-gallery="galleryOpen = !galleryOpen"
  />
  <about-section v-if="siteloaded" />
  <site-services v-if="siteloaded" />
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteServices from "./components/SiteServices.vue";
import ImageGallery from "./components/ImageGallery.vue";
import AboutSection from "./components/AboutSection.vue";

export default {
  components: {
    SiteHeader,
    SiteServices,
    ImageGallery,
    AboutSection,
  },
  provide() {
    return {
      getGalleryOpen: () => this.galleryOpen,
    };
  },
  data() {
    return {
      galleryOpen: false,
      siteloaded: false,
    };
  },
  // mounted() {
  //   setTimeout(() => [(this.galleryOpen = true)], 100);
  // },
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
  overflow: hidden;
}
</style>