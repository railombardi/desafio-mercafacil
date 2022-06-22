<template>
  <label class="wrapper">
    <component class="icon" v-if="icon" :is="iconComponent" />
    <button @click="emitClick" class="button">
      {{ label }}
    </button>
  </label>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    /**
     * button label
     */
    label: {
      type: String,
      default: "label",
    },
    /**
     * intended if you want to use any icon from the icon components
     */
    icon: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconComponent() {
      return `${this.icon}-icon`;
    },
  },
  methods: {
    emitClick(e) {
      /**
       * Passthrough click event
       * @type {Event}
       */
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  position: relative;
  .icon {
    position: absolute;
    top: calc(50% - 12px / 2);
    left: 22px;
  }
  .button {
    width: 100%;
    height: 56px;
    background: $primary-50;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    padding: 10px 16px;
    color: $primary-500;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    border: none;
    cursor: pointer;
  }
}
</style>
