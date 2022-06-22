import CharacterCard from "./CharacterCard.vue";
export default {
  title: "Components/CharacterCard",
  component: CharacterCard,
  argTypes: {
    species: {
      control: { type: "select" },
      options: ["human", "alien", "robot"],
      defaultValue: "human",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    CharacterCard,
  },
  template: `<div style="display: flex; justify-content: center">
              <character-card :name="name" :image="image" :species="species" />
             </div>`,
});

export const Default = Template.bind({});
Default.args = {
  name: "Rick Sanchéz",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};
export const OtherCharacter = Template.bind({});
OtherCharacter.args = {
  name: "Morty Smith",
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
};
