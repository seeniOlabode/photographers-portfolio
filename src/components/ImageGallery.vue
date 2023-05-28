<template>
  <div class="img-gallery">
    <button class="gallery-button" @click="$emit('toggle-gallery')">
      <span>View</span> <span>Selected</span> <span>Projects</span>
    </button>
    <svg class="gallery-svg" viewBox="0 0 100 100" height="243" width="248">
      <rect width="20" height="20" x="2" y="2" class="cross-hair-box" />
      <rect width="20" height="20" x="78" y="2" class="cross-hair-box" />
      <rect width="20" height="20" x="2" y="78" class="cross-hair-box" />
      <rect width="20" height="20" x="78" y="78" class="cross-hair-box" />
    </svg>
  </div>
</template>

<script>
export default {
  emits: ["toggle-gallery"],
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
}
.gallery-button {
  background: none;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.cross-hair-box {
  stroke: white;
}

.cross-hair-box:nth-child(1) {
  stroke-dasharray: 2 0 0 2;
}
</style>