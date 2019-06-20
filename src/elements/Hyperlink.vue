<template>
  <a :href="href" :class="['lux-link', variation, size]">
    <slot />
  </a>
</template>

<script>
/**
 * Used to create hyperlinks as text or buttons. Can also be used on Card component
 * sub-elements to make the entire card click-able.
 */
export default {
  name: "Hyperlink",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The href value of the link.
     */
    href: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * Whether the link appears as text or as a button. Options include `button solid`
     * and `button outline`.
     */
    variation: {
      type: String,
      default: "link",
      validator: value => {
        return value.match(/(link|button)/)
      },
    },
    /**
     * Sets the size of the button `small`, `medium`, `large`
     */
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return value.match(/(small|medium|large)/)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-link {
  color: $color-bleu-de-france-dark;
  font-family: $font-family-text;
  text-decoration: none;

  &:visited {
    color: $color-bleu-de-france;
  }

  &:focus,
  &:hover {
    box-shadow: 0 2px currentColor;
  }

  &:active {
    box-shadow: 0 2px $color-bleu-de-france-darker;
  }

  &.button {
    line-height: $line-height-base;
    border: 0;
    border-radius: $border-radius-default;
    cursor: pointer;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;

    &.solid {
      background: $color-bleu-de-france;
      color: $color-white;
      &:hover,
      &:focus {
        background: $color-bleu-de-france-darker;
        box-shadow: none;
      }
    }

    &.outline {
      background: transparent;
      color: $color-bleu-de-france;
      border: 2px solid $color-bleu-de-france;
      &:hover,
      &:focus {
        color: $color-bleu-de-france-darker;
        border-color: $color-bleu-de-france-darker;
        box-shadow: none;
      }
    }

    &.small {
      font-size: $font-size-small;
    }

    &.medium {
      font-size: $font-size-base;
    }

    &.large {
      font-size: $font-size-large;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <hyperlink href="#">Foo</hyperlink>
    <hyperlink href="#" variation="button solid">Bar</hyperlink>
    <hyperlink href="#" variation="button solid" size="large">Bar</hyperlink>
    <hyperlink href="#" variation="button outline">Bar</hyperlink>
  </div>
  ```
</docs>
