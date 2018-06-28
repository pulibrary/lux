<template>
  <div>
    <heading level="h2">Edit <small>the selected item</small></heading>
    <form id="app" novalidate="true">
      <input-text id="itemLabel" :value="itemValue" label="Label" placeholder="e.g., example.tif" />
      <input-select label="Page Type" id="pageType" :options="[{label: 'Single Page (Default)', value: 'single', selected: true}, {label: 'Non-paged', value: 'non-paged'}, {label: 'Facing Pages', value: 'facing'}]"></input-select>
      <input-checkbox vertical :options="[{name: 'thumbnail', value: 'Set as Thumbnail', id: 'setThumbnail'}, {name: 'startPage', value: 'Set as Start Page', id: 'setStartPage'}]"></input-checkbox>
      <input-checkbox vertical :options="[{name: 'resourceThumbnail', value: 'Set as Resource Thumbnail', id: 'setResourceThumbnail'}]"></input-checkbox>
    </form>
  </div>
</template>

<script>
/**
 * This is the Fileset Form for the Order Manager in Figgy
 */
export default {
  name: "FilesetForm",
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
  <fileset-form></fileset-form>
  ```
</docs>
