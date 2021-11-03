<template functional>
  <g>
    <path class="st0" d="M23.5,0.5h-23l10,12.1v10.9l3-3v-7.9L23.5,0.5z" />
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconFilter",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="filter">
      <lux-icon-filter></lux-icon-filter>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="filter">
      <lux-icon-filter></lux-icon-filter>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="filter" icon-color="red">
      <lux-icon-filter></lux-icon-filter>
    </lux-icon-base>
  </div>
  ```
</docs>
