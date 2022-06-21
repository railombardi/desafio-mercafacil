<template>
  <PagesLayout class="episode-layout">
    <template v-if="$apollo.queries.episode.loading">
      <PageLoader />
    </template>
    <template v-else>
      <div class="header">
        <p @click="$router.push({ path: from })" class="back">
          <span class="back__arrow" />
          GO BACK
        </p>
        <div class="header__info">
          <span class="header__name"> {{ episode.name }} </span>
          <div class="info info__type">
            <span class="info__title"> Episode </span>
            <span class="info__value"> {{ episode.episode }}</span>
          </div>
          <div class="info info__dimension">
            <span class="info__title"> Date </span>
            <span class="info__value"> {{ episode.air_date }}</span>
          </div>
        </div>
      </div>
      <span class="residents__title"> Cast </span>
    </template>
    <template v-if="episode" #list>
      <CharacterCard
        v-for="character in episode.characters"
        :key="character.id"
        :name="character.name"
        :image="character.image"
        :species="character.species"
        @click.native="toCharacterDetails(character.id)"
      />
    </template>
  </PagesLayout>
</template>

<script>
import PagesLayout from "@/layouts/PagesLayout.vue";
export default {
  components: {
    PagesLayout,
  },
  data() {
    return {
      from: null,
    };
  },
  apollo: {
    episode: {
      query: require("../graphql/Episode.gql"),
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.from = from.path;
    });
  },
  methods: {
    toCharacterDetails(id) {
      this.$router.push({ path: `/characters/${id}` });
    },
  },
};
</script>

<style lang="scss" scoped>
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
  &__name {
    width: 100%;
    padding: 48px 0 33px;
    font-size: 32px;
    line-height: 37.5px;
    color: $basic-black;
    grid-area: name;
    @include desktop() {
      padding: 30px 0 24px;
      padding-top: 30px;
      font-size: 36px;
      line-height: 42px;
    }
  }
  &__info {
    display: grid;
    grid-template:
      "name name" min-content
      "type dimension" 43px
      / 1fr 1fr;
    column-gap: 20px;
    width: 100%;
    justify-content: center;
    align-items: center;
    @include desktop {
      grid-template:
        "name name" min-content
        "type dimension" 43px
        / 240px 240px;
    }
    .info {
      display: flex;
      flex-direction: column;
      &__title {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: $basic-black;
      }
      &__value {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: $secondary-text;
      }
      &__type {
        grid-area: type;
      }
      &__dimension {
        grid-area: dimension;
      }
    }
  }
}
.residents__title {
  width: 100%;
  padding-top: 48px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: $gray-base;
  text-align: left;
  padding-bottom: 16px;
  @include desktop {
    padding-bottom: 24px;
  }
}

.episode-layout {
  ::v-deep .list {
    padding-top: 0;
  }
}
</style>
