<template>
<div class="OrderManager">
  <div class="title">{{resource.label}}</div>
  <div>MultiVolume: {{ isMultiVolume }}</div>
  <ul>
    <li v-for="member in resource.members">
      {{ member.id }} : {{ member.__typename }}
    </li>
  </ul>
</div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
/**
 * OrderManager comes with its own Vuex store that it needs to manage state.
 * The easiest way to load the OrderManager is to simply pass a resource in as a prop.
 * You can try this below by adding `:resource-object="{id: 'foo', label: 'bar'}"` as an attribute/prop
 * to the ``<ordermanager>` component.
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
    isMultiVolume() {
      return this.$store.getters.isMultiVolume
    },
    ...mapState({
      resource: state => state.ordermanager.resource,
    }),
  },
  props: {
    /**
     * The html element name used for the nav bar.
     */
    resourceObject: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    if (this.resourceObject) {
      this.$store.commit("SET_RESOURCE", this.resourceObject)
    }
  },
}
</script>
<style lang="scss" scoped>
.title {
  font-weight: bold;
}
</style>
<docs>
Don't forget that you can debug it with [vue-devtools](https://github.com/vuejs/vue-devtools)

```js
    <order-manager></order-manager>
```
</docs>
