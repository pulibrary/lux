<template>
  <transition name="fade">
    <div v-if="show"
      :class="['alert',
              {'alert-dismissible': dismissible},
              { 'alert-success': isSuccess },
              { 'alert-warning': isWarning },
              { 'alert-error': isError },
              { 'alert-info': isInfo },
              { 'alert-fullscreen': isFullScreen },]"
              @click="hideAlert()"
              role="alert">
      <slot>
      {{ alertMessage }}
      </slot>
      <button v-if="dismissible" type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
  </transition>
</template>

<script>
/**
 * This component is used to provide timely information to a user in response to some event.
 */
export default {
  name: "Alert",
  status: "prototype",
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
      alertMessage: "Something happened, but we're not sure what.",
      show: true,
    }
  },
  computed: {
    isSuccess() {
      return this.status === "success" ? true : false
    },
    isInfo() {
      return this.status === "info" ? true : false
    },
    isWarning() {
      return this.status === "warning" ? true : false
    },
    isError() {
      return this.status === "error" ? true : false
    },
    isFullScreen() {
      return this.type === "alert" ? true : false
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
     * Automatically hides the notification after 2 seconds.
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
    hideAlert() {
      this.show = false
    },
  },
  mounted() {
    if (this.autoclear) {
      setTimeout(() => {
        this.show = false
      }, 2000)
    }
  },
}
</script>

<style lang="scss" scoped>
.alert-fullscreen {
  position: fixed;
  left: 0px;
  top: 5vh;
  left: 50%; /* move the left edge to the center … */
  margin-left: -25vw; /* … and move it to the left half the box’ width. */
  z-index: 9999;
  width: 50vw;
}

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

.alert-dismissible .close {
  position: relative;
  top: -0.95rem;
  right: -1.25rem;
  padding: 0.75rem 1.25rem;
  color: inherit;
}

button.close {
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
  -webkit-appearance: none;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<docs>
  ```jsx
  <div>
    <alert status="warning" autoclear=true>How to disappear completely...</alert>
    <alert status="error"></alert>
    <alert status="success">Like a boss!</alert>
    <alert status="info" dismissible=true>Here's some dismissible info for you.</alert>
  </div>
  ```
</docs>
