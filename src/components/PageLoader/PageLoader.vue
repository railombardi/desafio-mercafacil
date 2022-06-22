<template>
  <v-overlay :absolute="absolute" :value="true">
    <img class="loader" :src="require('../../assets/images/loading.png')" />
  </v-overlay>
</template>

<script>
export default {
  name: "PageLoader",
  props: {
    /**
     * Defines whether or not the component will have absolute position
     */
    absolute: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  animation: complete-rotation 1.2s linear infinite;
  @keyframes complete-rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
