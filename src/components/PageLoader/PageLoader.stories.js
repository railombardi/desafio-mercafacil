import ActionButton from "../ActionButton/ActionButton.vue";
import PageLoader from "./PageLoader.vue";
export default {
  title: "Components/PageLoader",
  component: PageLoader,
  argTypes: {
    absolute: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    PageLoader,
    ActionButton,
  },
  template: `<div>
              <action-button v-if="!visible" @click="openLoader" label="Show loader"/>
              <action-button v-else @click="closeLoader" label="Close loader"/>
              <div style="display: flex; justify-content: center; width: 100%; height: 400px; position: relative">
                <page-loader :absolute="true" v-if="visible"/>
              </div>
             </div>`,
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    openLoader() {
      this.visible = true;
    },
    closeLoader() {
      this.visible = false;
    },
  },
});

export const Default = Template.bind({});
Default.args = {};

const TemplateLoaderTiming = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    PageLoader,
    ActionButton,
  },
  template: `<div>
              <h3> Closing loader after 5 seconds</h3>
              <action-button v-if="!visible" @click="openLoader" label="Show loader"/>
              <div style="display: flex; justify-content: center; width: 100%; height: 400px; position: relative">
                <page-loader :absolute="true" v-if="visible"/>
              </div>
             </div>`,
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    openLoader() {
      this.visible = true;
      setTimeout(() => this.closeLoader(), 5000);
    },
    closeLoader() {
      this.visible = false;
    },
  },
});

export const LoaderTiming = TemplateLoaderTiming.bind({});
LoaderTiming.args = {};
