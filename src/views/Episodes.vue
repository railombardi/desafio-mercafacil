<template>
  <PagesLayout class="episodes-layout" @scroll.native="getNextEpisodes">
    <template>
      <PageLoader v-if="$apollo.queries.episodes.loading" />
      <img
        class="episodes__img"
        :src="require('../assets/images/Episodes.png')"
      />
      <div class="search">
        <InputSearch v-model="search" placeholder="Filter by name..." />
      </div>
    </template>
    <template #list>
      <ContentCard
        @click.native="toEpisodeDetails(episode.id)"
        v-for="episode in episodesList"
        :key="episode.id"
        :title="episode.name"
        :subtitle="episode.air_date"
        :extra="episode.episode"
      />
    </template>
  </PagesLayout>
</template>

<script>
import PagesLayout from "@/layouts/PagesLayout.vue";
export default {
  name: "EpisodesView",
  components: { PagesLayout },
  data() {
    return {
      page: 1,
      totalPages: null,
      search: "",
      episodesList: [],
    };
  },
  watch: {
    search() {
      this.page = 1;
    },
  },
  apollo: {
    episodes: {
      query: require("../graphql/Episodes.gql"),
      variables() {
        return {
          page: this.page,
          filter: {
            name: this.search,
          },
        };
      },
      result({ data }) {
        this.totalPages = data.episodes.info.pages;
        if (this.page == 1) {
          this.episodesList = JSON.parse(JSON.stringify(data.episodes.results));
        } else {
          this.episodesList.push(...data.episodes.results);
        }
      },
    },
  },
  methods: {
    toEpisodeDetails(id) {
      this.$router.push({ path: `episodes/${id}` });
    },
    incrementPage() {
      this.page++;
    },
    getNextEpisodes(e) {
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
  padding: 16px 0 48px;
  width: 100%;
  @include desktop() {
    width: 500px;
  }
}
.episodes {
  &__img {
    margin-top: 16px;
  }
  &-layout {
    ::v-deep .list {
      padding-top: 0;
    }
  }
}
</style>
