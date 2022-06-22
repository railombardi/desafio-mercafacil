import { shallowMount, createLocalVue } from "@vue/test-utils";
import ActionButton from "./ActionButton.vue";

const localVue = createLocalVue();

let wrapper = shallowMount(ActionButton, {
  localVue,
});

describe("ActionButton.vue", () => {
  it("Snapshot test", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  describe("[PROPS] =>", () => {
    it("when the prop label is filled the content of the button should change", async () => {
      await wrapper.setProps({ label: "Test label prop" });
      const button = wrapper.find(".button");
      expect(button.text()).toBe("Test label prop");
    });
    it("when the prop icon is filled, a corresponding icon component should appear", async () => {
      await wrapper.setProps({ icon: "filter" });
      const iconName = wrapper.find(".icon").element.tagName.toLowerCase();
      expect(iconName).toContain("filter");
    });
  });
  describe("[EVENTS] =>", () => {
    it("when click button call method of emit click event", () => {
      wrapper.find(".button").trigger("click");
      expect(wrapper.emitted("click")).toHaveLength(1);
    });
  });
  describe("[COMPUTEDS] =>", () => {
    it("when the prop icon is filled the computed iconComponent changes its value", async () => {
      await wrapper.setProps({ icon: "filter" });
      expect(wrapper.vm.iconComponent).toContain("filter-icon");
    });
  });
});
