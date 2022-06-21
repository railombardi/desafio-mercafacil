<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.00003 0L0.590027 1.41L5.17003 6L0.590027 10.59L2.00003 12L8.00003 6L2.00003 0Z"
      fill="#8E8E93"
    />
  </svg>
</template>

<script>
export default {
  name: "ArrowRightIcon",
  props: {
    width: {
      type: Number,
      default: 8,
    },
    height: {
      type: Number,
      default: 12,
    },
  },
};
</script>

<style lang="scss" scoped></style>
