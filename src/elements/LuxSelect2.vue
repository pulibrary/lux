<template>
  <div>
    <label class="typo__label">Tagging</label>
    <multiselect
      v-model="value"
      tag-placeholder="Add this as new tag"
      placeholder="Search or add a tag"
      label="name"
      track-by="code"
      :options="options"
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
      value: [{ name: "Javascript", code: "js" }],
      options: [
        { name: "Vue.js", code: "vu" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" },
      ],
    }
  },
  props: {},
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
    <lux-select2></lux-select2>
  </div>
  ```
</docs>
