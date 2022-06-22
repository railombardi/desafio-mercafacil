import InputSearch from "./InputSearch.vue";
export default {
  title: "Components/InputSearch",
  component: InputSearch,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    InputSearch,
  },
  template: `<div style="display: flex; flex-direction: column; justify-content: center; height: 300px;">
              <input-search v-model="inputValue" :placeholder="placeholder"/>
              <span> Input value: {{ inputValue }} </span>
             </div>`,
  data() {
    return {
      inputValue: args.value,
    };
  },
  methods: {
    handleChange(newValue) {
      this.inputValue = newValue;
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  value: "Input value",
  placeholder: "Placeholder",
};
