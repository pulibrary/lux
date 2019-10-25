<template>
  <component :is="type" class="lux-search-box">
    <slot />
  </component>
</template>

<script>
/**
 * The SearchBox is a wrapper for an input group consisting of an
 * InputText and InputButton.
 */
export default {
  name: "SearchBox",
  status: "ready",
  release: "1.0.0",
  type: "Pattern",
  props: {
    /**
     * The html element name used for the container
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-search-box {
  @include box-shadow-inputs;
  box-sizing: border-box;
  display: flex;
  background: $color-white;
  border-radius: $border-radius-default;
  margin-bottom: 1rem;

  &:hover,
  &[hover] {
    @include box-shadow-inputs-hover;
  }

  /deep/ .lux-input-field {
    border: 0;
    box-shadow: initial;
    width: 100%;

    &:hover,
    &[hover] {
      box-shadow: initial;
    }
  }

  /deep/ .lux-input {
    flex: 1;
    margin-bottom: 0;

    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  /deep/ .lux-button {
    margin: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &.lux-icon {
      background: $color-white;
      padding: 2px;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <search-box>
      <input-text id="foo" name="value" label="Search" :hide-label="true" placeholder="Find all the things" size="large"></input-text>
      <input-button type="button" variation="icon" size="medium" icon="search"></input-button>
    </search-box>
  </div>
  ```
</docs>
