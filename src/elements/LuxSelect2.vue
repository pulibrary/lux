<template>
  <div>
    <label class="typo__label">Tagging</label>
    <multiselect
      v-model="vals"
      tag-placeholder="Add this as new tag"
      placeholder="Search or add a tag"
      label="name"
      track-by="code"
      :options="opts"
      :multiple="true"
      :taggable="true"
      @tag="addTag"
    ></multiselect>
    <pre class="language-json"><code>{{ value  }}</code></pre>
  </div>
</template>

<script>
/**
 * https://github.com/shentao/vue-multiselect
 */
import Multiselect from "vue-multiselect"

export default {
  name: "LuxSelect2",
  status: "prototype",
  release: "4.1.0",
  type: "Element",
  components: {
    Multiselect,
  },
  data() {
    return {
      vals: this.value,
      opts: this.options,
    }
  },
  props: {
    /**
     * Set the selected options using an array of label/value pairs
     */
    value: {
      type: Array,
      default: null,
      required: false,
    },
    /**
     * Customize the selectable options using an array of label/value pairs
     */
    options: {
      type: Array,
      default: null,
      required: false,
    },
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.options.push(tag)
      this.value.push(tag)
    },
  },
  beforeMount: function() {},
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<docs>
  ```jsx
  <div>
    <lux-select2 :options="[
      { name: 'Vue.js', code: 'vu' },
      { name: 'Javascript', code: 'js' },
      { name: 'Open Source', code: 'os' },
    ]" :value="[{ name: 'Javascript', code: 'js' }]"></lux-select2>
  </div>
  ```
</docs>
