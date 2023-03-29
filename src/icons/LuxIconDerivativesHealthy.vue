<template>
  <g>
    <path
      d="M14.39,14.83a.44.44,0,0,0,.25.08.46.46,0,0,0,.25-.08c.23-.17,5.73-4.17,5.73-7.31a3.29,3.29,0,0,0-3.18-3.46,3.16,3.16,0,0,0-2.8,1.87,3.16,3.16,0,0,0-2.8-1.87A3.28,3.28,0,0,0,8.66,7.52C8.66,10.66,14.15,14.66,14.39,14.83ZM11.84,4.91c1.13,0,2,.89,2.38,2.37a.44.44,0,0,0,.83,0c.36-1.48,1.26-2.37,2.39-2.37a2.45,2.45,0,0,1,2.32,2.61c0,2.13-3.49,5.2-5.12,6.43C13,12.72,9.51,9.65,9.51,7.52A2.45,2.45,0,0,1,11.84,4.91Z"
      transform="translate(-0.46 -0.47)"
    />
    <path
      d="M23.21.47H6.12A.42.42,0,0,0,5.7.9v3H3.56a.43.43,0,0,0-.43.42V20.54a.43.43,0,0,0,.43.43H19.79a.43.43,0,0,0,.43-.43V18.41h3a.42.42,0,0,0,.42-.43V.9A.42.42,0,0,0,23.21.47ZM19.36,20.12H4V4.74H5.7V18a.42.42,0,0,0,.42.43H19.36Zm3.42-2.57H6.55V1.32H22.78Z"
      transform="translate(-0.46 -0.47)"
    />
    <polygon points="3.05 7.05 0.5 7.05 0.5 22.38 15.68 22.38 15.68 20.5 3.1 20.5 3.05 7.05" />
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconDerivativesHealthy",
  status: "ready",
  release: "4.1.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Healthy Derivatives">
      <lux-icon-derivatives-healthy></lux-icon-derivatives-healthy>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Healthy Derivatives">
      <lux-icon-derivatives-healthy></lux-icon-derivatives-healthy>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Healthy Derivatives" icon-color="green">
      <lux-icon-derivatives-healthy></lux-icon-derivatives-healthy>
    </lux-icon-base>
  </div>
  ```
</docs>
