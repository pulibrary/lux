<template>
  <component :is="wrapper" class="lux-select">
    <label v-if="label" :for="id">{{ label }}</label>
    <select
      :id="id"
      :class="[
        'lux-select',
        { 'lux-select-error': hasError },
        { 'lux-select-expand': width === 'expand' },
      ]"
      :disabled="disabled"
      :required="required"
      :focus="focus"
      :multiple="multiple"
      :errormessage="errormessage"
      :value="value"
      :name="name"
      @change="change($event)"
      @blur="inputblur($event.target)"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>
    <div role="alert" class="lux-error" v-if="errormessage">{{ errormessage }}</div>
  </component>
</template>

<script>
/**
 * Input Selects are used to allow users to choose among a number of options.
 */
export default {
  name: "InputSelect",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  model: {
    event: "change",
  },
  computed: {
    hasError() {
      return this.errormessage.length
    },
  },
  props: {
    /**
     * Sets the value of the selected option.
     */
    value: {
      type: String,
    },
    /**
     * Determines whether the user can select multiple options.
     */
    multiple: {
      type: Boolean,
      default: false,
    },
    /**
     * The available options to check.
     */
    options: {
      required: true,
      type: Array,
    },
    /**
     * The label of the input select field.
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * The validation message a user should get.
     */
    errormessage: {
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
     * Unique identifier of the input select field.
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
     * The width of the input select field.
     * `auto, expand`
     */
    width: {
      type: String,
      default: "auto",
      validator: value => {
        return value.match(/(auto|expand)/)
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
     * Whether the form input field is required or not.
     * `true, false`
     */
    required: {
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
    change(event) {
      this.$emit("change", event.target.value)
    },
    inputblur(value) {
      this.$emit("inputblur", value)
    },
  },
  // filters: {
  //   snakeToTitleCase: function(value) {
  //     if (!value) return ""
  //     //ref: https://gist.github.com/kkiernan/91298079d34f0f832054
  //     return value
  //       .split("_")
  //       .map(function(item) {
  //         return item.charAt(0).toUpperCase() + item.substring(1)
  //       })
  //       .join(" ")
  //   },
  // },
}
</script>

<style lang="scss" scoped>
// Design Tokens with local scope
$color-placeholder: tint($color-grayscale, 50%);

.lux-select {
  @include stack-space($space-small);
  font-weight: $font-weight-regular;
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: $line-height-heading;
  width: auto;
  &.lux-select-expand {
    width: 100%;
  }
  label {
    display: block;
    font-size: $font-size-base;
    color: tint($color-rich-black, 20%);
    @include stack-space($space-x-small);
  }
  .lux-error {
    margin-top: $space-x-small;
    color: $color-red;
  }
  .lux-select-error {
    border: 1px solid $color-red;
  }
  select {
    @include reset;
    @include inset-squish-space($space-small);
    padding-right: $space-large;
    transition: all 0.2s ease;
    -webkit-appearance: none;
    appearance: none;
    font-family: $font-family-text;
    background: $color-white;
    border-radius: $border-radius-default;
    color: set-text-color($color-rich-black, $color-white);
    margin: 0;
    border: 0;
    cursor: pointer;
    box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07),
      0 0 0 1px tint($color-rich-black, 80%);
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%20000002%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;

    &:hover,
    &[hover] {
      box-shadow: 0 1px 5px 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 60%);
    }
    &:focus,
    &[focus] {
      transition: box-shadow 0.2s ease;
      box-shadow: inset 0 0 0 1px $color-bleu-de-france, 0 0 0 1px $color-bleu-de-france;
    }
    &[disabled] {
      box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07),
        0 0 0 1px tint($color-rich-black, 80%);
      background: lighten($color-placeholder, 42%);
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <input-select label="Select..." id="myChoice" name="myChoice" value="bar" :options="[{label: 'opt 1', value: 'foo'}, {label: 'opt 2', value: 'bar'}]"></input-select>
  </div>
  ```
</docs>
