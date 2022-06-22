import ContentCard from "./ContentCard.vue";
export default {
  title: "Components/ContentCard",
  component: ContentCard,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    ContentCard,
  },
  template: `<div style="display: flex; justify-content: center">
              <content-card :title="title" :subtitle="subtitle" :extra="extra" />
             </div>`,
});

export const Default = Template.bind({});
Default.args = {
  title: "Card title",
  subtitle: "Card subtitle",
  extra: "Card field for additional information",
};
export const LocationCard = Template.bind({});
LocationCard.args = {
  title: "Earth (C-137)",
  subtitle: "Planet",
};
export const EpisodeCard = Template.bind({});
EpisodeCard.args = {
  title: "Pilot",
  subtitle: "December 2, 2013",
  extra: "SE01E01",
};
