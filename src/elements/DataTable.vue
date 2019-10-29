<template>
  <table border="1px" :class="['lux-data-table']">
    <caption>
      {{
        caption
      }}
    </caption>
    <thead>
      <tr>
        <th v-for="(col, index) in parsedColumns" scope="col">{{ displayName(col) }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(lineItem, index) in jsonData">
        <td
          v-for="(col, index) in parsedColumns"
          :class="[
            { 'lux-data-table-left': isLeft(col.align) },
            { 'lux-data-table-center': isCenter(col.align) },
            { 'lux-data-table-right': isRight(col.align) },
            { 'lux-data-table-number': isNum(col.datatype) },
          ]"
        >
          {{ lineItem[col.name] }}
        </td>
      </tr>
    </tbody>
    <tfoot v-if="summaryLabel">
      <tr>
        <th scope="row">{{ summaryLabel }}</th>
        <td
          v-for="(col, index) in footerColumns"
          :class="[
            { 'lux-data-table-left': isLeft(col.align) },
            { 'lux-data-table-center': isCenter(col.align) },
            { 'lux-data-table-right': isRight(col.align) },
            { 'lux-data-table-number': isNum(col.datatype) },
          ]"
        >
          {{ col.summary_value }}
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
/**
 * Used to display data to end users.
 */
export default {
  name: "DataTable",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * caption provides context for the data that is helpful to users, particularly those who use screenreaders.
     * `e.g. [name, title, age]`
     */
    caption: {
      required: true,
      type: String,
    },
    /**
     * summaryLabel provides context to the data values in tfoot element cells.
     */
    summaryLabel: {
      required: false,
      type: String,
    },
    /**
     * columns defines the columns and order for which the data should be displayed.
     * `e.g. ['name', 'email', 'age']`
     */
    columns: {
      required: true,
      type: Array,
    },
    /**
     * jsonData is supplied via Array with an object representing each row.
     * See example for exact structure.
     */
    jsonData: {
      required: true,
      type: Array,
    },
  },
  computed: {
    parsedColumns() {
      // We need to normalize the data by converting any simple string field
      // names into objects with a name property
      let pCols = this.columns.map(item => {
        if (!this.isObject(item)) {
          return { name: item.toLowerCase() }
        } else {
          item.name = item.name.toLowerCase()
          return item
        }
      })
      return pCols
    },
    footerColumns() {
      let fCols = this.columns
      fCols.shift()
      return fCols
    },
  },
  methods: {
    displayName(col) {
      if (col.hasOwnProperty("display_name")) {
        return col.display_name
      } else {
        return col.name
      }
    },
    isObject(value) {
      return value && typeof value === "object" && value.constructor === Object
    },
    isNum(value) {
      return value === "number" ? true : false
    },
    isLeft(value) {
      return value === "left" ? true : false
    },
    isCenter(value) {
      return value === "center" ? true : false
    },
    isRight(value) {
      return value === "right" ? true : false
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-data-table {
  border-collapse: collapse;
  border-spacing: 0;
  border-left: none;
  border-right: none;
  border-bottom: none;

  caption {
    @include stack-space($space-base);
    display: table-caption;
    text-align: left;
    @include responsive-font(
      2vw,
      $font-size-x-large-min,
      $font-size-x-large-max,
      $font-size-x-large
    );
    font-weight: $font-weight-bold;
    font-family: $font-family-text;
    line-height: $line-height-heading;
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
  }

  thead tr {
    background-color: $color-grayscale-lighter;
    color: $color-rich-black;
  }

  th {
    line-height: 22px;
    padding: 20px;
    font-weight: $font-weight-semi-bold;
    font-family: $font-family-text;
    font-size: $font-size-x-small;
    line-height: $line-height-heading;
    text-align: left;
    text-transform: uppercase;
    color: $color-grayscale-darker;
    letter-spacing: 0.5px;
  }

  th,
  td {
    border-bottom: none;
    border-left: none;
    border-right: none;
    border-top: 1px solid darken($color-grayscale-lighter, 10%);
    @include inset-space($space-base);
    overflow: hidden;
  }

  tbody tr {
    display: table-row;
    vertical-align: inherit;
    background-color: $color-white;
    color: $color-grayscale-darker;
  }

  tbody {
    background-color: #fff;
  }

  td {
    color: $color-rich-black;
    font-weight: $font-weight-regular;
    font-family: $font-family-text;
    font-size: $font-size-base;
    line-height: 1.2;
    text-align: left;
  }

  .lux-data-table-number {
    text-align: right;
  }

  .lux-data-table-left {
    text-align: left;
  }

  .lux-data-table-center {
    text-align: center;
  }

  .lux-data-table-right {
    text-align: right;
  }
}
</style>

<docs>
  ```jsx
  <data-table caption="Staff Emails" summary-label="Average" :columns="['name',{ 'name': 'email', 'display_name': 'Email Address', 'align': 'center' },{ 'name': 'age', 'datatype': 'number', 'summary_value': '33'}]" :json-data="[
    {'id': 1,'name': 'foo','email': 'foo@xxx.xxx', 'age': 42 },
    {'id': 2,'name': 'bar','email': 'bar@xxx.xxx', 'age': 23 },
    {'id': 3,'name': 'fez','email': 'fez@xxx.xxx', 'age': 34 },
  ]"/>
  ```
</docs>
