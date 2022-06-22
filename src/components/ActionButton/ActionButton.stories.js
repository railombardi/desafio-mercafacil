import ActionButton from "./ActionButton.vue";
import MenuIcon from "../icons/MenuIcon.vue";
import SearchIcon from "../icons/SearchIcon.vue";
import FilterIcon from "../icons/FilterIcon.vue";
export default {
  title: "Components/ActionButton",
  component: ActionButton,
  argTypes: {
    icon: {
      control: { type: "select" },
      options: ["menu", "filter", "search"],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    ActionButton,
    MenuIcon,
    SearchIcon,
    FilterIcon,
  },
  template: `<div>
              <action-button @click.native="onClick" :label="label" :icon="icon" />
              <span style="margin-top: 15px;"> Clicked count: {{clickedCount}} </span>
             </div>`,
  data() {
    return {
      clickedCount: 0,
    };
  },
  methods: {
    onClick() {
      this.clickedCount += 1;
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  icon: "filter",
};
