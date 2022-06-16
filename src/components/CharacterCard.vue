<template>
  <div class="card">
    <img class="card__img" :src="image" />
    <div class="card__info">
      <span class="name"> {{ name }}</span>
      <span class="species"> {{ species }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    species: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-rows: 168px 76px;
  width: 240px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    width: 260px;
    transform: translateX(-10px);
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px 4px 0;
  }
  &__info {
    display: flex;
    flex-direction: column;
    max-width: 240px;
    padding: 12px 16px;
    .name {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      max-width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .species {
      font-size: 14px;
      line-height: 21px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
}
</style>
