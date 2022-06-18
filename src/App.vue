<template>
  <div data-app id="app">
    <nav class="navbar">
      <div class="navbar__container">
        <NavbarIcon />
        <div v-if="$mq !== 'sm'" class="navigators">
          <router-link class="navigators__link" to="/">Characters</router-link>
          <router-link class="navigators__link" to="/">Locations</router-link>
          <router-link class="navigators__link" to="/">Episodes</router-link>
        </div>
        <MenuIcon v-if="!overlayVisible" @click.native="openOverlay" />
        <CloseIcon v-else @click.native="closeOverlay" />
        <v-overlay
          :value="overlayVisible"
          absolute
          color="#fff"
          :opacity="1"
          v-if="$mq === 'sm'"
        >
          <div class="navigators">
            <router-link class="navigators__link" to="/"
              >Characters</router-link
            >
            <router-link class="navigators__link" to="/">Locations</router-link>
            <router-link class="navigators__link" to="/">Episodes</router-link>
          </div>
        </v-overlay>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      overlayVisible: false,
    };
  },
  methods: {
    openOverlay() {
      this.overlayVisible = true;
    },
    closeOverlay() {
      this.overlayVisible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .navbar {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
    padding: 0 20px;
    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1020px;
      .navigators {
        display: flex;
        flex-direction: column;
        row-gap: 48px;
        align-items: center;
        &__link {
          font-family: $font-karla;
          color: #000;
          text-decoration: none;
          font-weight: 700;
          font-size: 24px;
          line-height: 28px;
        }
        @include tablet() {
          column-gap: 24px;
        }
      }
    }
    ::v-deep .v-overlay {
      top: 64px;
      &__content {
        width: 100%;
        height: 100%;
        padding-top: 48px;
      }
    }
  }
}
</style>
