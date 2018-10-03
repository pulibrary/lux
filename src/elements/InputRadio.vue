<template>
  <component :is="wrapper" class="lux-input">
    <legend v-if="groupLabel">{{ groupLabel }}</legend>
    <div v-for="(option, index) in options" class="lux-radio" :class="{ 'lux-inline': !vertical }">
      <input type="radio"
      :id="option.id"
      :name="option.name"
      :value="option.value"
      :checked="option.checked"
      :disabled="option.disabled"
      @change="change($event.target.value)"
      @blur="inputblur($event.target)">
      <label v-if="option.label" :for="option.id">{{ option.label }}</label>
      <label v-else :for="option.id">{{ option.value }}</label>
    </div>
    <div role="alert" class="lux-error" v-if="errormessage">{{ errormessage }}</div>
  </component>
</template>

<script>
/**
 * Radio buttons should only be used when a user can select one option.
 * For multiple selections, use checkboxes.
 */
export default {
  name: "InputRadio",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  data: function() {
    return {
      wrapper: this.groupLabel.length ? "fieldset" : "div",
    }
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
    groupLabel: {
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

.lux-radio {
  @include reset;
  @include stack-space($space-x-small);
  font-family: $font-family-text;
  line-height: $line-height-base;
}

.lux-radio input[type="radio"] {
  @include visually-hidden;
}

.lux-radio label {
  position: relative;
  display: inline-block;
  margin-bottom: $space-xx-small;
  cursor: pointer;
  padding-left: $space-base;
}

.lux-radio label::before,
.lux-radio label::after {
  position: absolute;
  content: "";

  /*Needed for the line-height to take effect*/
  display: inline-block;
}

/*Outer box of the fake radio*/
.lux-radio label::before {
  height: 16px;
  width: 16px;
  background-color: $color-white;
  border: 0;
  border-radius: $border-radius-circle;
  box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 80%);
  left: 0;
  top: 4px;
}

/* On mouse-over, add a grey background color */
.lux-radio label:hover::before {
  box-shadow: 0 1px 5px 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 60%);
}

.lux-radio input:checked + label::before {
  transition: box-shadow 0.2s ease;
  background-color: $color-bleu-de-france;
  box-shadow: inset 0 0 0 1px $color-bleu-de-france, 0 0 0 1px $color-bleu-de-france;
  outline: 0;
}

/*Checkmark of the fake radio*/
.lux-radio label::after {
  height: 6px;
  width: 6px;
  border-radius: $border-radius-circle;
  background-color: $color-white;
  left: 5px;
  top: 9px;
}

/*Hide the checkmark by default*/
.lux-radio input[type="radio"] + label::after {
  content: none;
}

/*Unhide on the checked state*/
.lux-radio input[type="radio"]:checked + label::after {
  content: "";
}

/*Adding focus styles on the outer-box of the fake radio*/
.lux-radio input[type="radio"]:focus + label::before {
  transition: box-shadow 0.2s ease;
  box-shadow: inset 0 0 0 1px $color-bleu-de-france, 0 0 0 1px $color-bleu-de-france;
  outline: 0;
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
  <input-radio vertical groupLabel="Where is my mind?" :options="[{name: 'radio-group-name', value: 'In the clouds', id: 'radio-opt1', checked: true}, {name: 'radio-group-name', value: 'I don\'t know', id: 'radio-opt2'}]"></input-radio>
  ```
</docs>
