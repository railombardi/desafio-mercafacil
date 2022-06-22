import { shallowMount, createLocalVue } from "@vue/test-utils";
import CharacterCard from "./CharacterCard.vue";

const localVue = createLocalVue();

let wrapper = shallowMount(CharacterCard, {
  localVue,
});

describe("CharacterCard.vue", () => {
  it("Snapshot test", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  describe("[PROPS] =>", () => {
    test("When the prop image receives value, the content is reproduced by <img> component", () => {
      wrapper.setProps({
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      });
      const img = wrapper.findAll(".card__img");
      expect(img.length).toBe(1);
    });
    it("When the prop name receives a value, the content is displayed in the target span", async () => {
      const text = "Test name prop";
      await wrapper.setProps({ name: text });
      const span = wrapper.find(".name");
      expect(span.text()).toBe(text);
    });
    it("When the prop species receives a value, the content is displayed in the target span", async () => {
      const text = "Test species prop";
      await wrapper.setProps({ species: text });
      const span = wrapper.find(".species");
      expect(span.text()).toBe(text);
    });
  });
});
