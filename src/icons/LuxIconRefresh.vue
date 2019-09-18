<template>
  <g>
    <g>
      <path
        d="M4.5,14C4.5,14,4.5,14,4.5,14c-0.2,0-0.3-0.1-0.4-0.2l-3-4.5C0.9,9,1,8.7,1.2,8.6c0.2-0.2,0.5-0.1,0.7,0.1l2.6,4
        l3.1-3.5c0.2-0.2,0.5-0.2,0.7,0c0.2,0.2,0.2,0.5,0,0.7l-3.5,4C4.8,13.9,4.6,14,4.5,14z"
      />
    </g>
    <g>
      <path
        d="M14,22c-0.3,0-0.5-0.2-0.5-0.5S13.7,21,14,21c5,0,9-4,9-9c0-5-4-9-9-9c-5,0-9,4-9,9v1.5C5,13.8,4.8,14,4.5,14
        S4,13.8,4,13.5V12C4,6.5,8.5,2,14,2c5.5,0,10,4.5,10,10C24,17.5,19.5,22,14,22z"
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
  name: "LuxIconRefresh",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="refresh">
      <lux-icon-refresh></lux-icon-refresh>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="refresh">
      <lux-icon-refresh></lux-icon-refresh>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="refresh" icon-color="red">
      <lux-icon-refresh></lux-icon-refresh>
    </lux-icon-base>
  </div>
  ```
</docs>
