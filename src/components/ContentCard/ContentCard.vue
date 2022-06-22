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
    /**
     * Card title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Card subtitle
     */
    subtitle: {
      type: String,
      default: "",
    },
    /**
     * Card field for additional information
     */
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
  justify-content: center;
  background: #fafafa;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  width: 312px;
  height: 128px;
  padding: 2px 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
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
  &__title,
  &__subtitle,
  &__extra {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    white-space: nowrap;
  }
  &__title,
  &__subtitle {
    @supports (-webkit-line-clamp: 2) {
      max-width: 100%;
      max-height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
    }
  }
}
</style>
