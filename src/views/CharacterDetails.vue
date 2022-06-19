<template>
  <div
    v-if="!this.$apollo.queries.character.loading"
    class="characters-details"
  >
    <div class="container">
      <div class="header">
        <p @click="$router.push({ name: 'characters' })" class="back">
          <span class="back__arrow" />
          GO BACK
        </p>
        <img class="header__img" :src="character.image" />
        <span class="header__name"> {{ character.name }}</span>
      </div>
      <div class="details">
        <div class="details__informations">
          <div class="details__title">
            <span> Informations </span>
          </div>
          <div
            v-for="key in characterInformationsKeys"
            :key="key"
            class="block"
            :class="{ 'block--clickable': key === 'location' }"
          >
            <span class="block__key">{{ key }}</span>
            <span v-if="key !== 'location'" class="block__info">{{
              character[key] ? character[key] : "-"
            }}</span>
            <span v-else class="block__info">{{ character[key].name }}</span>
          </div>
        </div>
        <div class="details__episodes">
          <div class="details__title">
            <span> Episodes </span>
          </div>
          <div class="episodes__list">
            <div
              v-for="episode in character.episode"
              :key="episode.id"
              class="block block--clickable"
            >
              <span class="block__key">{{ episode.episode }}</span>
              <span class="block__info">{{ episode.name }}</span>
              <span class="block__date"> {{ episode.air_date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  apollo: {
    character: {
      query: require("../graphql/Character.gql"),
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
  data() {
    return {
      character: {},
    };
  },
  computed: {
    characterInformationsKeys() {
      const excludeKeys = ["episode", "id", "__typename", "image", "created"];
      const keys = [];
      Object.keys(this.character).forEach((key) => {
        if (!excludeKeys.includes(key)) {
          keys.push(key);
        }
      });
      return keys;
    },
  },
};
</script>

<style lang="scss" scoped>
.characters-details {
  position: relative;
  height: 100%;
  overflow: auto;
  .container {
    .header {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      position: relative;
      .back {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: $primary-text;
        position: absolute;
        top: 24px;
        left: 0;
        cursor: pointer;
        @include desktop() {
          top: 44px;
        }
        &__arrow::before {
          content: "\2190";
        }
      }
      &__img {
        width: 146px;
        height: 148px;
        border-radius: 150px;
        margin-top: 64px;
        @include desktop() {
          width: 300px;
          height: 300px;
          margin-top: 16px;
        }
      }
      &__name {
        padding-top: 16px;
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        color: $basic-black;
        text-align: center;
        @include desktop() {
          font-size: 48px;
          line-height: 56px;
        }
      }
    }
    .details {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 20px;
      padding-bottom: 100px;
      width: 100%;
      @include tablet() {
        padding-bottom: 150px;
        grid-template-columns: repeat(2, 413px);
        justify-content: center;
      }
      &__title {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: $gray-base;
        padding: 32px 0 16px;
        @include tablet() {
          padding: 42px 0 36px;
        }
      }
      .episodes__list {
        @include tablet() {
          overflow: auto;
          max-height: 352px;
        }
      }
      .block {
        display: flex;
        flex-direction: column;
        padding: 9px 16px 12px;
        border-bottom: 1px solid $surface-overlay;
        &--clickable {
          cursor: pointer;
        }
        &__key {
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: $basic-black;
          text-transform: capitalize;
        }
        &__info {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: $secondary-text;
        }
        &__date {
          font-weight: 500;
          font-size: 10px;
          line-height: 16px;
          color: $gray-base;
        }
      }
    }
  }
}
</style>
