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
    /**
     * Character's Name
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * Characters's image link
     */
    image: {
      type: String,
      required: true,
    },
    /**
     * Character's species, ex: human, alien, robot...
     */
    species: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-rows: 232px 76px;
  width: 312px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  @include desktop() {
    grid-template-rows: 168px 76px;
    width: 240px;
    &:hover {
      width: 260px;
    }
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
      color: $text-placeholder;
    }
  }
}
</style>
