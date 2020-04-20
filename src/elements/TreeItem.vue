<template>
  <li @click="isOpen = !isOpen">
    <slot></slot><span>[{{ isOpen ? "-" : "+" }}]</span>
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
      type: String,
      default: "",
    },
  },
  data: function() {
    return {
      isOpen: false,
    }
  },
  methods: {
    clicked: function() {
      console.log("Hey clicked!")
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss"></style>

<docs>
  ```jsx
  <div>
    <tree-item :id="123">
      I'm a label!
    </tree-item>
  </div>
  ```

</docs>
