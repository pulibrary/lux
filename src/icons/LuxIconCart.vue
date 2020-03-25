<template>
  <path
    d="M21,18.7l3-9c0-0.2,0-0.3-0.1-0.5C23.8,9.1,23.7,9,23.5,9H5.8L4.5,3.4C4.4,3.2,4.2,3,4,3H0.5C0.2,3,0,3.2,0,3.5S0.2,4,0.5,4
  	h3.1l3.8,16.1C6.6,20.4,6,21.1,6,22c0,1.1,0.9,2,2,2s2-0.9,2-2c0-0.4-0.1-0.7-0.3-1h7.6c-0.2,0.3-0.3,0.6-0.3,1c0,1.1,0.9,2,2,2
  	s2-0.9,2-2s-0.9-2-2-2H8.4l-0.2-1h12.3C20.7,19,20.9,18.9,21,18.7z M9,22c0,0.6-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S9,21.4,9,22z M20,22
  	c0,0.6-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S20,21.4,20,22z M7.9,18L6,10h16.8l-2.7,8H7.9z"
  />
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconCart",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Cart">
      <lux-icon-cart></lux-icon-cart>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Cart">
      <lux-icon-cart></lux-icon-cart>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Cart" icon-color="red">
      <lux-icon-cart></lux-icon-cart>
    </lux-icon-base>
  </div>
  ```
</docs>
