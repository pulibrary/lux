<template>
  <g>
    <g>
      <path
        d="M20.5,24h-17C3.2,24,3,23.8,3,23.5v-23C3,0.2,3.2,0,3.5,0h11c0.1,0,0.3,0.1,0.4,0.1l6,6C20.9,6.2,21,6.4,21,6.5v17
        C21,23.8,20.8,24,20.5,24z M4,23h16V6.7L14.3,1H4V23z"
      />
    </g>
    <g>
      <path
        d="M20.5,7h-6C14.2,7,14,6.8,14,6.5v-6C14,0.2,14.2,0,14.5,0S15,0.2,15,0.5V6h5.5C20.8,6,21,6.2,21,6.5S20.8,7,20.5,7z"
      />
    </g>
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconFile",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="file">
      <lux-icon-file></lux-icon-file>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="file">
      <lux-icon-file></lux-icon-file>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="file" icon-color="red">
      <lux-icon-file></lux-icon-file>
    </lux-icon-base>
  </div>
  ```
</docs>
