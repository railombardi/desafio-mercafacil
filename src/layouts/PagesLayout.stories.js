import PagesLayout from "./PagesLayout.vue";
import ContentCard from "../components/ContentCard/ContentCard.vue";
import InputSearch from "../components/InputSearch/InputSearch.vue";

export default {
  title: "Layouts/PagesLayout",
  component: PagesLayout,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    PagesLayout,
    ContentCard,
    InputSearch,
  },
  template: `<pages-layout>
              <template></template>
              <h3 style="padding-bottom: 25px;"> Template filters </h3>
              <template #filters>
                <input-search/>
                <input-search/>
                <input-search/>
              </template>
              <template #list>
               <content-card v-for="card in 10" :key="card" title="Template list"/>
              </template>
             </pages-layout>`,
});

export const Default = Template.bind({});
Default.args = {};
