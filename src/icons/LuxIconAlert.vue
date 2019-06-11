<template>
  <g>
    <g id="Outline_Icons_1_">
      <g id="Outline_Icons">
        <g>
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M22.498,12.31
				c0.105,6.075-4.923,11.086-10.998,11.192c-6.074,0.104-10.893-4.734-10.998-10.81C0.396,6.619,5.426,1.606,11.5,1.502
				C17.574,1.396,22.393,6.236,22.498,12.31z"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="11.5"
            y1="14"
            x2="11.5"
            y2="7"
          />
          <path
            fill="none"
            stroke="#000000"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M12,17.5c0,0.276-0.224,0.5-0.5,0.5l0,0
				c-0.276,0-0.5-0.224-0.5-0.5l0,0c0-0.276,0.224-0.5,0.5-0.5l0,0C11.776,17,12,17.224,12,17.5L12,17.5z"
          />
        </g>
      </g>
      <g id="New_icons_1_"> </g>
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
  name: "LuxIconAlert",
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
    icon-name="alert"
  ><lux-icon-alert /></lux-icon-base>
  <!-- or you can use the default, which is 18 -->
  <lux-icon-base icon-name="alert"><lux-icon-alert /></lux-icon-base>
  <!-- or make it a little bigger too, with colors :) -->
  <lux-icon-base
    width="30"
    height="30"
    icon-name="alert"
    icon-color="rgb(44, 110, 175)"
  ><lux-icon-alert /></lux-icon-base>
  </div>
  ```
</docs>
