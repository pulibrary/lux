<template>
  <div class="lux-date-picker">
    <v-date-picker
      v-if="mode === 'single'"
      mode="single"
      :disabled-dates="disabledDates"
      :update-on-input="true"
      v-model="date"
      @popover-did-disappear="calendarClosedSingle($event)"
    >
      <input-text
        :id="id"
        :label="label"
        :name="name"
        :required="required"
        :width="width"
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
      @popover-did-disappear="calendarClosedRange($event)"
    >
      <input-text
        :id="id"
        :label="label"
        :name="name"
        :width="width"
        :required="required"
        :value="!range ? '' : this.formatStart() + ' - ' + this.formatEnd()"
        @input="updateRangeInput($event)"
      >
      </input-text>
    </v-date-picker>
  </div>
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
      date: this.defaultDate,
      range: this.defaultDates,
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
     * The width of the form input field.
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
     * Whether the form input field is required or not.
     * `true, false`
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * defaultDate offers a way to add data that may already exist for the field when `mode='single'`.
     * It takes the form of a Javascript Date object.
     * Example: `:defaultDate="new Date(2019, 05, 01)"`
     */
    defaultDate: {
      type: Date,
      default: null,
      required: false,
    },
    /**
     * defaultDates offer a way to add data that may already exist for the field when `mode='range'`.
     * It takes the form of an Object containing two properties (start and,
     * optionally, end date) with values that are Javascript date objects.
     * Example: `:defaultDates="{ start: new Date(2019, 05, 01), end: new Date(2019, 05, 02)}"`
     */
    defaultDates: {
      type: Object,
      default: null,
      required: false,
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
    calendarClosedSingle(value) {
      if (this.date && this.isValidFormat(this.date.toLocaleDateString("en-US"))) {
        var dateAsText = this.date.toLocaleDateString("en-US")
        this.$emit("updateInput", dateAsText)
      }
    },
    calendarClosedRange(value) {
      if (
        this.range &&
        this.isValidFormat(this.range.start.toLocaleDateString("en-US")) &&
        this.isValidFormat(this.range.end.toLocaleDateString("en-US"))
      ) {
        var rangeAsText = this.formatStart() + " - " + this.formatEnd()
        this.$emit("updateInput", rangeAsText)
      }
    },
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
        this.$emit("updateInput", value)
      }
    },
    updateRangeInput(value) {
      if (value.includes(" - ")) {
        let r = value.split(" - ")
        if (this.isValidFormat(r[0]) && this.isValidFormat(r[1])) {
          if (!this.range) {
            this.range = {}
          }
          this.range.start = this.parseDate(r[0])
          this.range.end = this.parseDate(r[1])
          this.$emit("updateInput", value)
        }
      }
    },
    isValidFormat(d) {
      let date_regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/
      return date_regex.test(d)
    },
    inputblur(value) {
      this.$emit("inputblur", value)
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
.lux-date-picker {
  @include stack-space($space-small);
}

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
    <date-picker id="dateRange" name="daterange" label="Date Range" mode="range" :disabled-dates="[{ start: null, end: new Date(2019, 05, 01)}, { start: new Date(), end: null }]" key="range" />

    <date-picker id="today" name="today" label="Today's Date" mode="single" :defaultDate="new Date()" key="single"  />
  </div>
  ```
</docs>
