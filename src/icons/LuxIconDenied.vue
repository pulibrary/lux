<template>
  <g>
    <g>
      <path
        d="M11.5,23C5.2,23,0,17.8,0,11.5C0,5.2,5.2,0,11.5,0C17.8,0,23,5.2,23,11.5C23,17.8,17.8,23,11.5,23z M11.5,1
        C5.7,1,1,5.7,1,11.5C1,17.3,5.7,22,11.5,22C17.3,22,22,17.3,22,11.5C22,5.7,17.3,1,11.5,1z"
      />
    </g>
    <g>
      <path
        d="M7.3,16.2c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l8.5-8.5c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-8.5,8.5
        C7.5,16.2,7.4,16.2,7.3,16.2z"
      />
    </g>
    <g>
      <path
        d="M15.7,16.2c-0.1,0-0.3,0-0.4-0.1L6.9,7.6c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l8.5,8.5c0.2,0.2,0.2,0.5,0,0.7
        C16,16.2,15.9,16.2,15.7,16.2z"
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
  name: "LuxIconDenied",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="denied">
      <lux-icon-denied></lux-icon-denied>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="denied">
      <lux-icon-denied></lux-icon-denied>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="denied" icon-color="red">
      <lux-icon-denied></lux-icon-denied>
    </lux-icon-base>
  </div>
  ```
</docs>
