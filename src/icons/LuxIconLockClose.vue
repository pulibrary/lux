<template>
  <g>
    <path
      d="M12,14c-0.552,0-1,0.449-1,1c0,0.365,0.207,0.672,0.5,0.847V18.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-2.653   C12.793,15.672,13,15.365,13,15C13,14.449,12.552,14,12,14z"
    ></path>
    <path
      d="M20.5,9H18V6c0-3.309-2.691-6-6-6S6,2.691,6,6v3H3.5C3.224,9,3,9.224,3,9.5v14C3,23.776,3.224,24,3.5,24h17   c0.276,0,0.5-0.224,0.5-0.5v-14C21,9.224,20.776,9,20.5,9z M7,6c0-2.757,2.243-5,5-5s5,2.243,5,5v3H7V6z M20,23H4V10h2.5h11H20V23z   "
    ></path>
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconLockClose",
  status: "ready",
  release: "4.1.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Closed Lock">
      <lux-icon-lock-close></lux-icon-lock-close>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Closed Lock">
      <lux-icon-lock-close></lux-icon-lock-close>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Closed Lock" icon-color="red">
      <lux-icon-lock-close></lux-icon-lock-close>
    </lux-icon-base>
  </div>
  ```
</docs>
