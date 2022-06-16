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
import SearchIcon from "./icons/SearchIcon.vue";
export default {
  name: "InputSearch",
  components: { SearchIcon },
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
    height: 56px;
    padding: 16px 16px 16px 48px;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
