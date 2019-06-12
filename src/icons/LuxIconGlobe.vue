<template>
  <g>
    <g stroke-linecap="round" stroke-width="1" stroke="#000" fill="none" stroke-linejoin="round">
      <path
        d="M20.1317,3.86827c4.49103,4.49103 4.49103,11.7724 0,16.2635c-4.49103,4.49103 -11.7724,4.49103 -16.2635,0c-4.49103,-4.49103 -4.49103,-11.7724 0,-16.2635c4.49103,-4.49103 11.7724,-4.49103 16.2635,0"
      ></path>
      <path
        d="M20.5,4.255c0,0 -0.5,2.745 -2.5,3.745c-2,-0.5 -4,1 -3.5,1c0.5,0 1,2 1,2c0.5,0.5 1.5,0 1.5,0c1.25,1.25 -2,3.5 -2,4c0,0.5 1.25,0.75 0.5,1.5c-0.75,0.75 -1.5,1 -1.5,1c0,2.5 -2.5,2.5 -3,2.5c-0.5,0 -1.5,-2 -1.5,-2.5c0,-0.5 0.5,-1 0.5,-1.5c0,-0.5 -1,-1.5 -1,-1.5c0,-2 -1.5,-1.5 -3,-1.5c-1.5,0 -1.5,-2 -1.5,-2c0,0 0,-3.5 2.5,-4c2.5,-0.5 2.5,0.5 2.5,0.5c1,1 3,0 4,0c0,0 0.5,-3.5 -0.5,-3c-1,0.5 -1.896,0.114 -2,-1c-0.146,-1.562 4.363,-2.5 4.363,-2.5"
      ></path>
    </g>
    <path fill="none" d="M0,0h24v24h-24Z"></path>
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconGlobe",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="globe">
      <lux-icon-globe></lux-icon-globe>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="globe">
      <lux-icon-globe></lux-icon-globe>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="globe" icon-color="rgb(44, 110, 175)">
      <lux-icon-globe></lux-icon-globe>
    </lux-icon-base>
  </div>
  ```
</docs>
