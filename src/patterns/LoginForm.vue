<template>
  <form id="app" novalidate="true">
    <input-text id="email" :errormessage="errormessageEmail" :value="emailValue" label="Email" @inputblur="validate($event)" placeholder="Write your text" />
    <input-text id="pwd" :errormessage="errormessagePwd" :value="pwdValue" label="Password" @inputblur="validate($event)" placeholder="Write your text" />
  </form>
</template>

<script>
/**
 * This example is a grouping of the _counter_ and the _svg-icon_ elements. It
 * demonstrates how to do simple state management in a template. When the counter total
 * reaches 5, the icon is replaced by a warning.
 *
 * More complex state management should be handled with Vuex.
 */
export default {
  name: "LoginForm",
  status: "Prototype",
  release: "1.0.0",
  type: "Pattern",
  metaInfo: {
    title: "Form with validation",
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
</style>

<docs>
  ```jsx
  <login-form></login-form>
  ```
</docs>
