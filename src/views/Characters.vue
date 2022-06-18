<template>
  <div @scroll="getNextCharacters" class="characters">
    <PageLoader
      v-if="this.$apollo.queries.characters.loading"
      class="characters__loader"
    />
    <div class="container">
      <img
        class="characters__img"
        :width="charactersImg.width"
        :height="charactersImg.height"
        :src="require('../assets/images/Characters.png')"
      />
      <div class="characters__filters">
        <InputSearch v-model="search" placeholder="Filter by name..." />
        <DropdownFilter
          v-if="$mq === 'lg'"
          @change="handleGenderChange($event)"
          :value="genderFilter"
          :options="genderOptions"
          placeholder="Gender"
        />
        <DropdownFilter
          v-if="$mq === 'lg'"
          @change="handleStatusChange($event)"
          :value="statusFilter"
          :options="statusOptions"
          placeholder="Status"
        />
        <v-dialog class="dialog" width="312" v-model="dialogVisible" v-else>
          <template v-slot:activator="{ on, attrs }">
            <div
              v-on="on"
              v-bind="attrs"
              v-if="$mq !== 'lg'"
              class="characters__filters btn-filters"
            >
              <ActionButton icon="filter" label="ADVANCED FILTERS" />
            </div>
          </template>
          <v-card>
            <div class="dialog__header">
              <span> Filters </span>
              <CloseIcon @click.native="closeDialog"></CloseIcon>
            </div>
            <DropdownFilter
              @change="handleGenderChange($event)"
              :value="genderFilter"
              :options="genderOptions"
              placeholder="Gender"
            />
            <DropdownFilter
              @change="handleStatusChange($event)"
              :value="statusFilter"
              :options="statusOptions"
              placeholder="Status"
            />
          </v-card>
        </v-dialog>
      </div>
      <div class="characters__list">
        <CharacterCard
          v-for="character in charactersList"
          :key="character.id"
          :name="character.name"
          :image="character.image"
          :species="character.species"
          @click.native="toCharacterDetails(character.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharactersView",
  data() {
    return {
      page: 1,
      totalPages: null,
      search: "",
      genderFilter: "",
      statusFilter: "",
      charactersList: [],
      dialogVisible: false,
    };
  },
  computed: {
    genderOptions() {
      return ["female", "male", "genderless", "unknown"];
    },
    statusOptions() {
      return ["alive", "dead", "unknown"];
    },
    charactersImg() {
      return {
        width: this.$mq === "sm" ? 312 : 600,
        height: this.$mq === "sm" ? 104 : 200,
      };
    },
  },
  watch: {
    search() {
      this.page = 1;
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
      result({ data }) {
        this.totalPages = data.characters.info.pages;
        if (this.page == 1) {
          this.charactersList = JSON.parse(
            JSON.stringify(data.characters.results)
          );
        } else {
          this.charactersList.push(...data.characters.results);
        }
      },
    },
  },
  methods: {
    toCharacterDetails(id) {
      window.open(`character/${id}`, "__blank");
    },
    handleGenderChange(newValue) {
      this.genderFilter = newValue;
      this.page = 1;
    },
    handleStatusChange(newValue) {
      this.statusFilter = newValue;
      this.page = 1;
    },
    handleOrderChange(newValue) {
      this.order = newValue;
    },
    incrementPage() {
      this.page++;
    },
    getNextCharacters(e) {
      let bottomOfList =
        e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight;
      if (bottomOfList && this.page < this.totalPages) {
        this.incrementPage();
      }
    },
    closeDialog() {
      this.dialogVisible = false;
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
    display: flex;
    width: 100%;
    padding: 0 24px;
    flex-direction: column;
    height: 100%;
    align-items: center;
    margin: 0 auto;
    @include desktop() {
      width: 1020px;
      padding: 0;
    }
  }
  &__img {
    padding-bottom: 32px;
    @include desktop() {
      padding-bottom: 16px;
    }
  }
  &__filters {
    display: grid;
    grid-template-columns: 312px;
    justify-content: center;
    width: 100%;
    column-gap: 20px;
    @include tablet() {
      grid-template-columns: repeat(3, 240px);
      justify-content: center;
    }
    @include desktop() {
      justify-content: flex-start;
    }
  }
  .btn-filters {
    padding-top: 16px;
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 309px;
    justify-items: center;
    padding: 48px 0 100px;
    column-gap: 20px;
    row-gap: 24px;
    width: 100%;
    @include mobile() {
      grid-template-columns: repeat(auto-fit, 312px);
      justify-content: center;
    }
    @include desktop() {
      grid-template-columns: repeat(auto-fit, 240px);
      padding: 60px 0 150px;
    }
  }
  &__loader {
    position: absolute;
    top: 80%;
  }
}
::v-deep .v-card {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  min-height: 250px;
  padding: 16px;
  position: absolute;
  top: calc(50% - 250px / 2);
  width: 312px;
  .dialog__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
