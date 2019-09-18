<template>
  <g>
    <g>
      <path
        d="M11.3,24C5.1,24,0.1,19.1,0,12.7c-0.1-3.1,1.1-6,3.3-8.2C5.5,2.3,8.4,1.1,11.5,1c3.1,0,5.9,1.1,8.1,3.2
        c2.1,2.1,3.4,5,3.4,8.1l0,0c0.1,6.3-5,11.6-11.5,11.7C11.4,24,11.4,24,11.3,24z M11.7,2c-0.1,0-0.1,0-0.2,0
        C8.7,2.1,6,3.2,4,5.2c-2,2-3.1,4.7-3,7.5C1.1,18.6,5.7,23.1,11.5,23c5.9-0.1,10.6-4.9,10.5-10.7l0,0c0-2.8-1.2-5.4-3.1-7.4
        C17,3,14.4,2,11.7,2z"
      />
    </g>
    <g>
      <path
        d="M11.5,14.5c-0.3,0-0.5-0.2-0.5-0.5V7c0-0.3,0.2-0.5,0.5-0.5S12,6.7,12,7v7C12,14.3,11.8,14.5,11.5,14.5z"
      />
    </g>
    <g>
      <path
        d="M11.5,18.5c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.1,18.5,11.5,18.5z M11.5,17.5C11.5,17.5,11.5,17.5,11.5,17.5
        l0.5,0L11.5,17.5z"
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
  name: "LuxIconAlert",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="alert">
      <lux-icon-alert></lux-icon-alert>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="alert">
      <lux-icon-alert></lux-icon-alert>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30"  height="30" icon-name="alert" icon-color="red">
      <lux-icon-alert></lux-icon-alert>
    </lux-icon-base>
  </div>
  ```
</docs>
