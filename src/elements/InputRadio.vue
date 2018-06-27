<template>
  <component :is="wrapper" class="input">
    <label v-if="label">{{ label }}</label>
    <div v-for="(option, index) in options" :class="{ inline: !vertical }">
      <input type="radio"
      :id="option.id"
      :name="label"
      :value="option.value"
      :checked="option.checked"
      :disabled="option.disabled"
      @change="change($event.target.value)"
      @blur="inputblur($event.target)">
      <label :for="option.id">{{ option.value }}</label>
    </div>
    <div role="alert" class="error" v-if="errormessage">{{ errormessage }}</div>
  </component>
</template>

<script>
/**
 * Form Inputs are used to allow users to provide text input when the expected
 * input is short. Form Input has a range of options and supports several text
 * formats including numbers. For longer input, use the `FormTextarea` element.
 */
export default {
  name: "InputRadio",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  computed: {
    hasError() {
      return this.errormessage.length
    },
  },
  props: {
    /**
     * If true, the radio buttons will be stacked vertically. Otherwise they will be horizontal (inline).
     */
    vertical: {
      type: Boolean,
      default: false,
    },
    /**
     * The available options to check. Option properties are: id, value, disabled, checked
     */
    options: {
      required: true,
      type: Array,
    },
    /**
     * The label of the form input field.
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
     * Unique identifier of the form input field.
     */
    id: {
      type: String,
      default: "",
      required: true,
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
    change(value) {
      this.$emit("change", value)
    },
    inputblur(value) {
      this.$emit("inputblur", value)
    },
  },
}
</script>

<style lang="scss" scoped>
.inline {
  display: inline-block;
}
</style>


<docs>
  ```jsx
  <input-radio vertical=true label="Where is my mind?" id="myChoice" :options="[{label: 'opt 1', value: 'In the clouds', checked: true}, {label: 'opt 2', value: 'I don\'t know'}]"></choice-input>
  ```
</docs>
