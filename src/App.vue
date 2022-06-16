<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar__container">
        <NavbarIcon />
        <div class="navigators">
          <router-link class="navigators__link" to="/">Characters</router-link>
          <router-link class="navigators__link" to="/">Locations</router-link>
          <router-link class="navigators__link" to="/">Episodes</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
import NavbarIcon from "./components/icons/NavbarIcon.vue";
export default {
  components: { NavbarIcon },
};
</script>
<style lang="scss">
#app {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.navbar {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1020px;
    .navigators {
      display: flex;
      column-gap: 24px;
      &__link {
        font-family: "Karla", sans-serif;
        color: #000;
        text-decoration: none;
      }
    }
  }
}
</style>
