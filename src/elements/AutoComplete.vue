<template>
  <v-autocomplete
    :items="items"
    v-model="item"
    :get-label="getLabel"
    :component-item="template"
    @update-items="updateItems"
    min-len="2"
    wait="200"
  >
  </v-autocomplete>
</template>

<script>
/**
 * AutoComplete allows users to search and select from a pre-existing list of options, but
 * also allows for free-text entry. The options may be supplied to the component as a prop,
 * or they may be retrieved via asyncronous queries to a server as the user types.
 */
import Autocomplete from "v-autocomplete"
import "v-autocomplete/dist/v-autocomplete.css"
import AutoCompleteItemTemplate from "./_AutoCompleteItemTemplate.vue"

export default {
  name: "AutoComplete",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  components: {
    "v-autocomplete": Autocomplete,
  },
  data() {
    return {
      item: {
        id: 9,
        name: "Lion",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      },
      items: [],
      defaultItems: [
        {
          id: 9,
          name: "Lion",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          id: 10,
          name: "Tiger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          id: 11,
          name: "Toad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          id: 12,
          name: "Penguin",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          id: 13,
          name: "Parrot",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          id: 14,
          name: "Bear",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          id: 15,
          name: "Beaver",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        {
          id: 16,
          name: "Bullfrog",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
      ],
      template: AutoCompleteItemTemplate,
    }
  },
  methods: {
    getLabel(item) {
      return item.name
    },
    /**
     * Filter array items based on search criteria (query)
     */
    filterItems(arr, query) {
      return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
    },
    updateItems(text) {
      // This is where the asyncronous function goes
      // async function apiGetAll () {
      //    try {
      //      const resp = await fetch('https://jsonplaceholder.typicode.com/albums')
      //      console.log(resp)
      //      return resp
      //    } catch (err) {
      //         console.log(err)
      //      }
      // }
      // apiGetAll(text).then( (response) => {
      //   this.items = response
      // })

      this.items = this.defaultItems.filter(item => item.name.includes(text))
    },
  },
}
</script>

<style lang="scss">
.v-autocomplete .v-autocomplete-input-group .v-autocomplete-input {
  // font-size: 1.5em;
  // padding: 10px 15px;
  // box-shadow: none;
  // border: 1px solid #157977;
  // width: calc(100% - 32px);
  // outline: none;
  // background-color: #eee;
  @include stack-space($space-small);
  font-weight: $font-weight-regular;
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: $line-height-heading;
  width: auto;

  @include reset;
  background: $color-white;
  border-radius: $border-radius-default;
  box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 80%);
  display: flex;
  width: auto;
  &.lux-input-expand {
    width: 100%;
  }
}
.v-autocomplete .v-autocomplete-input-group.v-autocomplete-selected .v-autocomplete-input {
  color: #008000;
  background-color: #f2fff2;
}
.v-autocomplete .v-autocomplete-list {
  width: 100%;
  text-align: left;
  border: none;
  border-top: none;
  max-height: 400px;
  overflow-y: auto;
  border-bottom: 1px solid #157977;
  z-index: 100000;
}
.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item {
  cursor: pointer;
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #157977;
  border-left: 1px solid #157977;
  border-right: 1px solid #157977;
}
.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item:last-child {
  border-bottom: none;
}
.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item:hover {
  background-color: #eee;
}
.v-autocomplete .v-autocomplete-list .v-autocomplete-list-item abbr {
  opacity: 0.8;
  font-size: 0.8em;
  display: block;
  font-family: sans-serif;
}
</style>

<docs>
  ```jsx
  <div>
    <auto-complete id="autoComplete" name="autoComplete" label="Auto-Complete" />
  </div>
  ```
</docs>
