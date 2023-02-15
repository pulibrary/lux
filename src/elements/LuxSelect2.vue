<template>
  <div>
    <label v-if="inputLabel" :for="id">{{ inputLabel }}</label>
    <multiselect
      v-model="vals"
      :id="id"
      tag-placeholder="Add this as new tag"
      placeholder="Search or add a tag"
      label="name"
      track-by="code"
      :options="opts"
      :multiple="true"
      :taggable="true"
      @tag="addTag"
    ></multiselect>
    <pre class="language-json"><code>{{ vals  }}</code></pre>
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
    /**
     * The label of the LuxSelect2 field.
     */
    inputLabel: {
      type: String,
      default: "",
    },
    /**
     * Unique identifier of the LuxSelect2 field.
     */
    id: {
      type: String,
      default: null,
      required: true,
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
    <lux-select2 
      id="some_id"
      inputLabel="Input label"
      :options="[
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' },
      ]" 
      :value="[{ 
        name: 'Javascript', 
        code: 'js' 
      }]"
    ></lux-select2>
  </div>
  ```
</docs>
