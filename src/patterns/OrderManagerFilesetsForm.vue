<template>
  <div>
    <heading level="h2">Generate Labels <small>for selected items</small></heading>
    <form id="app" novalidate="true">
      <input-text id="unitLabel" :value="unitLabel" label="Unit Label" placeholder="e.g., p." />
      <input-text id="startNum" :value="startNum" label="Starting Numeral" placeholder="e.g., 10" />
      <input-checkbox vertical :options="[{name: 'addBrackets', value: 'Add Brackets', id: 'addBrackets'}]"></input-checkbox>
      <input-select label="Labeling Method" id="labelingMethod" :options="[{label: 'Paginate (Default)', value: 'paginate', selected: true}, {label: 'Foliate', value: 'foliate'}]"></input-select>

      <input-text id="frontLabel" :value="frontLabel" label="Front Label" placeholder="e.g., (recto)" />
      <input-text id="backLabel" :value="backLabel" label="Back Label" placeholder="e.g., (verso)" />
      <input-select label="Start With" id="startWith" :options="[{label: 'Front (Default)', value: 'front', selected: true}, {label: 'Back', value: 'back'}]"></input-select>
    </form>
  </div>
</template>

<script>
/**
 * This is the Filesets Form for the Order Manager in Figgy
 */
export default {
  name: "FilesetsForm",
  status: "Prototype",
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
      errormessageEmail: "",
      errormessagePwd: "",
      emailValue: "",
      pwdValue: "",
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
  methods: {
    validate(field) {
      if (field.id == "email") {
        this.emailValue = field.value
        if (!field.value.length) {
          this.errormessageEmail = "You need to supply an email."
        } else {
          this.errormessageEmail = ""
        }
      }
      if (field.id == "pwd") {
        this.pwdValue = field.value
        if (!field.value.length) {
          this.errormessagePwd = "You need to supply a password."
        } else {
          this.errormessagePwd = ""
        }
      }
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
