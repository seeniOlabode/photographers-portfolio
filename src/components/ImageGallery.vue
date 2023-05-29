<template>
  <div class="img-gallery" ref="galleryEl">
    <svg class="gallery-svg" viewBox="0 0 100 100" height="243" width="248">
      <path
        d="
    M 10,1
    L 0,1
    L 0,11
    "
        stroke="white"
        class="cross-hair"
      />
      <path
        d="
    M 90,1
    L 100,1
    L 100,11
    "
        stroke="white"
        class="cross-hair"
      />
      <path
        d="
    M 0,89
    L 0,99
    L 10,99
    "
        stroke="white"
        class="cross-hair"
      />
      <path
        d="
    M 100,89
    L 100,99
    L 90,99
    "
        stroke="white"
        class="cross-hair"
      />
    </svg>
    <div class="img-container" @click="$emit('toggle-gallery')">
      <div class="images-holder">
        <div
          class="img-div"
          v-for="img in imageURL"
          :key="img"
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
        <div
          class="img-div"
          v-for="img in imageURL"
          :key="img"
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
      </div>
    </div>
    <div class="placeholders" @click="$emit('toggle-gallery')">
      <div
        class="placeholder-img-div"
        v-for="img in placeHolderArray"
        :key="img + 'place'"
      >
        <div
          class="placeholder-inner"
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Gallery } from "../animations/galleryAnimations";

let galleryAnimations;

export default {
  emits: ["toggle-gallery"],
  inject: ["getGalleryOpen"],
  data() {
    return {
      imageURL: [
        "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80",
        "https://images.unsplash.com/photo-1542513217-0b0eedf7005d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        "https://images.unsplash.com/photo-1504553101389-41a8f048c3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1423&q=80",
        "https://images.unsplash.com/photo-1523297736436-356615162cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxibGFjayUyMG1vZGVsJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
        "https://images.unsplash.com/photo-1584361853901-dd1904bb7987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      ],
    };
  },
  computed: {
    galleryOpen() {
      return this.getGalleryOpen();
    },
    placeHolderArray() {
      return this.imageURL.slice(0, 3);
    },
  },
  watch: {
    galleryOpen(value) {
      value
        ? galleryAnimations.openGallery()
        : galleryAnimations.closeGallery();
    },
  },
  mounted() {
    galleryAnimations = new Gallery(this.$refs.galleryEl);
    setTimeout(() => {
      galleryAnimations.init();
    }, 2);
  },
};
</script>

<style scoped>
.img-gallery {
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.gallery-svg {
  position: absolute;
  z-index: -1;
}

.gallery-cross-hair:nth-child(1) {
  transform: rotate(45deg);
}

.img-container {
  border-radius: 100%;
  position: absolute;
  z-index: -1;
  width: 210px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: border-color 0.8s;
  border: none;
  border-color: transparent;
}

.images-holder {
  display: grid;
  grid-template-columns: repeat(12, 600px);
  grid-template-rows: 600px;
  gap: 100px;
  position: absolute;
  transform: translateX(-200px);
  visibility: hidden;
}

.placeholders {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;
}

.placeholders .placeholder-img-div {
  width: 160px;
  height: 160px;
  position: absolute;
  transition: transform 0.5s;
  transform-origin: 0% 50%;
}

.placeholder-inner {
  width: 100%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1542513217-0b0eedf7005d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80");
  background-size: cover;
  transform: translateY(0);
  transition: transform 0.5s;
}

.placeholder-img-div:hover > .placeholder-inner {
  transform: translateY(-25px) !important;
}

@for $i from 1 to 3 {
  .placeholder-img-div:nth-child($i) .placeholder-inner {
    transform: rotate(calc(($i * -0.2) * 10deg));
  }
}

.img-div {
  background-image: url("https://images.unsplash.com/photo-1542513217-0b0eedf7005d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80");
  background-size: 100%;
  width: 100%;
  cursor: pointer;
  transition: all 0.8s;
}

.img-div:hover {
  background-size: 150%;
}

.camera-eye {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  position: absolute;
  border: solid 1px white;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  overflow: hidden;
  pointer-events: none;
}
</style>