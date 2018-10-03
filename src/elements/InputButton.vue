<template>
  <button :type="!!type ? type : false"
    :class="['lux-button', variation, size, {'lux-expanded' : (block==true) }]"
    :disabled="disabled"
    @click="buttonClicked($event)">
    <slot>
    {{ label }}
    </slot>
    <span v-if="variation === 'dropdown'" class="lux-dropdown-indicator"> &#9660;</span>
  </button>
</template>

<script>
/**
 * Buttons are used to toggle something in the interface or trigger new
 * content in the same context.
 */
export default {
  name: "InputButton",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  data: function() {
    return {
      label: "Submit",
    }
  },
  props: {
    /**
     * The button's variations `solid, outline, text, dropdown`
     */
    variation: {
      type: String,
      default: "button",
      validator: value => {
        return value.match(/(solid|outline|text|dropdown)/)
      },
    },
    /**
     * The button's type attribute `button, submit`
     */
    type: {
      type: String,
      default: "",
      validator: value => {
        return value.match(/(|button|submit)/)
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
    /**
     * Clicking this button can emit a custom event that should trigger an alert.
     * You must supply an alertStatus and alertMessage, like so:
     * { 'alertStatus': 'success', 'alertMessage': 'This is my message.'}
     */
    customAlertEvent: {
      type: Object,
      default: null,
    },
  },
  methods: {
    buttonClicked(value) {
      if (this.customAlertEvent) {
        this.$emit("system-alert", {
          event: value,
          alertStatus: this.customAlertEvent.alertStatus,
          alertMessage: this.customAlertEvent.alertMessage,
        })
      }
      this.$emit("button-clicked", value)
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-button {
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

  &.solid {
    background: $color-bleu-de-france;
    color: $color-white;
    &:hover,
    &:focus {
      background: $color-bleu-de-france-darker;
    }
  }

  &.text {
    background-color: transparent;
  }

  &.dropdown {
    background: $color-white;
    box-shadow: $box-shadow-small;
    color: $color-rich-black;

    .lux-dropdown-indicator {
      line-height: 1;
      font-size: $font-size-x-small;
      color: $color-grayscale-darker;
      margin-left: $space-xx-small;
    }
  }
}

.small {
  font-size: $font-size-small;

  & .lux-dropdown-indicator {
    font-size: calc(#{$font-size-small} - 2px);
  }
}

.medium {
  font-size: $font-size-base;

  & .lux-dropdown-indicator {
    font-size: calc(#{$font-size-base} - 3px);
  }
}

.large {
  font-size: $font-size-large;

  & .lux-dropdown-indicator {
    font-size: calc(#{$font-size-large} - 4px);
  }
}

.lux-expanded {
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
    <input-button variation="solid" size="small">Apply Changes</input-button>
    <input-button type="button" variation="solid">Apply Changes</input-button>
    <input-button type="button" variation="solid" size="large" disabled>Apply Changes</input-button>

    <input-button type="button" variation="solid" block></input-button>

    <input-button type="button" variation="text">Manage Files</input-button>
  </div>
  ```
</docs>
