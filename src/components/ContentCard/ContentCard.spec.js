import { shallowMount, createLocalVue } from "@vue/test-utils";
import ContentCard from "./ContentCard.vue";

const localVue = createLocalVue();

let wrapper = shallowMount(ContentCard, {
  localVue,
});

describe("ContentCard.vue", () => {
  it("Snapshot test", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  describe("[PROPS] =>", () => {
    it("When the prop title receives a value, the content is displayed in the target span", async () => {
      const text = "Test title prop";
      await wrapper.setProps({ title: text });
      const span = wrapper.find(".card__title");
      expect(span.text()).toBe(text);
    });
    it("When the prop subtitle receives a value, the content is displayed in the target span", async () => {
      const text = "Test subtitle prop";
      await wrapper.setProps({ subtitle: text });
      const span = wrapper.find(".card__subtitle");
      expect(span.text()).toBe(text);
    });
    it("When the prop extra receives a value, the content is displayed in the target span", async () => {
      const text = "Test extra prop";
      await wrapper.setProps({ extra: text });
      const span = wrapper.find(".card__extra");
      expect(span.text()).toBe(text);
    });
  });
});
