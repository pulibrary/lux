<template>
  <div :class="['alert', { 'alert-success': isSuccess }, { 'alert-info': isInfo },]" @systemalert="showAlert($event)" role="alert">
    {{ alertMessage }}
  </div>
</template>

<script>
/**
 * This component is used to provide timely information to a user in response to some event.
 */
export default {
  name: "Alert",
  status: "Prototype",
  release: "1.0.0",
  type: "Element",
  metaInfo: {
    title: "Global alert message to user.",
    htmlAttrs: {
      lang: "en",
    },
  },
  data: function() {
    return {
      alertMessage: "Something just happened, but we don't know what.",
    }
  },
  computed: {
    isSuccess() {
      return this.status === "success" ? true : false
    },
    isInfo() {
      return this.status === "info" ? true : false
    },
  },
  props: {
    /**
     * The intent of the message. Valid options: `alert, indicator`. Alerts are full page and indicators are “inline”.
     */
    type: {
      type: String,
      default: "indicator",
      validator: value => {
        return value.match(/(alert|indicator)/)
      },
    },
    /**
     * Severity of the message. Valid options: `info, warning, success, error`
     */
    status: {
      type: String,
      default: "info",
      validator: value => {
        return value.match(/(info|warning|success|errror)/)
      },
    },
    /**
     * Automatically hides the notification.
     */
    autoclear: {
      type: Boolean,
      default: false,
    },
    /**
     * User can manually hide the notification.
     */
    dismissible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    showAlert(event) {
      console.log(event)
    },
  },
}
</script>

<style lang="scss" scoped>
.alert {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.alert-success {
  background-color: #dff0d8;
  border-color: #d0e9c6;
  color: #3c763d;
}
.alert-error {
  background-color: #f2dede;
  border-color: #ebcccc;
  color: #a94442;
}
.alert-warning {
  background-color: #fcf8e3;
  border-color: #faf2cc;
  color: #8a6d3b;
}
.alert-info {
  background-color: #d9edf7;
  border-color: #bcdff1;
  color: #31708f;
}
</style>

<docs>
  ```jsx
  <alert></alert>
  ```
</docs>
