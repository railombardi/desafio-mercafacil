import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import vuetify from "./vuetify_storybook";

export const decorators = [
  (Story) => ({
    vuetify,
    template: `
    <div data-app style="font-family: 'Raleway, sans-serif' !important;">
      <story/>
    </div data-app>
    `,
  }),
];

const requireComponent = require.context(
  "../src/components/icons",
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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
