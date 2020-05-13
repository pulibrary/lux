<template>
  <g>
    <path d="M7,10.7h6.4l0-1.5l-4.9,0l0-4.9H7V10.7z" />
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconEndNode",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="End Node">
      <lux-icon-end-node></lux-icon-end-node>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="End Node">
      <lux-icon-end-node></lux-icon-end-node>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="End Node" icon-color="red">
      <lux-icon-end-node></lux-icon-end-node>
    </lux-icon-base>
  </div>
  ```
</docs>
