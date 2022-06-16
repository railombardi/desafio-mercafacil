<template>
  <div @scroll="getNextCharacters" class="characters">
    <div class="container">
      <img :src="require('../assets/images/Characters.png')" />
      <div class="characters__filters">
        <InputSearch v-model="search" placeholder="Filter by name..." />
        <DropdownFilter
          @change="handleGenderChange($event)"
          :options="genderOptions"
          placeholder="Gender"
        />
        <DropdownFilter
          @change="handleStatusChange($event)"
          :options="statusOptions"
          placeholder="Status"
        />
      </div>
      <div v-if="characters" class="characters__list">
        <CharacterCard
          v-for="character in characters.results"
          :key="character.id"
          :name="character.name"
          :image="character.image"
          :species="character.species"
          @click.native="toCharacterDetails(character.id)"
        />
      </div>
      <PageLoader v-else class="characters__loader" />
    </div>
  </div>
</template>

<script>
import InputSearch from "@/components/InputSearch.vue";
import CharacterCard from "@/components/CharacterCard.vue";
import PageLoader from "@/components/PageLoader.vue";
import DropdownFilter from "@/components/DropdownFilter.vue";
export default {
  components: {
    InputSearch,
    CharacterCard,
    PageLoader,
    DropdownFilter,
  },
  name: "CharactersView",
  data() {
    return {
      page: 1,
      search: "",
      genderFilter: "",
      statusFilter: "",
    };
  },
  computed: {
    genderOptions() {
      return ["female", "male", "genderless", "unknown"];
    },
    statusOptions() {
      return ["alive", "dead", "unknown"];
    },
  },
  apollo: {
    characters: {
      query: require("../graphql/Characters.gql"),
      variables() {
        return {
          page: this.page,
          filter: {
            name: this.search,
            gender: this.genderFilter,
            status: this.statusFilter,
          },
        };
      },
    },
  },
  methods: {
    toCharacterDetails(id) {
      window.open(`character/${id}`, "__blank");
    },
    handleGenderChange(newValue) {
      this.genderFilter = newValue;
    },
    handleStatusChange(newValue) {
      this.statusFilter = newValue;
    },
    incrementPage() {
      this.page++;
    },
    getNextCharacters(e) {
      let bottomOfList =
        e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight;
      if (bottomOfList && this.page < 42) {
        this.incrementPage();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.characters {
  padding-top: 26px;
  position: relative;
  height: 100%;
  overflow: auto;
  .container {
    width: 1020px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }
  &__filters {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 240px);
    column-gap: 20px;
    padding-top: 16px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, 240px);
    column-gap: 20px;
    row-gap: 24px;
    padding: 60px 0;
    width: 100%;
  }
  &__loader {
    position: absolute;
    top: 80%;
  }
}
</style>
