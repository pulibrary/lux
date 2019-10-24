<template>
  <g>
    <path
      d="M11.5,0C5.159,0,0,5.159,0,11.5S5.159,23,11.5,23S23,17.841,23,11.5S17.841,0,11.5,0z M11.5,22C5.71,22,1,17.29,1,11.5
  		S5.71,1,11.5,1S22,5.71,22,11.5S17.29,22,11.5,22z"
    />
    <path
      d="M17.5,11H12V5.5C12,5.224,11.776,5,11.5,5S11,5.224,11,5.5V11H5.5C5.224,11,5,11.224,5,11.5S5.224,12,5.5,12H11v5.5
  		c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V12h5.5c0.276,0,0.5-0.224,0.5-0.5S17.776,11,17.5,11z"
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
  name: "LuxIconAdd",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Add Item">
      <lux-icon-add></lux-icon-add>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Add Item">
      <lux-icon-add></lux-icon-add>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Add Item" icon-color="red">
      <lux-icon-add></lux-icon-add>
    </lux-icon-base>
  </div>
  ```
</docs>
