<template>
  <div class="dropdown">
    <div @click="handleClick" class="dropdown__btn">
      <span v-if="!value" class="dropdown__btn--placeholder">{{
        placeholder
      }}</span>
      <span v-else> {{ value }}</span>
      <span class="btn-arrow" />
    </div>
    <div v-if="visible" class="dropdown__content">
      <span @click="emitChange('')" class="options dropdown__btn--placeholder">
        {{ placeholder }}
      </span>
      <span
        @click="emitChange(option)"
        class="options"
        :class="{ 'options--selected': option == value }"
        v-for="option in options"
        :key="option"
      >
        {{ option }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Array of options to pass to dropdown
     */
    options: {
      type: Array,
      default: () => [],
    },
    /**
     * Dropdown's placeholder
     */
    placeholder: {
      type: String,
      default: "Filter",
    },
    /**
     * Default value when dropdown is instantiated, normally used by the v-model directive
     */
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  watch: {
    visible(newValue) {
      if (newValue) {
        /**
         * Called when dropdown opens
         * @type {Event}
         */
        this.$emit("dropdown-open");
      } else {
        /**
         * Called when dropdown close
         * @type {Event}
         */
        this.$emit("dropdown-close");
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.clickOutListener);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.clickOutListener);
  },
  methods: {
    handleClick() {
      this.visible = !this.visible;
    },
    close() {
      this.visible = false;
    },
    clickOutListener(evt) {
      if (!this.$el.contains(evt.target) && this.visible) {
        this.close();
      }
    },
    emitChange(value) {
      /**
       * Called when an option is selected
       */
      this.$emit("onChange", value);
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  width: 100%;
  height: 56px;
  cursor: pointer;
  position: relative;
  &__btn {
    display: flex;
    position: relative;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.38);
    border-radius: 8px;
    padding: 0 16px;
    &--placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: $text-placeholder;
    }
    .btn-arrow::before {
      position: absolute;
      top: calc(50% - 20px / 2);
      right: 16px;
      font-size: 30px;
      color: $text-placeholder;
      content: "\01F893";
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 50px;
    right: 0;
    min-height: 150px;
    background: #fff;
    border-radius: 0 0 6px 6px;
    border: 1px solid rgba(0, 0, 0, 0.38);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.14);
    z-index: 999;
    .options {
      font-size: 16px;
      padding: 10px;
      &--selected,
      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
