<template>
  <g>
    <path
      d="M23.21.47H6.12A.42.42,0,0,0,5.7.9v3H3.56a.43.43,0,0,0-.43.42V20.54a.43.43,0,0,0,.43.43H19.79a.43.43,0,0,0,.43-.43V18.41h3a.42.42,0,0,0,.42-.43V.9A.42.42,0,0,0,23.21.47ZM19.36,20.12H4V4.74H5.7V18a.42.42,0,0,0,.42.43H19.36Zm3.42-2.57H6.55V1.32H22.78Z"
      transform="translate(-0.46 -0.47)"
    />
    <polygon
      class="cls-1"
      points="3.05 7.05 0.5 7.05 0.5 22.38 15.68 22.38 15.68 20.5 3.1 20.5 3.05 7.05"
    />
    <path
      class="cls-2"
      d="M14.38,7.56v4.26a.28.28,0,0,0,.56,0V7.56a.28.28,0,0,0-.56,0Z"
      transform="translate(-0.46 -0.47)"
    />
    <path
      class="cls-2"
      d="M21,15.35,14.91,3.18a.3.3,0,0,0-.5,0L8.29,15.42a.29.29,0,0,0,0,.27.28.28,0,0,0,.23.13H20.79a.28.28,0,0,0,.27-.28A.26.26,0,0,0,21,15.35ZM9,15.26,14.66,3.93l5.67,11.33Z"
      transform="translate(-0.46 -0.47)"
    />
    <circle cx="14.2" cy="13.12" r="0.56" />
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconDerivativesUnhealthy",
  status: "ready",
  release: "4.1.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Unhealthy Derivatives">
      <lux-icon-derivatives-unhealthy></lux-icon-derivatives-unhealthy>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Unhealthy Derivatives">
      <lux-icon-derivatives-unhealthy></lux-icon-derivatives-unhealthy>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Unhealthy Derivatives" icon-color="red">
      <lux-icon-derivatives-unhealthy></lux-icon-derivatives-unhealthy>
    </lux-icon-base>
  </div>
  ```
</docs>
