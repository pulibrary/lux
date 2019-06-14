<template>
  <g>
    <g id="Outline_Icons_1_">
      <g id="Outline_Icons"></g>
      <g id="New_icons_1_">
        <g>
          <polyline
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            points="
            3.5,11.5 3.5,22.5 20.5,22.5 20.5,11 			"
          />
          <polyline
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            points="0.5,11
            12,0.5 23.5,11 			"
          />
          <polyline
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            points="16,1.5
            19.5,1.5 19.5,5 			"
          />

          <circle
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            cx="12"
            cy="11.5"
            r="3"
          />
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M17.34,19.5H6.66
            c0-2.949,2.391-5,5.34-5C14.95,14.5,17.34,16.551,17.34,19.5z"
          />
        </g>
      </g>
    </g>
    <g id="Invisible_Shape">
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
  name: "LuxIconUserHome",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="user-home">
      <lux-icon-user-home></lux-icon-user-home>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="user-home">
      <lux-icon-user-home></lux-icon-user-home>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30"  height="30" icon-name="user-home" icon-color="rgb(44, 110, 175)">
      <lux-icon-user-home></lux-icon-user-home>
    </lux-icon-base>
  </div>
  ```
</docs>
