<template>
  <PagesLayout @scroll.native="getNextLocations">
    <template>
      <PageLoader v-if="$apollo.queries.locations.loading" />
      <img
        class="locations__img"
        :src="require('../assets/images/Locations.png')"
      />
      <div class="search">
        <InputSearch v-model="search" placeholder="Filter by name..." />
      </div>
    </template>
    <template #list>
      <ContentCard
        @click.native="toLocationDetails(location.id)"
        v-for="location in locationsList"
        :key="location.id"
        :title="location.name"
        :subtitle="location.type"
      />
    </template>
  </PagesLayout>
</template>

<script>
import PagesLayout from "@/layouts/PagesLayout.vue";
export default {
  name: "LocationsView",
  components: { PagesLayout },
  data() {
    return {
      page: 1,
      totalPages: null,
      search: "",
      locationsList: [],
    };
  },
  watch: {
    search() {
      this.page = 1;
    },
  },
  apollo: {
    locations: {
      query: require("../graphql/Locations.gql"),
      variables() {
        return {
          page: this.page,
          filter: {
            name: this.search,
          },
        };
      },
      result({ data }) {
        this.totalPages = data.locations.info.pages;
        if (this.page == 1) {
          this.locationsList = JSON.parse(
            JSON.stringify(data.locations.results)
          );
        } else {
          this.locationsList.push(...data.locations.results);
        }
      },
    },
  },
  methods: {
    toLocationDetails(id) {
      this.$router.push({ path: `locations/${id}` });
    },
    incrementPage() {
      this.page++;
    },
    getNextLocations(e) {
      let bottomOfList =
        e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight;
      if (bottomOfList && this.page < this.totalPages) {
        this.incrementPage();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  padding: 16px;
  width: 500px;
}
</style>
