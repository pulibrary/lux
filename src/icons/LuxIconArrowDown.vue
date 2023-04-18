<template>
  <g>
    <path
      d="M12,19c-0.1,0-0.3-0.1-0.4-0.2L0.1,5.8c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0L12,17.7L23.1,5.2
    		c0.2-0.2,0.5-0.2,0.7,0c0.2,0.2,0.2,0.5,0,0.7l-11.5,13C12.3,18.9,12.1,19,12,19z"
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
  name: "LuxIconArrowDown",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Arrow Down">
      <lux-icon-arrow-down></lux-icon-arrow-down>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Arrow Right">
      <lux-icon-arrow-down></lux-icon-arrow-down>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Arrow Down" icon-color="red">
      <lux-icon-arrow-down></lux-icon-arrow-down>
    </lux-icon-base>
  </div>
  ```
</docs>
