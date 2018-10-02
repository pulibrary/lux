<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMinYMid"
    aria-labelledby="logo-twitter"
    role="presentation"
  >
    <title
      :id="logo-twitter"
      lang="en"
    >Twitter Logo</title>
    <g>
      <path d="M23.444 4.834c-.814.363-1.5.375-2.227.016.938-.562.981-.957 1.32-2.019-.878.521-1.851.9-2.886 1.104a4.545 4.545 0 0 0-7.743 4.145 12.897 12.897 0 0 1-9.366-4.748 4.525 4.525 0 0 0-.615 2.285c0 1.577.803 2.967 2.021 3.782a4.527 4.527 0 0 1-2.057-.568l-.001.057a4.547 4.547 0 0 0 3.646 4.456 4.575 4.575 0 0 1-2.053.079 4.551 4.551 0 0 0 4.245 3.155A9.138 9.138 0 0 1 1 18.459 12.865 12.865 0 0 0 7.966 20.5c8.358 0 12.928-6.924 12.928-12.929 0-.198-.003-.393-.012-.588.887-.64 1.953-1.237 2.562-2.149z"/><path fill="none" d="M0 0h24v24H0z"/>
    </g>
  </svg>
</template>

<script>
/**
 * Twitter logo for social media sharing purposes.
 */
export default {
  name: "LogoTwitter",
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
    <logo-twitter />
  </div>
  ```
</docs>
