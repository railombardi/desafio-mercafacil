<template>
  <div class="layout">
    <div class="container">
      <!-- @slot default to label prop -->
      <slot />
      <div class="filters">
        <!-- @slot filters intended for page filters and inputs-->
        <slot name="filters" />
      </div>
      <div class="list">
        <!-- @slot list intended for the cards and blocks of the page list -->
        <slot name="list" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.layout {
  padding-top: 16px;
  position: relative;
  height: 100%;
  overflow: auto;
  .filters {
    display: grid;
    grid-template-columns: 312px;
    justify-content: center;
    width: 100%;
    column-gap: 20px;
    @include tablet() {
      grid-template-columns: 346px repeat(2, 240px);
      justify-content: center;
    }
  }
  .list {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 48px 0 100px;
    column-gap: 20px;
    row-gap: 24px;
    width: 100%;
    @include mobile() {
      grid-template-columns: repeat(auto-fit, 312px);
      justify-content: center;
    }
    @include desktop() {
      grid-template-columns: repeat(auto-fit, 240px);
      padding: 60px 0 150px;
    }
  }
}
</style>
