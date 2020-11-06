<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 96 97"
    preserveAspectRatio="xMinYMid"
    aria-labelledby="logo-library-icon"
    role="img"
  >
    <title id="logo-library-icon">Princeton University Library Logo</title>

    <g>
      <path
        d="M12.2 0h71.5A12.27 12.27 0 0196 12.2v72.5A12.29 12.29 0 0183.7 97H12.2A12.27 12.27 0 010 84.7V12.2A12.25 12.25 0 0112.2 0z"
        fill="#ef7622"
      />
      <path
        class="cls-2"
        d="M10.8 83.5V20.1a22 22 0 006.6-3v59.8h.4a13.42 13.42 0 003.5-.4 39.8 39.8 0 007.6-2.5c1.2-.5 2.4-1.1 3.7-1.7a16.34 16.34 0 015.7-1.7 12 12 0 016.2.8 9.13 9.13 0 012.3 1.5 4.9 4.9 0 011.1 2c0 .1 0 .1.1.2s0-.1 0-.1a4.45 4.45 0 011.2-2.1 8 8 0 013.2-1.9 10.87 10.87 0 014.4-.5 16 16 0 016.4 1.7q3 1.5 6 2.7a27.18 27.18 0 006.2 1.7 12.29 12.29 0 002.7.2h.3V17.1a20.23 20.23 0 006.6 2.8v63.5H10.8z"
      />
      <path
        class="cls-2"
        d="M24.8 32.7A74.92 74.92 0 0125 17l.4.2a17.22 17.22 0 004.8 1.7 13.15 13.15 0 008.9-1.4 19.23 19.23 0 005-3.9 22.63 22.63 0 003.5-4.8l.1-.2.3.2a24.47 24.47 0 005.7 6.7 16.37 16.37 0 006.3 3.2 13.91 13.91 0 007.3-.4 14.76 14.76 0 002.9-1.2l.2-.1h.1a74 74 0 01.2 15.6h-46m11 27.8a54.59 54.59 0 01-5.3-8.7l17.4-17.4 17.4 17.4a47.68 47.68 0 01-5.2 8.7l-6-6-6.1-6.1-12.2 12.1"
      />
    </g>
  </svg>
</template>

<script>
/**
 * Official Princeton University Library Logo.
 */
export default {
  name: "LogoLibraryIcon",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The width of the logo.
     */
    width: {
      type: [Number, String],
      default: 97,
    },
    /**
     * The height of the logo.
     */
    height: {
      type: [Number, String],
      default: 97,
    },
  },
}
</script>

<style lang="scss" scoped>
.cls-2 {
  fill: #fcfafa;
}
</style>

<docs>
  ```jsx
  <div>
    <logo-library-icon></logo-library-icon>
  </div>
  ```
</docs>
