<template>
  <div class="card">
    <span class="card__title">{{ title }}</span>
    <span class="card__subtitle">{{ subtitle }}</span>
    <span class="card__extra">{{ extra }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    extra: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  width: 312px;
  height: 128px;
  padding: 25px 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  @include tablet() {
    width: 240px;
    &:hover {
      width: 260px;
    }
  }
  &__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
  &__subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: $text-placeholder;
  }
  &__extra {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: $text-placeholder;
  }
}
</style>
