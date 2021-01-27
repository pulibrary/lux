<template>
  <button
    :type="!!type ? type : false"
    :class="['lux-button', variation, size, { 'lux-expanded': block == true }]"
    :disabled="disabled"
    @click="buttonClicked($event)"
    v-focus="focused"
    @focus="focused = true"
    @blur="focused = false"
  >
    <div v-if="variation === 'icon-prepend'" class="prepend-icon">
      <lux-icon-base width="18" height="18" v-if="icon === 'search'" icon-name="search">
        <lux-icon-search></lux-icon-search>
      </lux-icon-base>
    </div>
    <slot />
    <div v-if="variation === 'icon'" class="append-icon">
      <lux-icon-base width="18" height="18" v-if="icon === 'search'" icon-name="search">
        <lux-icon-search></lux-icon-search>
      </lux-icon-base>
    </div>
  </button>
</template>

<script>
import { mixin as focusMixin } from "vue-focus"
/**
 * Buttons are used to toggle something in the interface or trigger new
 * content in the same context.
 */
export default {
  name: "InputButton",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  mixins: [focusMixin],
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
        return value.match(/(solid|outline|text|dropdown|icon)/)
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
     * Whether the button is focused or not
     * `true, false`
     */
    focused: {
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
    /**
     * Visually hides the button text.
     */
    hideLabel: {
      type: Boolean,
      default: false,
    },
    /**
     * Indicates what icon to use.
     */
    icon: {
      type: String,
      default: "",
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
  @include inset-space($space-small);
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: $line-height-small;
  border: 0;
  border-radius: $border-radius-default;
  color: $color-rich-black;
  cursor: pointer;
  margin: 0.25rem;
  text-decoration: none;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:active {
    transform: scale(0.99);
  }

  &.icon,
  &.icon-prepend {
    padding: 4px;

    &.small {
      @include inset-space(7px);
      font-size: $font-size-small;
    }

    &.medium {
      @include inset-space(12px);
      font-size: $font-size-base;
    }

    &.large {
      @include inset-space(18px);
      font-size: $font-size-large;
    }
  }

  &.icon,
  &.icon-prepend {
    display: flex;
    align-items: center;
  }

  &.solid {
    background: $color-bleu-de-france;
    color: $color-white;
    &:hover,
    &:focus {
      background: $color-bleu-de-france-darker;
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
    }
  }

  &.text {
    background-color: transparent;
  }

  &.dropdown {
    @include box-shadow-inputs;
    background: $color-white;
    border-radius: $border-radius-default;
    color: $color-rich-black;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%20000002%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;
    padding-right: 36px;

    &:hover {
      @include box-shadow-inputs-hover;
    }
  }
}

.small {
  @include inset-space(12px);
  font-size: $font-size-small;
}

.medium {
  @include inset-space($space-small);
  font-size: $font-size-base;
}

.large {
  @include inset-space(18px);
  font-size: $font-size-large;
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
    <input-button type="button" variation="icon" size="small" icon="search" hideLabel></input-button>
    <input-button focused=true type="button" variation="icon-prepend" size="small" icon="search" hideLabel>Search</input-button>

    <input-button variation="solid" size="small">Apply Changes</input-button>
    <input-button type="button" variation="solid">Apply Changes</input-button>
    <input-button type="button" variation="solid" size="large" disabled>Apply Changes</input-button>

    <input-button type="submit" variation="solid" block>Submit</input-button>

    <input-button type="button" variation="outline">Manage Files</input-button>

    <input-button type="button" variation="text">Manage Files</input-button>
  </div>
  ```
</docs>
