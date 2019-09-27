<template>
  <div>
    <v-autocomplete
      :items="items"
      v-model="item"
      :get-label="getLabel"
      :component-item="template"
      @update-items="updateItems"
      @item-selected="itemSelected($event)"
      min-len="2"
      wait="200"
    >
    </v-autocomplete>
    <input
      type="text"
      :name="hiddenInputAttrs.name"
      :id="hiddenInputAttrs.id"
      :value="hiddenInputAttrs.value"
    />
  </div>
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
      hiddenInputAttrs: { id: this.id, name: this.name, value: this.selected.id },
      item: this.selected,
      items: [],
      unfilteredItems: this.options,
      template: AutoCompleteItemTemplate,
    }
  },
  props: {
    /**
     * Sets the id to reference this input with.
     */
    id: {
      type: String,
      default: "",
    },
    /**
     * Sets the name attribute for this input element
     */
    name: {
      type: String,
      default: "",
    },
    // /**
    //  * Sets the name attribute for this input element
    //  */
    // minLen: {
    //   type: [Number,String],
    //   default: "",
    // },
    // /**
    //  * Sets the name attribute for this input element
    //  */
    // wait: {
    //   type: [Number,String],
    //   default: "",
    // },
    /**
     * Option list that a user selects from
     */
    options: {
      type: Array,
      default: [],
    },
    /**
     * The item that has been selected.
     */
    selected: {
      type: Object,
      default: { id: "", name: "", description: "" },
    },
  },
  methods: {
    getLabel(item) {
      return item.name
    },
    itemSelected(event) {
      console.log(event)
      this.hiddenInputValue.value = event.id
    },
    updateItems(text) {
      // This is where the asyncronous function goes
      // async function apiGetAll (text) {
      //    try {
      //      const resp = await fetch('https://example.com/?q=' + text)
      //      console.log(resp)
      //      return resp
      //    } catch (err) {
      //         console.log(err)
      //      }
      // }
      // apiGetAll(text).then( (response) => {
      //   this.items = response
      // })
      this.hiddenInputAttrs.value = text
      this.items = this.unfilteredItems.filter(item => item.name.includes(text))
    },
  },
}
</script>

<style lang="scss">
// Design Tokens with local scope
$color-placeholder: tint($color-grayscale, 50%);

input,
textarea {
  @include reset;
  @include inset-squish-space($space-small);
  transition: all 0.2s ease;
  -webkit-appearance: none;
  appearance: none;
  font-family: $font-family-text;
  background: $color-white;
  border-radius: $border-radius-default;
  color: set-text-color($color-rich-black, $color-white);
  margin: 0;
  border: 0;
  width: 100%;

  &::-webkit-input-placeholder {
    -webkit-font-smoothing: antialiased;
    color: $color-placeholder;
  }
  &:-ms-input-placeholder {
    color: $color-placeholder;
  }
  &::-moz-placeholder {
    color: $color-placeholder;
    -moz-osx-font-smoothing: grayscale;
    opacity: 1;
  }
}

.v-autocomplete .v-autocomplete-input-group .v-autocomplete-input {
  @include stack-space($space-small);
  font-weight: $font-weight-regular;
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: $line-height-heading;
  width: auto;

  background: $color-white;
  border-radius: $border-radius-default;
  box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 80%);
  display: flex;
  width: auto;
  &.lux-input-expand {
    width: 100%;
  }
}

.v-autocomplete .v-autocomplete-list {
  width: auto;
  text-align: left;
  border: none;
  border-top: none;
  max-height: 400px;
  overflow-y: auto;
  border-bottom: 1px solid #157977;
  z-index: 100000;
}

// .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item {
//   cursor: pointer;
//   background-color: #fff;
//   padding: 10px;
//   border-bottom: 1px solid #157977;
//   border-left: 1px solid #157977;
//   border-right: 1px solid #157977;
// }
// .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item:last-child {
//   border-bottom: none;
// }
// .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item:hover {
//   background-color: #eee;
// }
// .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item abbr {
//   opacity: 0.8;
//   font-size: 0.8em;
//   display: block;
//   font-family: sans-serif;
// }
</style>

<docs>
  ```jsx
  <div>
    <auto-complete :id="autoComplete" :name="autoComplete" label="Auto-Complete"
      :selected="{
        id: 9,
        name: 'Lion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      }"
      :options="[
      {
        id: 9,
        name: 'Lion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        id: 10,
        name: 'Tiger',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        id: 11,
        name: 'Toad',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        id: 12,
        name: 'Penguin',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        id: 13,
        name: 'Bearded Dragon',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        id: 14,
        name: 'Bear',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        id: 15,
        name: 'Beaver',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
      {
        id: 16,
        name: 'Bullfrog',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      },
    ]" />
  </div>
  ```
</docs>
