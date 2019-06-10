<template>
  <v-date-picker mode="single" v-model="date">
    <input-text
      id="startDate"
      label="Start Date"
      width="auto"
      :value="!date ? '' : date.toLocaleDateString('en-US')"
      @input="updateDateInput($event)"
    >
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
  methods: {
    updateDateInput(value) {
      let d = value.split("/")
      let newDate = new Date(d[2] + "-" + d[0] + "-" + d[1])
      if (this.isValidDate(newDate)) {
        this.date = newDate
      }
    },
    isValidDate(d) {
      return d instanceof Date && !isNaN(d)
    },
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
</style>

<docs>
  ```jsx
  <div>
    <date-picker />
  </div>
  ```
</docs>
