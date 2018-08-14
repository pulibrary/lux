<template>
  <div>
    <heading level="h2">Generate Labels <small>for selected items</small></heading>
    <form id="app" novalidate="true">
      <input-text @input="updateMultiLabels()" v-model="labelerOpts.unitLabel" id="unitLabel" label="Label" placeholder="e.g., p." />
      <input-text @input="updateMultiLabels()" v-model="labelerOpts.start" id="startNum" label="Starting Numeral" placeholder="e.g., 10" />
      <input-checkbox
          v-if="!isMultiVolume"
          @change="updateMultiLabels()"
          v-model="labelerOpts.bracket"
          :options="addBracketOpts" />

      <input-select id="labelMethod"
        v-if="!isMultiVolume"
        v-model="labelerOpts.method"
        label="Labeling Method"
        @change="updateMultiLabels()"
        :options="methodOpts" />

      <!-- <div v-if="!isMultiVolume" class="form-group">
        <label class="control-label" for="labelMethod">Labeling Method</label>
        <select @change="updateMultiLabels()" v-model="labelerOpts.method" id="labelMethod" class="form-control">
          <option value="paginate">Paginate (Default)</option>
          <option value="foliate">Foliate</option>
        </select>
      </div> -->
      <div v-if="labelerOpts.method === 'foliate'" class="row">
        <fieldset>
          <div class="form-group">
            <label class="control-label" for="frontLabel">Front Label</label>
            <input @input="updateMultiLabels()" v-model="labelerOpts.frontLabel" type="text" name="frontLabel" id="frontLabel" value="" placeholder="(recto)" class="form-control">
          </div>
          <div class="form-group">
            <label class="control-label" for="backLabel">Back Label</label>
            <input @input="updateMultiLabels()" v-model="labelerOpts.backLabel" type="text" name="backLabel" id="backLabel" value="" placeholder="(verso)" class="form-control">
          </div>
          <div class="form-group">
            <label class="control-label" for="startWith">Start With</label>
            <select @change="updateMultiLabels()" v-model="labelerOpts.startWith" id="startWith" class="form-control">
              <option value="front">Front (Default)</option>
              <option value="back">Back</option>
            </select>
          </div>
        </fieldset>
      </div>
    </form>
  </div>
</template>

<script>
import Lablr from "../utils/lablr"
import { mapState, mapGetters } from "vuex"
/**
 * This is the Filesets Form for the Order Manager in Figgy
 */
export default {
  name: "FilesetsForm",
  status: "prototype",
  release: "1.0.0",
  type: "Pattern",
  metaInfo: {
    title: "Fileset Form",
    htmlAttrs: {
      lang: "en",
    },
  },
  data: function() {
    return {
      labelerOpts: {
        start: "1",
        method: "paginate",
        frontLabel: "",
        backLabel: "",
        startWith: "front",
        unitLabel: "p. ",
        bracket: false,
      },
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
  },
  computed: {
    ...mapState({
      resource: state => state.ordermanager.resource,
      gallery: state => state.gallery,
    }),
    isMultiVolume() {
      return this.$store.getters.isMultiVolume
    },
    selectedTotal() {
      return this.gallery.selected.length
    },
    addBracketOpts: function() {
      return [
        {
          name: "addBrackets",
          value: "Add Brackets",
          id: "addBrackets",
          checked: this.labelerOpts.bracket,
        },
      ]
    },
    methodOpts: function() {
      return [{ label: "Paginate (Default)", value: "paginate" }, { label: "Foliate", value: "foliate" }]
    },
  },
  methods: {
    isNormalInteger(str) {
      return /^\+?(0|[1-9]\d*)$/.test(str)
    },
    updateMultiLabels() {
      console.log(this.labelerOpts)
      let changeList = this.gallery.changeList
      let items = this.gallery.items
      this.labelerOpts.start = this.isNormalInteger(this.labelerOpts.start)
        ? this.labelerOpts.start - 0
        : this.labelerOpts.start
      let generator = Lablr.pageLabelGenerator(this.labelerOpts)
      for (let i = 0; i < this.selectedTotal; i++) {
        let index = this.gallery.items
          .map(function(item) {
            return item.id
          })
          .indexOf(this.gallery.selected[i].id)
        items[index].caption = generator.next().value

        if (changeList.indexOf(this.gallery.selected[i].id) === -1) {
          changeList.push(this.gallery.selected[i].id)
        }
      }
      this.$store.commit("UPDATE_CHANGES", changeList)
      this.$store.commit("UPDATE_ITEMS", items)
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
  <filesets-form></filesets-form>
  ```
</docs>
