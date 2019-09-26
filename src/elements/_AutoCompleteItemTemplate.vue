<template>
  <div>
    <b>#{{ item.id }}</b>
    <span>{{ item.name }}</span>
    <abbr>{{ item.description }}</abbr>
  </div>
</template>

<script>
/**
 * Used to establish a section of a card for supplementary content.
 */
export default {
  name: "AutoCompleteItemTemplate",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * Item in the AutoComplete Dropdown
     */
    item: {
      type: Object,
      default: "",
      required: true,
    },
    /**
     * Text to search on
     */
    searchText: {
      type: [Number, String],
      default: "",
      required: true,
    },
  },
}
</script>
