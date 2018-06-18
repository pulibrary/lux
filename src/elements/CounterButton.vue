<template>
<div class="CounterButton">
	<button class="button"
		@click.prevent="increment">
		0
	</button>
	<span>{{message}}</span>
</div>
</template>

<script>
//import { mapGetters } from "vuex";

/**
 * Button that counts how many times it was pressed and exposes a `@public` method to reset itself.
 */
export default {
  name: "CounterButton",
  data: function() {
    return {
      message: "hello!",
    }
  },
  computed: {
    // ...mapGetters(["count"]),
    here() {
      return this.$store.getters.here
    },
  },
  methods: {
    /**
     * Increments the counter. This method is not marked @public and is not visible in the styleguide.
     */
    increment() {
      console.log(this.$store.getters.here)
      // this.$store.commit('increment')
      // /**
      //  * After increment event
      //  * @event after
      //  * @type {number}
      //  */
      // this.$emit("after", this.value);
    },
  },
}
</script>
<docs>
Don't forget that you can debug it with [vue-devtools](https://github.com/vuejs/vue-devtools)

```js
    <CounterButton/>
```
</docs>
