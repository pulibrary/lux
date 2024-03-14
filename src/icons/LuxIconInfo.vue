<template>
  <path
    d="M11.5,1C5.2,1,0,6.2,0,12.5S5.2,24,11.5,24C17.8,24,23,18.8,23,12.5S17.8,1,11.5,1z M11,6c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1
  	c-0.6,0-1-0.4-1-1C10,6.4,10.4,6,11,6z M14.5,20h-6C8.2,20,8,19.8,8,19.5S8.2,19,8.5,19H11v-8H9.5C9.2,11,9,10.8,9,10.5
  	S9.2,10,9.5,10h2c0.3,0,0.5,0.2,0.5,0.5V19h2.5c0.3,0,0.5,0.2,0.5,0.5S14.8,20,14.5,20z"
  />
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconInfo",
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
      <lux-icon-info></lux-icon-info>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Add Item">
      <lux-icon-info></lux-icon-info>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Add Item" icon-color="red">
      <lux-icon-info></lux-icon-info>
    </lux-icon-base>
  </div>
  ```
</docs>
