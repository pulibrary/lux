<template>
  <button :type="type" :class="[variation, size, {'expanded' : (block==true) }]" :disabled="disabled">{{label}}</button>
</template>

<script>
/**
 * Buttons are used to toggle something in the interface or trigger new
 * content in the same context.
 */
export default {
  name: "InputButton",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * Sets the text in the button
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * The button's type attribute
     */
    variation: {
      type: String,
      default: "button",
      validator: value => {
        return value.match(/(solid|outline|text)/)
      },
    },
    /**
     * The button's type attribute `button, submit`
     */
    type: {
      type: String,
      default: "button",
      validator: value => {
        return value.match(/(button|submit)/)
      },
    },
    /**
     * Sets the size of the button `small, medium, large`
     */
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return value.match(/(small|medium|large)/)
      },
    },
    /**
     * Whether the button extends the full available width or not
     */
    block: {
      type: Boolean,
      default: "false",
    },
    /**
     * Whether the button has been toggled and in progress
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether the button is disabled or not
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  @include reset;
  @include stack-space($space-base);
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: $line-height-base;
  border: 0;
  border-radius: $border-radius-default;
  color: $color-rich-black;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  text-decoration: none;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:active {
    transform: scale(0.99);
  }
}

.solid {
  background: $color-bleu-de-france;
  color: $color-white;

  &:hover,
  &:focus {
    background: $color-bleu-de-france-darker;
  }
}

.text {
  background-color: transparent;
}

.small {
  font-size: $font-size-small;
}

.medium {
  font-size: $font-size-base;
}

.large {
  font-size: $font-size-large;
}

.expanded {
  display: block;
  width: 100%;
  max-width: 100%;
}

[disabled] {
  background: $color-grayscale-light;
  cursor: not-allowed;

  &:hover,
  &:focus {
    background: $color-grayscale-light;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <input-button label="Apply Changes" type="button" variation="solid" size="small"></input-button>
    <input-button label="Apply Changes" type="button" variation="solid"></input-button>
    <input-button label="Apply Changes" type="button" variation="solid" size="large" disabled></input-button>
    
    <input-button label="Submit" type="button" variation="solid" block></input-button>

    <input-button label="Manage Files" type="button" variation="text"></input-button>
  </div>
  ```
</docs>
