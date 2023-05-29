<template>
  <section class="about-section" ref="aboutEl">
    <div class="artist-image-wrapper">
      <div class="artist-image"></div>
    </div>
    <p class="about-artist">
      <span
        class="outer-wrapper"
        v-for="(text, i) in aboutTextArray"
        :key="text + i"
      >
        <span class="inner-wrap" v-html="text"></span>
      </span>
    </p>
    <h4 class="header">
      <span class="outer-wrap">
        <span class="inner-wrap">About me</span>
      </span>
    </h4>
  </section>
</template>

<script>
import { About } from "../animations/aboutArtistAnimations";

let artistAbout;

export default {
  inject: ["getGalleryOpen"],
  data() {
    return {
      aboutText:
        "I'm a photographer who is passionate about capturing the beauty of the world through my lens",
    };
  },
  computed: {
    aboutTextArray() {
      const editedArray = [];
      this.aboutText
        .split(" ")
        .forEach((text) => editedArray.push(text, "&nbsp;"));
      return editedArray;
    },
    galleryOpen() {
      return this.getGalleryOpen();
    },
  },
  watch: {
    galleryOpen(value) {
      value ? artistAbout.openGallery() : artistAbout.closeGallery();
    },
  },
  mounted() {
    artistAbout = new About(this.$refs.aboutEl);
    artistAbout.init();
    console.log(artistAbout);
  },
};
</script>

<style scoped>
.about-section {
  position: absolute;
  bottom: 50px;
}
.artist-image {
  width: 505px;
  background-image: url("https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1285&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  filter: grayscale(1);
}

.about-artist {
  text-transform: uppercase;
  color: #8a8a8a;
  margin-top: 22px;
  font-size: 16px;
  max-width: 205px;
  padding-left: 22px;
  letter-spacing: 1px;
  line-height: 18px;
}

.header {
  font-size: 20px;
  text-transform: uppercase;
  padding-left: 22px;
  margin-top: 22px;
}

.artist-image-wrapper {
  overflow: hidden;
}

.outer-wrapper {
  overflow: hidden;
  display: inline-block;
}

.inner-wrap {
  display: inline-block;
}
</style>