<template>
  <g>
    <path
      d="M5.5,24c-0.1,0-0.3-0.1-0.4-0.2c-0.2-0.2-0.2-0.5,0-0.7L17.7,12L5.2,0.9C5,0.7,4.9,0.4,5.1,0.2c0.2-0.2,0.5-0.2,0.7,0
    		l13,11.5c0.1,0.1,0.2,0.2,0.2,0.4s-0.1,0.3-0.2,0.4l-13,11.5C5.7,24,5.6,24,5.5,24z"
    />
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconArrowRight",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Arrow Right">
      <lux-icon-arrow-right></lux-icon-arrow-right>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Arrow Right">
      <lux-icon-arrow-right></lux-icon-arrow-right>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Arrow Right" icon-color="red">
      <lux-icon-arrow-right></lux-icon-arrow-right>
    </lux-icon-base>
  </div>
  ```
</docs>
