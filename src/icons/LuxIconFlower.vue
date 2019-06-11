<template>
  <g>
    <g id="Outline_Icons">
      <g>
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M14.502,3.533
			C15.733,4.534,16.5,5.941,16.5,7.5c0,3.037-2.91,5.5-6.5,5.5s-6.5-2.463-6.5-5.5c0-1.56,0.768-2.968,2-3.969"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M12.999,1.835
			C13.821,2.381,14.333,3.148,14.333,4c0,1.657-1.939,3-4.333,3S5.667,5.657,5.667,4c0-0.851,0.511-1.619,1.333-2.165"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M10.434,7
			c0,0,3.066,0.5,3.066,3v2"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M8,6.5
			c0,0,0.376-1.127,1.242-2"
        />

        <ellipse
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          cx="10.005"
          cy="2.5"
          rx="3.005"
          ry="2"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M10.006,4.5
			C11.5,4.5,12.162,2,9,2"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M10.5,13
			c0,0,0,3.5,0,10.5"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M16.178,17.23
			c0,0-0.724,2.902-1.867,3.676c-1.145,0.773-2.707,0.86-3.523-0.294C10,19.5,11.077,18.025,12.5,18.5
			C14,19,16.178,17.23,16.178,17.23z"
        />
      </g>
    </g>
    <g id="invisible_shape">
      <rect fill="none" width="24" height="24" />
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
  name: "LuxIconFlower",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
  <lux-icon-base
    width="12"
    height="12"
    icon-name="flower"
  ><lux-icon-flower /></lux-icon-base>
  <!-- or you can use the default, which is 18 -->
  <lux-icon-base icon-name="flower"><lux-icon-flower /></lux-icon-base>
  <!-- or make it a little bigger too, with colors :) -->
  <lux-icon-base
    width="30"
    height="30"
    icon-name="flower"
    icon-color="rgb(44, 110, 175)"
  ><lux-icon-flower /></lux-icon-base>
  </div>
  ```
</docs>
