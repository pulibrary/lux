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
          d="M8.496,18.393
          C6.454,17.57,3.574,17,0.5,17V0.5c5.851,0,11,1.566,11,3.5c0-1.934,5.148-3.5,11-3.5V17c-0.336,0-1,0.016-1,0.016"
        />

        <line
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="11.5"
          y1="4"
          x2="11.5"
          y2="4.5"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M9,6.24
          C7.39,5.623,5.113,5.177,2.5,5"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M7.021,8.646
          C5.71,8.337,4.174,8.113,2.5,8"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M5.936,11.419
          C4.888,11.227,3.731,11.083,2.5,11"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M6.088,14.447
          C5,14.24,3.791,14.088,2.5,14"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M16.541,5.521
          C17.722,5.277,19.06,5.098,20.5,5"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M19.422,8.09
          C19.774,8.055,20.134,8.024,20.5,8"
        />
        <circle
          fill="none"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          cx="13.5"
          cy="12.5"
          r="6"
        />

        <line
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="17.766"
          y1="16.766"
          x2="23.5"
          y2="22.5"
        />
        <polyline
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="
          11.5,12.5 11.5,10.5 15.5,10.5 15.5,12.5 		"
        />

        <line
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="13.5"
          y1="10.5"
          x2="13.5"
          y2="15.5"
        />

        <line
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="12"
          y1="15.5"
          x2="15"
          y2="15.5"
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
  name: "LuxIconResearch",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="research">
      <lux-icon-research></lux-icon-research>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="research">
      <lux-icon-research></lux-icon-research>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30"  height="30" icon-name="research" icon-color="rgb(44, 110, 175)">
      <lux-icon-research></lux-icon-research>
    </lux-icon-base>
  </div>
  ```
</docs>
