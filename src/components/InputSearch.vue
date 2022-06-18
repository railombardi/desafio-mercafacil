<template>
  <label class="input-search">
    <SearchIcon class="input-search__icon" />
    <input
      v-model="inputValue"
      class="input-search__input"
      :placeholder="placeholder"
    />
  </label>
</template>

<script>
export default {
  name: "InputSearch",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    inputValue(newValue) {
      this.emitInput(newValue);
    },
  },
  methods: {
    emitInput(value) {
      this.$emit("input", value);
    },
  },
  mounted() {
    this.inputValue = this.value;
  },
};
</script>

<style lang="scss" scoped>
.input-search {
  width: 100%;
  position: relative;
  &__icon {
    position: absolute;
    top: calc(50% - 24px / 2);
    left: 16px;
  }
  &__input {
    width: 100%;
    height: 56px;
    padding: 16px 16px 16px 48px;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid $text-placeholder;
    border-radius: 8px;
    &::placeholder {
      color: $text-placeholder;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
