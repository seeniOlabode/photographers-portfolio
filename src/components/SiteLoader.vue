<template>
  <div class="loader">
    <h1 class="artist-name">
      <span class="word" v-for="(word, j) in nameWordsArray" :key="word[j] + j">
        <span
          class="size-filler"
          v-for="letter in word"
          :key="letter + word[i] + i"
        >
          {{ letter }}
          <span class="effect-wrapper">
            <span v-for="char in allCharactersArray" :key="char + 'char'">{{
              char
            }}</span>
            <span>{{ letter }}</span>
          </span>
        </span>
      </span>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameWords: ["ALAN", "COSPEN"],
      allCharacters: "0123456789abcdefghijklmnopqrstuvwxyz",
    };
  },
  computed: {
    allCharactersArray() {
      return this.allCharacters.split("");
    },
    nameWordsArray() {
      let array = [];
      this.nameWords.forEach((word, i) => {
        let wordArray = word.split("");
        array.push(wordArray);
      });
      return array;
    },
  },
};
</script>

<style scoped>
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.artist-name {
  font-family: Helvetica, Arial, sans-serif;
  margin: 0;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 128px;
  font-weight: 400;
}

.size-filler {
  color: rgba(0, 0, 0, 0);
}

.word {
  position: relative;
}

.effect-wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  animation: effectWrapper 5s;
  animation-timing-function: cubic-bezier(0.64, 0.03, 0.37, 0.98);
  animation-fill-mode: forwards;
  color: rgba(255, 255, 255, 1);
}

.size-filler:nth-child(odd) .effect-wrapper {
  animation-delay: 0.2s;
}

.size-filler:nth-child(3n + 0) .effect-wrapper {
  animation-delay: 0.3s;
}

.size-filler:nth-child(4n + 0) .effect-wrapper {
  animation-delay: 0.5s;
}

.size-filler {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

@keyframes effectWrapper {
  100% {
    transform: translateY(-97%);
  }
}
</style>