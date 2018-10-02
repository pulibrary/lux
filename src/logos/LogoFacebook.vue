<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMinYMid"
    aria-labelledby="logo-facebook"
    role="presentation"
  >
    <title
      :id="logo-facebook"
      lang="en"
    >Facebook Logo</title>
    <g>
      <path d="M18.768 7.465H14.5V5.56c0-.896.594-1.105 1.012-1.105H18.5V.513L14.171.5C10.244.5 9.5 3.438 9.5 5.32v2.144h-3v4h3v12h5v-12h3.851l.417-3.999z"/><path fill="none" d="M0 0h24v24H0z"/>
    </g>
  </svg>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#!/Adding%20Icons).
 */
export default {
  name: "LogoFacebook",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The width of the logo.
     */
    width: {
      type: [Number, String],
      default: 24,
    },
    /**
     * The height of the logo.
     */
    height: {
      type: [Number, String],
      default: 24,
    },
  },
}
</script>

<style lang="scss" scoped>
</style>

<docs>
  ```jsx
  <div>
    <logo-facebook />
  </div>
  ```
</docs>
