<template>
<div class="CounterButton">
	<button class="button"
		@click.prevent="increment">
		{{count}}
	</button>
</div>
</template>

<script>
/**
 * Button that counts how many times it was pressed. State management is handled
 * by Vuex, so the corresponding Vuex module (_counterModule_) must be loaded
 * into the application store. Here's a sample application store that uses both a
 * a local store (with state, mutations, actions, and getters) along with this
 * _CounterButton_ component vuex module:
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
 * const store = new Vuex.Store({
 * 	state,
 * 	mutations,
 * 	actions,
 * 	getters,
 * 	modules: {
 * 		counter: modules.counterModule,
 * 	}
 * })
 * export default store
 *
 * ```
 *
 */
export default {
  name: "VuexCounterButton",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  computed: {
    count() {
      return this.$store.getters.count
    },
  },
  methods: {
    /**
     * Increments the counter. This method is not marked @public and is not visible in the styleguide.
     */
    increment() {
      this.$store.commit("increment")
      /**
       * After increment event
       * @event after
       * @type {number}
       */
      this.$emit("after", this.value)
    },
  },
}
</script>
<docs>
<br/>
Don't forget that you can debug it with [vue-devtools](https://github.com/vuejs/vue-devtools)

```js
    <vuex-counter-button></vuex-counter-button>
```
</docs>
