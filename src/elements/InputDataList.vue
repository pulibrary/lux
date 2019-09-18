<template>
  <component :is="wrapper" class="lux-input">
    <label v-if="label" :for="id" :class="{ 'lux-hidden': hideLabel }">{{ label }}</label>
    <div
      class="lux-input-field"
      :class="[{ 'lux-input-expand': width === 'expand' }, { disabled: disabled }, size]"
    >
      <input
        :name="name"
        :id="id"
        :list="datalistId"
        :disabled="disabled"
        :type="type"
        :hover="hover"
        :focus="focus"
        :placeholder="placeholder"
        :errormessage="errormessage"
        :value="value"
        :class="['lux-input', { 'lux-input-error': hasError }]"
        v-on:input="$emit('input', $event.target.value)"
        @blur="inputblur($event.target)"
      />
      <datalist :id="datalistId">
        <option v-for="(item, index) in list" :value="item.value">
          {{ item.label }}
        </option>
      </datalist>
    </div>

    <div role="alert" class="lux-error" v-if="errormessage">{{ errormessage }}</div>
    <div class="lux-helper" v-if="helper">{{ helper }}</div>
  </component>
</template>

<script>
/**
 * DataList inputs are a cross between text inputs and select inputs.
 * Similar to auto-completion, they are used to offer users suggested values that
 * filter upon typing, while also allowing them to enter free-form text for the value.
 *
 */
export default {
  name: "InputDataList",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  computed: {
    datalistId() {
      return this.id + "-list"
    },
    hasError() {
      return this.errormessage.length
    },
  },
  props: {
    /**
     * The type of the form input field.
     * `text, number, email`
     */
    type: {
      type: String,
      default: "text",
      validator: value => {
        return value.match(/(text|number|email)/)
      },
    },
    /**
     * Text value of the form input field.
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * The placeholder value for the form input field.
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * The label of the form input field.
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * List of suggested values.
     */
    list: {
      type: Array,
      default: [],
      required: true,
    },
    /**
     * Visually hides the label of the form input field.
     */
    hideLabel: {
      type: Boolean,
      default: false,
    },
    /**
     * The validation message a user should get.
     */
    errormessage: {
      type: String,
      default: "",
    },
    /**
     * The helper text a user should get.
     */
    helper: {
      type: String,
      default: "",
    },
    /**
     * The html element name used for the wrapper.
     * `div, section`
     */
    wrapper: {
      type: String,
      default: "div",
      validator: value => {
        return value.match(/(div|section)/)
      },
    },
    /**
     * Unique identifier of the form input field.
     */
    id: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * The name attribute for the form input field.
     */
    name: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * The width of the form input field.
     * `auto, expand`
     */
    width: {
      type: String,
      default: "expand",
      validator: value => {
        return value.match(/(auto|expand)/)
      },
    },
    /**
     * Sets the size of the input area `small, medium, large`
     */
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return value.match(/(small|medium|large)/)
      },
    },
    /**
     * Whether the form input field is disabled or not.
     * `true, false`
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Manually trigger input field’s hover state.
     * `true, false`
     */
    hover: {
      type: Boolean,
      default: false,
    },
    /**
     * Manually trigger input field’s focus state.
     * `true, false`
     */
    focus: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    inputblur(value) {
      this.$emit("inputblur", value)
    },
  },
}
</script>

<style lang="scss" scoped>
// Design Tokens with local scope
$color-placeholder: tint($color-grayscale, 50%);

.lux-input {
  @include stack-space($space-small);
  font-weight: $font-weight-regular;
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: $line-height-heading;
  width: auto;

  label {
    display: block;
    font-size: $font-size-base;
    color: tint($color-rich-black, 20%);
    @include stack-space($space-x-small);

    &.lux-hidden {
      @include visually-hidden;
    }
  }

  .lux-error {
    margin-top: $space-x-small;
    font-size: $font-size-small;
    color: $color-red;
  }
  .lux-input-error {
    border: 1px solid $color-red;
  }

  .lux-helper {
    margin-top: $space-x-small;
    font-size: $font-size-small;
    color: $color-grayscale-dark;
  }

  .lux-input-field {
    @include reset;
    background: $color-white;
    border-radius: $border-radius-default;
    box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07),
      0 0 0 1px tint($color-rich-black, 80%);
    display: flex;
    width: auto;
    &.lux-input-expand {
      width: 100%;
    }

    input {
      @include reset;
      @include inset-squish-space($space-small);
      transition: all 0.2s ease;
      -webkit-appearance: none;
      appearance: none;
      font-family: $font-family-text;
      background: $color-white;
      border-radius: $border-radius-default;
      color: set-text-color($color-rich-black, $color-white);
      margin: 0;
      border: 0;
      width: 100%;

      &::-webkit-input-placeholder {
        -webkit-font-smoothing: antialiased;
        color: $color-placeholder;
      }
      &:-ms-input-placeholder {
        color: $color-placeholder;
      }
      &::-moz-placeholder {
        color: $color-placeholder;
        -moz-osx-font-smoothing: grayscale;
        opacity: 1;
      }
    }

    &:hover,
    &[hover] {
      box-shadow: 0 1px 5px 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 60%);
    }
    &:focus,
    &[focus] {
      transition: box-shadow 0.2s ease;
      box-shadow: inset 0 0 0 1px $color-bleu-de-france, 0 0 0 1px $color-bleu-de-france;
      outline: 0;
    }
    &[disabled],
    &.disabled {
      box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07),
        0 0 0 1px tint($color-rich-black, 80%);
      background: lighten($color-placeholder, 42%);
      cursor: not-allowed;
      opacity: 0.5;

      input {
        cursor: not-allowed;
      }
    }
  }

  .small input {
    @include inset-space(12px);
    font-size: $font-size-small;
  }

  .medium input {
    @include inset-space($space-small);
    font-size: $font-size-base;
  }

  .large input {
    @include inset-space(18px);
    font-size: $font-size-large;
  }

  .lux-error {
    margin-top: $space-x-small;
    font-size: $font-size-small;
    color: $color-red;
  }
  .lux-input-error {
    border: 1px solid $color-red;
  }
  .lux-helper {
    margin-top: $space-x-small;
    font-size: $font-size-small;
    color: $color-grayscale-dark;
    width: 100%;
  }
}

.lux-has-icon {
  input {
    flex: 1;
  }

  .append-icon {
    padding: $space-xx-small;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <input-data-list
      id="events"
      name="value"
      label="Event Title"
      placeholder="Some suggestions..."
      helper="This is helper text to help the user fill out this field"
      :list="[
        { value: 'Code4Lib', label: 'Code4Lib Annual Conference' },
        { value: 'ALA', label: 'American Library Association Annual' },
        { value: 'DLF', label: 'Digital Library Federation' },
        { value: 'SAA', label: 'Society of American Archivists Annual Conference' },
        { value: 'Access', label: 'Access Annual Conference' }
      ]">
    </input-data-list>
  </div>
  ```
</docs>
