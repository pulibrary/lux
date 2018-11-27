## Using Vuex to manage state in complex patterns

Simple LUX components can manage their state via [events](https://vuejs.org/v2/guide/events.html). However, more complex components such as Gallery (provided as an example) come with their own Vuex store that it needs to manage state. The easiest way to use complex components like the Gallery is to simply pass a resource in as a prop. You can see how this is done in the live code example at the end of this section.

However you will still need to load the corresponding Vuex module, _galleryModule_. The example below shows you how to add the Vuex module to `store/index.js` in your host app:

```javascript
import Vue from "vue/dist/vue.esm"
import Vuex from "vuex"
import state from "./vuex/state"
import mutations from "./vuex/mutations"
import actions from "./vuex/actions"
import getters from "./vuex/getters"
import { modules } from "lux-design-system"
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    gallery: modules.galleryModule,
  },
})

export default store
```

### Setting State via Props

The easiest way to get data into your store is to simply pass them in as props and call the appropriate mutation that will populate the state (SET_GALLERY in this case).

```javascript
beforeMount: function() {
  if (this.galleryItems) {
    // if props are passed in set the gallery cards on mount
    store.commit("SET_GALLERY", this.galleryItems)
  }
},
```

Then, in your HTML, simply pass the data in as props.

```html
<gallery :gallery-items='[
  {"id":"8ffd7a03-ec0e-46c1-a347-e4b19cb7839f","title":"example.tif","caption":"FileSet : 8ffd7a03-ec0e-46c1-a347-e4b19cb7839f","mediaUrl":"https://picsum.photos/600/300/?random"},
  {"id":"8f0a0908-317f-414e-a78a-c38a4a3b28e3","title":"example.tif","caption":"FileSet : 8f0a0908-317f-414e-a78a-c38a4a3b28e3","mediaUrl":"https://picsum.photos/600/300/?random"},
  {"id":"ea01019e-f644-4416-b99c-1b44bf49d060","title":"example.tif","caption":"FileSet : ea01019e-f644-4416-b99c-1b44bf49d060","mediaUrl":"https://picsum.photos/600/300/?random"}
  ]'>
</gallery>
```

### Setting State via async call to API

You can also use an API to load resource data into the store. To do this, you
could wrap the OrderManager (with no attributes/props) in a component that triggers a
backend request, and you must supply the Vuex actions that work with your backend.
_Note: OrderManager is no longer part of LUX but the example stands._
Example:

```javascript
// order-manager-wrapper single file component in host app
<template>
 <wrapper type="div">
  <order-manager></order-manager>
 </wrapper>
</template>

<script>
export default {
  name: 'orderManagerWrapper',
  beforeMount: function () {
    this.resourceId = this.$el.attributes['data-resource'].value
    this.$store.dispatch('loadResource', this.resourceId)
  },
}
</script>
```

```javascript
// store/actions.js
import apollo from '../../helpers/apolloClient'
import gql from 'graphql-tag'
 *
const actions = {
 ...
 async loadImageCollectionGql (context, resource) {
   let id = resource.id
   const query = gql`
     query GetResource($id: ID!) {
       resource(id: $id) {
         id,
         label,
         __typename,
         members {
           id,
            __typename
         }
       }
     }`

   const variables = {
     id: id
   }

   try {
     const response = await apollo.query({
       query, variables
     })
     context.commit('SET_RESOURCE', response.data.resource)
   } catch(err) {
     context.commit('CHANGE_RESOURCE_LOAD_STATE', 'LOADING_ERROR')
     console.error(err)
   }
},
...
```
