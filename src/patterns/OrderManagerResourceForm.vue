<template>
  <div>
    <heading level="h2">Set Properties <small>for this <span v-if="isMultiVolume">multi-volume</span> resource</small></heading>
    <span class="file_count">Total files: {{ memberCount }}</span>
    <span v-if="resource.bibId" class="bibid"> | BibId: {{resource.bibId}}</span>
    <form id="app" novalidate="true">
      <input-radio @change="updateViewDir($event)" vertical id="viewDir" groupLabel="Viewing Direction"
        :options="viewDirs"></input-radio>
      <input-radio @change="updateViewHint($event)" vertical id="viewHint" groupLabel="Viewing Hint"
        :options="viewHints" :value="viewHints.label"></input-radio>
    </form>
  </div>
</template>

<script>
/**
 * This is the Resource Form for the Order Manager in Figgy
 */
import { mapState, mapGetters } from "vuex"
export default {
  name: "ResourceForm",
  status: "Prototype",
  release: "1.0.0",
  type: "Pattern",
  metaInfo: {
    title: "Resource Form",
    htmlAttrs: {
      lang: "en",
    },
  },
  data: function() {
    return {
      viewHints: [
        { name: "viewHint", value: "individuals", id: "individuals" },
        { name: "viewHint", value: "paged", id: "paged" },
        { name: "viewHint", value: "continuous", id: "continuous" },
      ],
      viewDirs: [
        {
          name: "viewDir",
          value: "left-to-right",
          id: "left-to-right",
        },
        {
          name: "viewDir",
          value: "right-to-left",
          id: "right-to-left",
        },
        {
          name: "viewDir",
          value: "top-to-bottom",
          id: "top-to-bottom",
        },
        {
          name: "viewDir",
          value: "bottom-to-top",
          id: "bottom-to-top",
        },
      ],
    }
  },
  props: {
    /**
     * The html element name used for the component.
     */
    type: {
      type: String,
      default: "div",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    memberCount: function() {
      return this.$store.getters.getMemberCount
    },
    isMultiVolume() {
      return this.$store.getters.isMultiVolume
    },
    ...mapState({
      resource: state => state.ordermanager.resource,
    }),
  },
  methods: {
    updateViewDir(value) {
      this.$store.commit("UPDATE_VIEWDIR", value)
    },
    updateViewHint(value) {
      this.$store.commit("UPDATE_VIEWHINT", value)
    },
  },
}
</script>

<style lang="scss" scoped>
small {
  font-size: 1rem;
  font-weight: 400;
}
</style>

<docs>
  ```jsx
  <resource-form></resource-form>
  ```
</docs>
