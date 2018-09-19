<template>
  <g>
    <path d="M3.5 18H0v5.5a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5V18H3.5zM.5 0a.5.5 0 0 0-.5.5V17h3.168c.521-1.198 2.367-5 4.832-5 2.007 0 3.668 1.664 4.445 2.602l2.638-4.522c.864-1.481 3.049-1.435 3.828.124L22.309 17H24V.5a.5.5 0 0 0-.5-.5H.5zm9 9h-3c-1.102 0-2-.896-2-2a2.009 2.009 0 0 1 2.176-1.991A2.976 2.976 0 0 1 9.5 3c1.654 0 3 1.346 3 3s-1.346 3-3 3z"/>
    <path fill="none" d="M0 0h24v24H0z"/>
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#!/Adding%20Icons).
 */
export default {
  name: "PulIconPicture",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
  <pul-icon-base
    width="12"
    height="12"
    icon-name="picture"
  ><pul-icon-picture /></pul-icon-base>
  <!-- or you can use the default, which is 18 -->
  <pul-icon-base icon-name="picture"><pul-icon-picture /></pul-icon-base>
  <!-- or make it a little bigger too, with colors :) -->
  <pul-icon-base
    width="30"
    height="30"
    icon-name="picture"
    icon-color="rgb(44, 110, 175)"
  ><pul-icon-picture /></pul-icon-base>
  </div>
  ```
</docs>
