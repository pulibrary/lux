<template>
  <g>
    <g>
      <path
        d="M8.5,17C3.8,17,0,13.2,0,8.5C0,3.8,3.8,0,8.5,0C13.2,0,17,3.8,17,8.5C17,13.2,13.2,17,8.5,17z M8.5,1
        C4.4,1,1,4.4,1,8.5S4.4,16,8.5,16S16,12.6,16,8.5S12.6,1,8.5,1z"
      />
    </g>
    <g>
      <path
        d="M23.5,24c-0.1,0-0.3,0-0.4-0.1l-9.3-9.3c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l9.3,9.3c0.2,0.2,0.2,0.5,0,0.7
        C23.8,24,23.6,24,23.5,24z"
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
  name: "LuxIconSearch",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="search">
      <lux-icon-search></lux-icon-search>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="search">
      <lux-icon-search></lux-icon-search>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="search" icon-color="red">
      <lux-icon-search></lux-icon-search>
    </lux-icon-base>
  </div>
  ```
</docs>
