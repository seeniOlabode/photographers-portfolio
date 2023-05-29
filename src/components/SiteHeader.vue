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

    <h5 class="project-name" v-show="loaded">Portfolio 22’ - 23’</h5>

    <ul class="social-list" v-show="loaded">
      <li
        class="social"
        v-for="social in socials"
        :key="social + 'artist-social'"
      >
        <span class="social-inner-wrapper">{{ social }}</span>
      </li>
    </ul>

    <ul class="link-list" v-show="loaded">
      <li
        class="link"
        v-for="(link, i) in links"
        :key="link + i"
        :class="{ 'gal-selected': galleryOpen }"
      >
        {{ link }}
      </li>
    </ul>
  </header>
</template>

<script>
import { artistName } from "../animations/artistNameAnimations";

let artistNameAnimations;

export default {
  components: {},
  inject: ["getGalleryOpen"],
  emits: ["loaded"],
  data() {
    return {
      nameWords: ["alan", "cospen"],
      allChars: "01234567890abcdefghijklmnopqrstuvwxyz",
      loaded: false,
      socials: ["Instagram", "Pinterest", "Twitter", "unsplash", "Email"],
      links: ["Home", "about", "gallery", "contact me"],
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
      this.$emit("loaded");
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
  display: flex;
  align-items: start;
  gap: 200px;
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

.project-name {
  text-transform: uppercase;
  color: #8a8a8a;
}

.social-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.social {
  overflow: hidden;
}

.social-inner-wrapper {
  text-transform: uppercase;
  display: inline-block;
  color: #8a8a8a;
}

.link-list {
  text-transform: uppercase;
  color: #8a8a8a;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.link-list .link:last-child {
  color: white;
}

.link:nth-child(1):not(.gal-selected) {
  background: white;
  color: black;
  width: fit-content;
  display: flex;
  align-items: center;
}

.gal-selected:nth-child(3) {
  background: white;
  color: black;
  width: fit-content;
  display: flex;
  align-items: center;
}

/* END SITE HEADER STYLES */
</style>