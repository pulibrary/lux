## Using Vuex to manage state in complex patterns

Simple patterns can manage their state via events as demonstrated in the [Counter Icon component](/#!/Templates?id=countericon). However, more complex patterns such as OrderManager (provided as an example) come with their own Vuex store that it needs to manage state. The easiest way to use complex patterns like the OrderManager is to simply pass a resource in as a prop. You can see how this is done in the live code example at the end of this section.

However you will still need to load the corresponding Vuex module, _resourceModule_. The example below shows you how to add the Vuex module to `store/index.js` in your host app:

```html
import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import state from './vuex/state'
import mutations from './vuex/mutations'
import actions from './vuex/actions'
import getters from './vuex/getters'
import {modules} from 'lux-design-system'
Vue.use(Vuex)

const store = new Vuex.Store({
 state,
 mutations,
 actions,
 getters,
 modules: {
   counter: modules.counterModule,
   ordermanager: modules.resourceModule
 }
})

 export default store
```

### API configuration

You can also use an API to load resource data into the store. To do this, you
could wrap the OrderManager (with no attributes/props) in a component that triggers a
backend request, and you must supply the Vuex actions that work with your backend.
Example:

```html
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
< /script>
```

```html
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
