<template>
  <wrapper>
    <v-date-picker v-if="mode === 'single'" mode="single" v-model="date">
      <input-text
        id="startDate"
        label="Start Date"
        width="auto"
        :value="!date ? '' : date.toLocaleDateString('en-US')"
        @input="updateDateInput($event)"
      >
      </input-text>
    </v-date-picker>
    <v-date-picker v-if="mode === 'range'" mode="range" v-model="range">
      <input-text
        id="dateRange"
        label="Date Range"
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
      let d = value.split("/")
      return new Date(d[2] + "-" + d[0] + "-" + d[1])
    },
    updateDateInput(value) {
      let d = this.parseDate(value)
      if (this.isValidDate(d)) {
        this.date = d
      }
    },
    updateRangeInput(value) {
      let r = value.split(" - ")
      let s = this.parseDate(r[0])
      let e = this.parseDate(r[1])
      if (this.isValidDate(s) && this.isValidDate(e)) {
        this.range.start = s
        this.range.end = e
      }
    },
    isValidDate(d) {
      // expects date in MM/DD/YYYY format
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
