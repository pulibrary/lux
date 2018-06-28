<template>
  <div>
    <heading level="h2">Set Properties <small>for this <span>multi-volume</span> resource</small></heading>
     <!-- <span class="file_count">Total files: {{fileCount}}</span><span v-if="bibId" class="bibid"> | BibId: {{bibId}}</span> -->
    <form id="app" novalidate="true">
      <input-radio vertical id="viewDir" groupLabel="Viewing Direction" :options="[{name: 'viewDir', value: 'left-to-right', id: 'radio-opt1'}, {name: 'viewDir', value: 'right-to-left', id: 'radio-opt2'}, {name: 'viewDir', value: 'top-to-bottom', id: 'radio-opt3'}, {name: 'viewDir', value: 'bottom-to-top', id: 'radio-opt4'}]"></input-radio>
      <input-radio vertical id="viewHint" groupLabel="Viewing Hint" :options="[{name: 'viewHint', value: 'individuals', id: 'radio-opt1'}, {name: 'viewHint', value: 'paged', id: 'radio-opt2'}, {name: 'viewHint', value: 'continuous', id: 'radio-opt3'}]"></input-radio>
    </form>
  </div>
</template>

<script>
/**
 * This is the Resource Form for the Order Manager in Figgy
 */
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
  <resource-form></resource-form>
  ```
</docs>
