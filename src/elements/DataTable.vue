<template>
  <table border="1px" :class="['lux-data-table']">
    <caption>
      {{
        caption
      }}
    </caption>
    <thead>
      <tr>
        <th v-for="(col, index) in parsedColumns" scope="col">
          {{ displayName(col) }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(lineItem, index) in jsonData">
        <td
          v-for="(col, index) in parsedColumns"
          :class="['foo', { 'lux-data-table-number': isNum(col.datatype) }]"
        >
          {{ lineItem[col.name] }}
        </td>
      </tr>
    </tbody>
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
      // todo for some reason, this value is not coming through
      return value === "number" ? true : false
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-data-table {
  min-width: 85%;
  border-top: 1px solid #bfbfbf;
  overflow: hidden;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #fff;

  caption {
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
    font-size: $font-size-base;
    line-height: $line-height-heading;
    padding: 0.5vw;
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }

  thead tr {
    background-color: $color-grayscale-darker;
    color: $color-white;
  }

  tbody tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
    background-color: $color-white;
    color: $color-grayscale-darker;
  }

  tbody tr:nth-child(odd) {
    background-color: $color-grayscale-lighter;
  }

  tbody {
    border-bottom: 1px solid #bfbfbf;
    background-color: #fff;
  }

  td {
    font-size: 1rem;
    line-height: 22px;
    padding: 12px 9px;
    font-weight: $font-weight-regular;
    font-family: $font-family-text;
    font-size: $font-size-base;
    line-height: $line-height-heading;
    text-align: left;
  }

  .lux-data-table-number {
    text-align: right;
  }

  th {
    font-size: 1rem;
    line-height: 22px;
    padding: 12px 9px;
    font-weight: $font-weight-bold;
    font-family: $font-family-text;
    font-size: $font-size-base;
    line-height: $line-height-heading;
    text-align: left;
  }
}
</style>

<docs>
  ```jsx
  <data-table caption="Staff Emails" :columns="['name',{ 'name': 'email', 'display_name': 'Email Address' },{ 'name': 'age', 'datatype': 'number'}]" :json-data="[
    {'id': 1,'name': 'foo','email': 'foo@xxx.xxx', 'age': 42 },
    {'id': 2,'name': 'bar','email': 'bar@xxx.xxx', 'age': 23 },
    {'id': 3,'name': 'fez','email': 'fez@xxx.xxx', 'age': 34 },
  ]"/>
  ```
</docs>
