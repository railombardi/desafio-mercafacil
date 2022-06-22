import DropdownFilter from "./DropdownFilter.vue";
export default {
  title: "Components/DropdownFilter",
  component: DropdownFilter,
  argTypes: {
    options: {
      defaultValue: ["value1", "value2", "value3"],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    DropdownFilter,
  },
  template: `<div style="display: flex; flex-direction: column; justify-content: center; height: 300px;">
              <dropdown-filter @onChange="handleChange" :options="options" :placeholder="placeholder" :value="inputValue"/>
              <span> Selected value: {{ inputValue }} </span>
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
  value: "value1",
  placeholder: "Placeholder",
};
