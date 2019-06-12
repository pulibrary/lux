<template>
  <g>
    <g id="Outline_Icons_1_">
      <g id="Outline_Icons">
        <g>
          <circle
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            cx="11.5"
            cy="11.5"
            r="11"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="15.742"
            y1="7.258"
            x2="7.257"
            y2="15.743"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="15.742"
            y1="15.743"
            x2="7.257"
            y2="7.258"
          />
        </g>
      </g>
      <g id="New_icons_1_"></g>
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
  name: "LuxIconDenied",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="denied">
      <lux-icon-denied></lux-icon-denied>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="denied">
      <lux-icon-denied></lux-icon-denied>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="denied" icon-color="rgb(44, 110, 175)">
      <lux-icon-denied></lux-icon-denied>
    </lux-icon-base>
  </div>
  ```
</docs>
