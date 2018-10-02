<template>
  <component :is="wrapper" class="lux-input">
    <legend v-if="groupLabel">{{ groupLabel }}</legend>
    <div v-for="(option, index) in options" :class="['lux-checkbox', { 'lux-inline': !vertical }]">
      <input type="checkbox"
      :id="option.id"
      :name="label"
      :value="option.value"
      :checked="option.checked"
      :disabled="option.disabled"
      @change="change($event)"
      @blur="inputblur($event.target)">
      <label v-if="option.label" :for="option.id">{{ option.label }}</label>
      <label v-else :for="option.id">{{ option.value }}</label>
    </div>
    <div role="alert" class="lux-error" v-if="errormessage">{{ errormessage }}</div>
  </component>
</template>

<script>
/**
 * Form Inputs are used to allow users to provide text input when the expected
 * input is short. Form Input has a range of options and supports several text
 * formats including numbers. For longer input, use the `FormTextarea` element.
 */
export default {
  name: "InputCheckbox",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  model: {
    prop: "checked",
    event: "change",
  },
  data: function() {
    return {
      wrapper: this.groupLabel.length ? "fieldset" : "div",
    }
  },
  props: {
    /**
     * If true, the checkboxes will be stacked vertically. Otherwise they will be horizontal (inline).
     */
    vertical: {
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
    groupLabel: {
      type: String,
      default: "",
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
    change(event) {
      this.$emit("change", event.target.checked)
    },
    inputblur(value) {
      this.$emit("inputblur", value)
    },
  },
}
</script>

<style lang="scss" scoped>
fieldset {
  border: 0;
  padding: 0;
}

.lux-input {
  @include stack-space($space-small);
  font-weight: $font-weight-regular;
  font-family: $font-family-text;
  font-size: $font-size-base;

  legend {
    margin-bottom: $space-x-small;
  }

  label {
    padding-right: $space-base;
  }
}

.lux-checkbox {
  @include reset;
  @include stack-space($space-x-small);
  font-family: $font-family-text;
  line-height: $line-height-base;
}

.lux-checkbox input[type="checkbox"] {
  @include visually-hidden;
  &:focus {
    box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 80%);
  }
}

.lux-checkbox label {
  position: relative;
  display: inline-block;
  margin-bottom: $space-xx-small;
  cursor: pointer;
  padding-left: $space-base;
}

.lux-checkbox label::before,
.lux-checkbox label::after {
  position: absolute;
  content: "";

  /*Needed for the line-height to take effect*/
  display: inline-block;
}

/*Outer box of the fake checkbox*/
.lux-checkbox label::before {
  height: 16px;
  width: 16px;
  background-color: $color-white;
  border: 0;
  border-radius: $border-radius-default;
  box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 80%);
  left: 0;
  top: 4px;
}

/* On mouse-over, add a grey background color */
.lux-checkbox label:hover::before {
  box-shadow: 0 1px 5px 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 60%);
}

.lux-checkbox input:checked + label::before {
  transition: box-shadow 0.2s ease;
  background-color: $color-bleu-de-france;
  box-shadow: inset 0 0 0 1px $color-bleu-de-france, 0 0 0 1px $color-bleu-de-france;
  outline: 0;
}

/*Checkmark of the fake checkbox*/
.lux-checkbox label::after {
  height: 5px;
  width: 10px;
  border-left: 2px solid $color-white;
  border-bottom: 2px solid $color-white;

  transform: rotate(-45deg);

  left: 3px;
  top: 7px;
}

/*Hide the checkmark by default*/
.lux-checkbox input[type="checkbox"] + label::after {
  content: none;
}

/*Unhide on the checked state*/
.lux-checkbox input[type="checkbox"]:checked + label::after {
  content: "";
}

/*Adding focus styles on the outer-box of the fake checkbox*/
.lux-checkbox input[type="checkbox"]:focus + label::before {
  transition: box-shadow $duration-quickly ease;
  box-shadow: inset 0 0 0 1px $color-bleu-de-france, 0 0 0 1px $color-bleu-de-france;
}

.lux-checkbox input[type="checkbox"]:focus + label {
  transition: text-decoration $duration-quickly ease;
  text-decoration: underline;
}

.lux-inline {
  display: inline-block;
}

[disabled] {
  cursor: not-allowed;
}
</style>


<docs>
  ```jsx
  <input-checkbox groupLabel="Where is my mind?" :options="[{name: 'opt 1', value: 'In the clouds', id: 'checkbox-opt1', checked: true}, {name: 'opt 2', value: 'I don\'t know', id: 'checkbox-opt2'}]"></input-checkbox>
  ```
</docs>
