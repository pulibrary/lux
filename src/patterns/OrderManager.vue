<template>
<div class="orderManager">
  <transition name="fade">
    <div v-if="loading" class="overlay">
      <loader size="medium"></loader>
    </div>
  </transition>
  <wrapper class="galleryPanel" type="div">
    <div class="title">{{resource.label}}</div>
    <div>MultiVolume: {{ isMultiVolume }}</div>
    <ul>
      <li v-for="member in resource.members">
        {{ member.id }} : {{ member.__typename }}
      </li>
    </ul>
  </wrapper>
  <wrapper class="sidePanel" type="div">
    <resource-form></resource-form>
  </wrapper>
</div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
/**
 * OrderManager is a tool for reordering thumbnails that represent members of a complex object (a book, CD, multi-volume work, etc.).
 * Complex patterns like OrderManager come with their own Vuex store that it needs to manage state.
 * The easiest way to use the OrderManager is to simply pass a resource in as a prop.
 * You can see how this is done in the live code example at the end of this section.
 *
 * However you will still need to load the corresponding
 * Vuex module, *resourceModule*. The example below shows you how to add the Vuex module to `store/index.js` in your host app:
 *
 * ```
 *
 * import Vue from 'vue/dist/vue.esm'
 * import Vuex from 'vuex'
 * import state from './vuex/state'
 * import mutations from './vuex/mutations'
 * import actions from './vuex/actions'
 * import getters from './vuex/getters'
 * import {modules} from 'lux-design-system'
 * Vue.use(Vuex)
 *
 * const store = new Vuex.Store({
 *  state,
 *  mutations,
 *  actions,
 *  getters,
 *  modules: {
 *    counter: modules.counterModule,
 *    ordermanager: modules.resourceModule
 *  }
 * })
 *
 *  export default store
 *
 * ```
 *
 * #### API configuration
 * You can also use an API to load resource data into the store. To do this, you
 * could wrap the OrderManager (with no attributes/props) in a component that triggers a
 * backend request, and you must supply the Vuex actions that work with your backend.
 * Example:
 *
 * ```
 * // order-manager-wrapper single file component in host app
 * <template>
 *  <wrapper type="div">
 *   <order-manager></order-manager>
 *  </wrapper>
 * </template>
 *
 * <script>
 * export default {
 *   name: 'orderManagerWrapper',
 *   beforeMount: function () {
 *     this.resourceId = this.$el.attributes['data-resource'].value
 *     this.$store.dispatch('loadResource', this.resourceId)
 *   },
 * }
 * < /script>
 *
 * ```
 *
 * ```
 * // store/actions.js
 * import apollo from '../../helpers/apolloClient'
 * import gql from 'graphql-tag'
 *
 * const actions = {
 *  ...
 *  async loadImageCollectionGql (context, resource) {
 *    let id = resource.id
 *    const query = gql`
 *      query GetResource($id: ID!) {
 *        resource(id: $id) {
 *          id,
 *          label,
 *          __typename,
 *          members {
 *            id,
 *             __typename
 *          }
 *        }
 *      }`
 *
 *    const variables = {
 *      id: id
 *    }
 *
 *    try {
 *      const response = await apollo.query({
 *        query, variables
 *      })
 *      context.commit('SET_RESOURCE', response.data.resource)
 *    } catch(err) {
 *      context.commit('CHANGE_RESOURCE_LOAD_STATE', 'LOADING_ERROR')
 *      console.error(err)
 *    }
 * },
 * ...
 *
 * ```
 *
 *
 *
 *
 *
 *
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
    } else {
      this.$store.commit("CHANGE_RESOURCE_LOAD_STATE", "LOADING")
    }
  },
}
</script>
<style lang="scss" scoped>
.title {
  font-weight: bold;
}
.orderManager {
  position: relative;
  height: 80vh;
}
.sidePanel {
  position: absolute;
  top: 20px;
  right: 10px;
  height: 95%;
  width: 28.5%;
  border: 1px solid #ddd;
  border-radius: 4px;

  padding: 0 30px 0 30px;
  // height: 100%;
  overflow-y: scroll;
}
.galleryPanel {
  position: absolute;
  top: 20px;
  left: 0;
  height: 95%;
  width: 70%;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style>
<docs>
<br/>Don't forget that you can debug it with [vue-devtools](https://github.com/vuejs/vue-devtools)

```js
    <order-manager :resource-object='{
      "id": "aea40813-e0ed-4307-aae9-aec53b26bdda",
      "label": "Resource with 3 files",
      "viewingHint": "individuals",
      "__typename": "ScannedResource",
      "members": [
        {
          "id": "8ffd7a03-ec0e-46c1-a347-e4b19cb7839f",
          "label": "example.tif",
          "viewingHint": null,
          "__typename": "FileSet"
        },
        {
          "id": "8f0a0908-317f-414e-a78a-c38a4a3b28e3",
          "label": "example.tif",
          "viewingHint": null,
          "__typename": "FileSet"
        },
        {
          "id": "ea01019e-f644-4416-b99c-1b44bf49d060",
          "label": "example.tif",
          "viewingHint": null,
          "__typename": "FileSet"
        }
      ]
    }'></order-manager>
```
</docs>
