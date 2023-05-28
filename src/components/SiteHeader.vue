<template>
  <header class="site-header">
    <h1 class="artist-name" ref="artistNameEl">
      <span
        class="name-word"
        v-for="word in nameWords"
        :key="word + 'artistName'"
      >
        <span
          v-for="letter in word.split('')"
          :key="letter + '-letter'"
          class="name-letter"
        >
          <span class="visually-hidden">{{ letter }}</span>
          <span class="animation-wrapper">
            <span
              class="wrapper-char"
              v-for="char in allCharsArray"
              :key="word + char + 'char'"
            >
              {{ char }}
            </span>
            {{ letter }}
          </span>
        </span>
      </span>
    </h1>
  </header>
</template>

<script>
import { artistName } from "../animations/artistNameAnimations";

let artistNameAnimations;

export default {
  components: {},
  inject: ["getGalleryOpen"],
  data() {
    return {
      nameWords: ["alan", "cospen"],
      allChars: "01234567890abcdefghijklmnopqrstuvwxyz",
      loaded: false,
    };
  },
  computed: {
    allCharsArray() {
      return this.allChars.split("");
    },
    galleryOpen() {
      return this.getGalleryOpen();
    },
  },
  mounted() {
    artistNameAnimations = new artistName(this.$refs.artistNameEl);
    artistNameAnimations.init(() => {
      this.loaded = true;
    });
  },
  watch: {
    galleryOpen(value) {
      if (value) {
        artistNameAnimations.openGallery();
      } else {
        artistNameAnimations.closeGallery();
      }
    },
  },
};
</script>

<style>
/* SITE HEADER STYLES */

.site-header {
  padding: 50px;
  position: relative;
  z-index: 10;
}

.artist-name {
  font-size: 6vw;
  width: fit-content;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: start;
  transform-origin: 0% 0%;
  line-height: 5.3vw;
  font-weight: 400;
}

.artist-name .name-word {
  display: inline-block;
  transform-origin: 0% 0%;
}

.visually-hidden {
  visibility: hidden;
}

.name-letter {
  position: relative;
  overflow: hidden;
  display: inline-block;
  text-align: center;
}

.animation-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  top: 0;
}

/* END SITE HEADER STYLES */
</style>