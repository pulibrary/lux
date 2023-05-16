<template>
  <g>
    <path
      d="M19.9,7L17,4.1C16.9,4.1,16.8,4,16.7,4s-0.3,0.1-0.4,0.1L7.5,13c0,0-0.1,0.1-0.1,0.2l0,0c0,0,0,0,0,0l-2.1,4.9
  		c-0.1,0.2,0,0.4,0.1,0.6c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.1,0,0.2,0l4.9-2.1h0l0,0c0.1,0,0.1-0.1,0.2-0.1l8.8-8.8
  		C20,7.5,20,7.2,19.9,7z M10.7,15.5l-2.1-2.1L14.8,7L17,9.2L10.7,15.5z M8,14.2L9.8,16l-3.1,1.3L8,14.2z M17.7,8.5l-2.1-2.1l1.1-1.1
  		l2.1,2.1L17.7,8.5z"
    />
    <path
      d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,23C5.9,23,1,18.1,1,12C1,5.9,5.9,1,12,1s11,4.9,11,11
  		C23,18.1,18.1,23,12,23z"
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
  name: "LuxIconEdit",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Edit Item">
      <lux-icon-edit></lux-icon-edit>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Edit Item">
      <lux-icon-edit></lux-icon-edit>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Edit Item" icon-color="red">
      <lux-icon-edit></lux-icon-edit>
    </lux-icon-base>
  </div>
  ```
</docs>
