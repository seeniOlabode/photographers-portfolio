<template>
  <div class="services-container" ref="artistServiceEl">
    <h2 class="service-header">
      <span class="word-wrapper">
        <span class="word-inner-wrapper"> PHOTO- </span>
      </span>
      <span class="word-wrapper">
        <span class="word-inner-wrapper"> GRAPHER </span>
      </span>
    </h2>

    <ul class="service-list">
      <li
        class="service"
        v-for="service in services"
        :key="service + 'artist-service'"
      >
        <span class="service-inner-wrapper">{{ service }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { artistService } from "../animations/artistServiceAnimations";

let artistServiceAnimations;

export default {
  inject: ["getGalleryOpen"],
  data() {
    return {
      services: ["lifestyle", "portrait", "landscape", "wild life"],
    };
  },
  computed: {
    galleryOpen() {
      return this.getGalleryOpen();
    },
  },
  mounted() {
    artistServiceAnimations = new artistService(this.$refs.artistServiceEl);
    artistServiceAnimations.init();
  },
  watch: {
    galleryOpen(value) {
      if (value) {
        artistServiceAnimations.openGallery();
      } else {
        artistServiceAnimations.closeGallery();
      }
    },
  },
};
</script>

<style scoped>
.services-container {
  position: absolute;
  right: 100px;
  bottom: 50px;
}

.service-header {
  font-size: 3vw;
  font-weight: 400;
  display: flex;
  flex-direction: column;
}

.word-wrapper {
  overflow: hidden;
}

.word-inner-wrapper {
  display: inline-block;
}

ul.service-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  margin: 0;
}

.service {
  text-transform: uppercase;
  color: #8a8a8a;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  overflow: hidden;
}

.service-inner-wrapper {
  display: inline-block;
}
</style>