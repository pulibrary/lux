<template>
<div class="OrderManager">
  <transition name="fade">
    <div v-if="loading" class="overlay">
      <loader size="medium"></loader>
    </div>
  </transition>
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
 * You can see how this is done in the example below.
 *
 * You can also use an API that will update the store. To do this, you
 * could wrap the OrderManager (with no attributes/props) in a component that handles any syncing between the backend
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
    loading: function() {
      return this.resource.loadState !== "LOADED" ? true : false
    },
  },
  props: {
    /**
     * The resource object in json format. Example: [todo]
     */
    resourceObject: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    if (this.resourceObject) {
      // if props are passed in set the resource on mount
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
    <order-manager :resource-object="{id: 'foo', label: 'My Component', members: []}"></order-manager>
```
</docs>
