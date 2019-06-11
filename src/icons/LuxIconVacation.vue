<template>
  <g>
    <g id="Outline_Icons">
      <g>
        <path
          fill="none"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M18.41,23.5c0-3.5-5.229-4.5-8.955-4.5
			C5.74,19,0.5,20,0.5,23.5H18.41z"
        />
        <polyline
          fill="none"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="6.078,19.276 12,8.5
			11.518,19.101 		"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M12,8.5C8.5,11,5,11,0.955,10.784
			C3,6,9.5,6.5,12,7.5V8.5z"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M4.5,4.5C8.102,2.1,12,5,12,7.5L4.5,4.5z"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M12,8.5c2.5,3,7,2.5,11.045,2.284
			C21,6,14.5,6.5,12,7.5V8.5z"
        />
        <path
          fill="none"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M19.5,4.5C15.898,2.1,12,5,12,7.5L19.5,4.5
			z"
        />

        <line
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="10"
          y1="17"
          x2="11.596"
          y2="17"
        />

        <line
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          x1="10.5"
          y1="15"
          x2="11.69"
          y2="15"
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
  name: "LuxIconVacation",
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
    icon-name="vacation"
  ><lux-icon-vacation /></lux-icon-base>
  <!-- or you can use the default, which is 18 -->
  <lux-icon-base icon-name="vacation"><lux-icon-vacation /></lux-icon-base>
  <!-- or make it a little bigger too, with colors :) -->
  <lux-icon-base
    width="30"
    height="30"
    icon-name="vacation"
    icon-color="rgb(44, 110, 175)"
  ><lux-icon-vacation /></lux-icon-base>
  </div>
  ```
</docs>
