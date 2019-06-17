<template>
  <g>
    <g id="Outline_Icons_1_">
      <g id="Outline_Icons">
        <g>
          <polyline
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            points="
				1.5,8.994 4.5,13.494 8,9.494 			"
          />
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M14,21.5
				c5.247,0,9.5-4.252,9.5-9.5c0-5.246-4.253-9.5-9.5-9.5S4.5,6.754,4.5,12v1.494"
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
  name: "LuxIconRefresh",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="refresh">
      <lux-icon-refresh></lux-icon-refresh>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="refresh">
      <lux-icon-refresh></lux-icon-refresh>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="refresh" icon-color="rgb(44, 110, 175)">
      <lux-icon-refresh></lux-icon-refresh>
    </lux-icon-base>
  </div>
  ```
</docs>
