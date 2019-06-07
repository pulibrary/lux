<template>
  <v-date-picker mode="single" v-model="date">
    <!-- :input-props="{ class: 'input', placeholder: 'Please enter your birthday' }" -->
    <input-text
      id="startDate"
      label="Start Date"
      width="auto"
      slot-scope="{ inputValue, updateValue }"
      :value="inputValue"
      @change="updateValue(inputValue, { formatInput: true, hidePopover: false })"
      @keyup="updateValue(inputValue, { formatInput: false, hidePopover: false })"
    >
      <button><logo-twitter /></button>
    </input-text>
  </v-date-picker>
</template>

<script>
/**
 * Form Inputs are used to allow users to provide text input when the expected
 * input is short. Form Input has a range of options and supports several text
 * formats including numbers. For longer input, use the `FormTextarea` element.
 */
import Vue from "vue"
import VCalendar from "v-calendar"
import "v-calendar/lib/v-calendar.min.css"
Vue.use(VCalendar, { popoverVisibility: "focus" })

export default {
  name: "DatePicker",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  components: {
    VCalendar,
  },
  data() {
    return {
      date: null,
    }
  },
}
</script>

<style lang="scss">
.lux-input {
  display: flex;
  flex-wrap: wrap;
}

.lux-input label {
  display: inline-block;
  width: 100%;
}

.lux-input button {
  border: 0;
  background: transparent;
}
</style>

<docs>
  ```jsx
  <div>
    <date-picker />
  </div>
  ```
</docs>
