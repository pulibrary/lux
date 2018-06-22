<template>
<div class="OrderManager">
  {{label}}
</div>
</template>

<script>
/**
 * OrderManager comes with its own Vuex store that it needs to manage state.
 * The easiest way to load the OrderManager is to simply pass a resource in as a prop.
 * You can try this below by adding `:resource="{id: 'foo', label: 'bar'}"` as an attribute/prop
 * to the `<ordermanager>` component.
 *
 * You can also use an API that will update the store. To do this, you
 * could wrap the OrderManager in a component that handles any syncing between the backend
 * and the Vuex store. Example: [todo]
 */
export default {
  name: "OrderManager",
  status: "review",
  release: "1.0.0",
  type: "Element",
  computed: {
    label() {
      return this.$store.getters.label
    },
  },
  props: {
    /**
     * The html element name used for the nav bar.
     */
    resource: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    if (this.resource) {
      this.$store.commit("SET_RESOURCE", this.resource)
    }
  },
}
</script>
<docs>
Don't forget that you can debug it with [vue-devtools](https://github.com/vuejs/vue-devtools)

```js
    <order-manager></order-manager>
```
</docs>
