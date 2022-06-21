<template>
  <div data-app id="app">
    <nav class="navbar">
      <div class="navbar__container">
        <NavbarIcon class="navbar__icon" @click.native="goToHome" />
        <mq-layout mq="lg">
          <div class="navigators">
            <router-link class="navigators__link" to="/"
              >Characters</router-link
            >
            <router-link class="navigators__link" to="/locations"
              >Locations</router-link
            >
            <router-link class="navigators__link" to="/episodes"
              >Episodes</router-link
            >
          </div>
        </mq-layout>
        <mq-layout :mq="['sm', 'md']">
          <MenuIcon v-if="!overlayVisible" @click.native="openOverlay" />
          <CloseIcon v-else-if="overlayVisible" @click.native="closeOverlay" />
          <v-overlay
            v-if="overlayVisible"
            :value="overlayVisible"
            absolute
            color="#fff"
            :opacity="1"
          >
            <div class="navigators">
              <router-link
                @click.native="closeOverlay"
                class="navigators__link"
                to="/"
                >Characters</router-link
              >
              <router-link
                @click.native="closeOverlay"
                class="navigators__link"
                to="/locations"
                >Locations</router-link
              >
              <router-link
                @click.native="closeOverlay"
                class="navigators__link"
                to="/episodes"
                >Episodes</router-link
              >
            </div>
          </v-overlay>
        </mq-layout>
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
    goToHome() {
      if (this.$route.name != "characters")
        this.$router.push({ name: "characters" });
    },
  },
};
</script>
<style lang="scss" scoped>
#app {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .navbar {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
    padding: 0 20px;
    &__icon {
      cursor: pointer;
    }
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
          flex-direction: row;
          column-gap: 24px;
          &__link {
            font-size: 18px;
            line-height: 21px;
          }
        }
      }
    }
    ::v-deep .v-overlay {
      top: 62px;
      &__content {
        width: 100%;
        height: 100%;
        padding-top: 48px;
      }
    }
  }
}
</style>
