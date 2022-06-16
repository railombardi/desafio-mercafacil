<template>
  <img class="loader" :src="require('../assets/images/loading.png')" />
</template>

<script>
export default {
  name: "PageLoader",
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
