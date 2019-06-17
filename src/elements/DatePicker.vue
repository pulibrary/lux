<template>
  <wrapper>
    <v-date-picker
      v-if="mode === 'single'"
      mode="single"
      :disabled-dates="disabledDates"
      :update-on-input="true"
      v-model="date"
    >
      <input-text
        :id="id"
        :label="label"
        :name="name"
        width="auto"
        :value="!date ? '' : date.toLocaleDateString('en-US')"
        @input="updateInput($event)"
      >
      </input-text>
    </v-date-picker>
    <v-date-picker
      v-if="mode === 'range'"
      mode="range"
      :disabled-dates="disabledDates"
      :update-on-input="true"
      v-model="range"
    >
      <input-text
        :id="id"
        :label="label"
        :name="name"
        width="auto"
        :value="!range ? '' : this.formatStart() + ' - ' + this.formatEnd()"
        @input="updateRangeInput($event)"
      >
      </input-text>
    </v-date-picker>
  </wrapper>
</template>

<script>
/**
 * Date Pickers allow users to select a valid date or date range as a text input field value.
 * The LUX DatePicker uses [vCalendar](https://vcalendar.io/) and can be modified to support
 * existing vCalendar functionality.
 */
import { setupCalendar, DatePicker } from "v-calendar"
import "v-calendar/lib/v-calendar.min.css"

export default {
  name: "DatePicker",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  components: {
    "v-date-picker": DatePicker,
  },
  data() {
    return {
      date: null,
      range: null,
    }
  },
  props: {
    /**
     * Allows for a single date or a date range to be selected. Possible values are: `single, range`.
     */
    mode: {
      type: String,
      default: "single",
      validator: value => {
        return value.match(/(single|range)/)
      },
    },
    /**
     * The label of the form input field.
     */
    label: {
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
     * The name attribute for the form input field.
     */
    name: {
      type: String,
      default: "",
      required: true,
    },
    /**
     * Disable dates using the date object or date range format. This example makes the
     * month of June 2019 selectable, but nothing else: `[{ start: null, end: new Date(2019, 05, 01)}, { start: new Date(2019, 05, 30), end: null }]`
     * Note: In Javascript, months start at zero, which is why 05 = June.
     */
    disabledDates: {
      type: Array,
      default: null,
      required: false,
    },
  },
  methods: {
    formatEnd() {
      if (this.range.hasOwnProperty("end")) {
        return this.range.end.toLocaleDateString("en-US")
      }
    },
    formatStart() {
      if (this.range.hasOwnProperty("start")) {
        return this.range.start.toLocaleDateString("en-US")
      }
    },
    parseDate(value) {
      // expects value string in MM/DD/YYYY format
      if (value.includes("/")) {
        let d = value.split("/")
        return new Date(d[2] + "-" + d[0] + "-" + d[1])
      }
    },
    updateInput(value) {
      if (this.isValidFormat(value)) {
        this.date = this.parseDate(value)
      }
    },
    updateRangeInput(value) {
      if (value.includes(" - ")) {
        let r = value.split(" - ")
        if (this.isValidFormat(r[0])) {
          this.range.start = this.parseDate(r[0])
        }
        if (this.isValidFormat(r[1])) {
          this.range.end = this.parseDate(r[1])
        }
      }
    },
    isValidFormat(d) {
      let date_regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/
      return date_regex.test(d)
    },
  },
  beforeMount: function() {
    setupCalendar({
      popoverVisibility: "focus",
      updateOnInput: true,
    })
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
    <date-picker id="startDate" name="start" label="Start Date" mode="single" :disabled-dates="[{ start: null, end: new Date(2019, 05, 01)}, { start: new Date(2019, 05, 30), end: null }]" />
  </div>
  ```
</docs>
