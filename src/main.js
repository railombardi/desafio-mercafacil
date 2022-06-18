import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createProvider } from "./vue-apollo";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

import VueMq from "vue-mq";
import vuetify from "./plugins/vuetify";

Vue.use(VueMq, {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: Infinity,
  },
  defaultBreakpoint: "sm", // customize this for SSR
});

Vue.config.productionTip = false;

const requireComponent = require.context(
  "./components",
  true,
  /[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  vuetify,

  render: function (h) {
    return h(App);
  },
}).$mount("#app");
