<template>
  <li @click="clicked" :class="[{ selected: isSelected }]">
    <label for="[{ collection.title[0] }]"
      >{{ collection.title[0] }} {{ hasChildren ? (isOpen ? "[-]" : "[+]") : "" }}</label
    >
    <input type="checkbox" checked id="[{ collection.title[0] }]" />
    <ul v-show="isOpen && hasChildren">
      <tree-item
        v-for="(component, index) in collection.components"
        :json-data="component"
      ></tree-item>
    </ul>
  </li>
</template>

<script>
/**
 * TreeItems are the building blocks of hierarchical navigation.
 */
export default {
  name: "TreeItem",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * id identifies the node in the tree.
     */
    id: {
      default: "",
    },
    jsonData: {
      required: true,
    },
  },
  data: function() {
    return {
      hasChildren: this.jsonData.components.length > 0,
      isOpen: true,
      isSelected: false,
      collection: this.jsonData,
    }
  },
  methods: {
    clicked: function() {
      console.log(this.collection.title[0])
      this.isOpen = !this.isOpen
      this.isSelected = !this.isSelected
    },
  },
}
</script>

<style lang="scss">
li {
  list-style-type: none;
  font-family: sans-serif;
  border: 1px;
  margin: 10px 0 10px 10px;
}

li label {
  background: $color-grayscale-warm;
  width: 100%;
  display: block;
  padding: 0.5em 0.5em 0.5em 2em;
}
li input {
  width: 1em;
  height: 1em;
  position: absolute;
  left: -0.5em;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
li input + ul {
  height: 1em;
  margin: -16px 0 0 -44px;
  background: url("https://www.thecssninja.com/demo/css_tree/toggle-small-expand.png") no-repeat
    40px 0;
}
li input + ul > li {
  display: none;
  margin-left: -14px !important;
  padding-left: 1px;
}
li input:checked + ul {
  height: auto;
  margin: -21px 0 0 -44px;
  padding: 25px 0 0 80px;
  background: url("https://www.thecssninja.com/demo/css_tree/toggle-small.png") no-repeat 40px 5px;
}
li input:checked + ul > li {
  display: block;
  margin: 0 0 0.063em;
}
li input:checked + ul > li:first-child {
  margin: 0 0 0.125em;
}

li.selected {
  background: $color-grayscale-warm-light;
}
</style>

<docs>
  ```jsx
  <div>
    <tree-item :json-data='
    {
      "id": "C0614",
      "level": "collection",
      "component_level": null,
      "components": [],
      "title": [
        "Blair and Lee Family Papers"
      ]
    }
    '></tree-item>
  </div>
  ```

</docs>
