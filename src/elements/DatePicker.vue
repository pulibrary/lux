<template>
  <v-date-picker v-model="date" :popover="popover">
    <input-text
      id="startDate"
      label="Start Date"
      width="auto"
      slot-scope="{ inputProps, inputEvents }"
      v-bind="inputProps"
      v-on="inputEvents"
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
Vue.use(VCalendar)

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
      date: new Date(),
      popover: {
        placement: "bottom",
        visibility: "click",
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>

<docs>
  ```jsx
  <div>
    <date-picker />
  </div>
  ```
</docs>
