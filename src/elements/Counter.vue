<template>
<div class="Counter">
  {{mutableCount}}
	<button class="button"
		@click.prevent="increment">
		+1
	</button>
  <button class="button"
		@click.prevent="decrement">
		-1
	</button>
</div>
</template>

<script>
/**
 * Button that counts how many times it was pressed and exposes a `@public` method to reset itself.
 */
export default {
  name: "Counter",
  status: "review",
  release: "1.0.0",
  type: "Element",
  data: function() {
    return {
      mutableCount: JSON.parse(this.count),
    }
  },
  props: {
    /**
     * The html element name used for the wrapper.
     */
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    /**
     * Increments the counter. This method is not marked @public and is not visible in the styleguide.
     */
    increment() {
      this.mutableCount = this.mutableCount + 1
      /**
       * After increment event
       * @event increment
       * @type {number}
       */
      this.$emit("update-count", this.mutableCount)
    },
    decrement() {
      this.mutableCount = this.mutableCount - 1
      /**
       * After decrement event
       * @event decrement
       * @type {number}
       */
      this.$emit("update-count", this.mutableCount)
    },
  },
}
</script>
<docs>
Don't forget that you can debug it with [vue-devtools](https://github.com/vuejs/vue-devtools)

```js
    <counter></counter>
```
</docs>
