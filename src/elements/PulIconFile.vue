<template>
  <path d="M13.974 4.205a.33.33 0 0 0-.072-.108L9.903.098a.327.327 0 0 0-.108-.071A.326.326 0 0 0 9.667 0H2.334a.333.333 0 0 0-.333.333v15.333c0 .184.149.333.333.333h11.333a.333.333 0 0 0 .333-.333V4.333a.325.325 0 0 0-.026-.128zM10 1.138L12.862 4H10V1.138zM2.667 15.333V.666h6.667v3.667c0 .184.149.333.333.333h3.667v10.667H2.667z"/>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#!/Adding%20Icons).
 */
export default {
  name: "PulIconFile",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
  <pul-icon-base
    width="12"
    height="12"
    icon-name="file"
  ><pul-icon-file /></pul-icon-base>
  <!-- or you can use the default, which is 18 -->
  <pul-icon-base icon-name="file"><pul-icon-file /></pul-icon-base>
  <!-- or make it a little bigger too, with colors :) -->
  <pul-icon-base
    width="30"
    height="30"
    icon-name="file"
    icon-color="rgb(44, 110, 175)"
  ><pul-icon-file /></pul-icon-base>
  </div>
  ```
</docs>
