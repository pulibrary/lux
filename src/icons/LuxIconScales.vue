<template>
  <g>
    <g id="Outline_Icons">
      <g>
        <line
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="11.5"
          y1="6.438"
          x2="11.5"
          y2="21.52"
        />

        <line
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="8.581"
          y1="21.52"
          x2="14.392"
          y2="21.52"
        />

        <circle
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          cx="11.5"
          cy="4.979"
          r="1.459"
        />
        <g>
          <polyline
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            points="
				0.501,12.498 4,4.5 7.487,12.498 			"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="10.106"
            y1="4.5"
            x2="2.5"
            y2="4.5"
          />
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M7.5,12.5
				C7.5,14.433,5.933,16,4,16s-3.5-1.567-3.5-3.5H7.5z"
          />
        </g>
        <g>
          <polyline
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            points="
				22.499,12.498 19,4.5 15.513,12.498 			"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="12.894"
            y1="4.5"
            x2="20.5"
            y2="4.5"
          />
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M15.5,12.5
				c0,1.933,1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5H15.5z"
          />
        </g>
      </g>
    </g>
    <g id="Invisibla_Shape">
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
  name: "LuxIconScales",
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
    icon-name="scales"
  ><lux-icon-scales /></lux-icon-base>
  <!-- or you can use the default, which is 18 -->
  <lux-icon-base icon-name="scales"><lux-icon-scales /></lux-icon-base>
  <!-- or make it a little bigger too, with colors :) -->
  <lux-icon-base
    width="30"
    height="30"
    icon-name="scales"
    icon-color="rgb(44, 110, 175)"
  ><lux-icon-scales /></lux-icon-base>
  </div>
  ```
</docs>
