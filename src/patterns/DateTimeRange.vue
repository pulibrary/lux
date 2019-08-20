<template>
  <form id="app" novalidate="true">
    <alert v-if="alert" type="alert" :status="alertStatus" :autoclear="true">{{
      alertMessage
    }}</alert>
    <input-text
      id="email"
      :errormessage="errormessageEmail"
      :value="emailValue"
      label="Email"
      @inputblur="validate($event)"
      placeholder="Write your text"
    />
    <input-text
      id="pwd"
      :errormessage="errormessagePwd"
      :value="pwdValue"
      label="Password"
      @inputblur="validate($event)"
      placeholder="Write your text"
    />
    <input-button
      v-on:system-alert="showAlert($event)"
      :customAlertEvent="{ alertStatus: 'success', alertMessage: 'Successfully logged in!' }"
      type="button"
      variation="solid"
      block
    >
      Login
    </input-button>
  </form>
</template>

<script>
/**
 * The LoginForm is an example of how one might add validation to a form component.
 * This is for demo purposes only and should not be used in a production app.
 */
export default {
  name: "LoginForm",
  status: "prototype",
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
      alert: false,
      alertStatus: "info",
      alertMessage: "Testing",
    }
  },
  methods: {
    validate(field) {
      if (field.id == "email") {
        this.emailValue = field.value
        if (/(.+)@(.+){2,}\.(.+){2,}/.test(field.value)) {
          this.errormessageEmail = ""
        } else {
          this.errormessageEmail = "You need to supply an email."
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
    showAlert(values) {
      this.alertMessage = values.alertMessage
      this.alertStatus = values.alertStatus
      this.alert = true
    },
  },
}
</script>

<style lang="scss" scoped></style>

<docs>
  ```jsx
  <div>
    <login-form></login-form>
  </div>
  ```
</docs>
