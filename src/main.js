import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),

  render: function (h) {
    return h(App);
  },
}).$mount("#app");
