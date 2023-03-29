<template>
  <g>
    <path
      d="M3.5,9C3.776,9,4,8.776,4,8.5v-2C4,6.224,3.776,6,3.5,6S3,6.224,3,6.5v2C3,8.776,3.224,9,3.5,9z"
    ></path>
    <path
      d="M10,6.5C10,6.224,9.776,6,9.5,6S9,6.224,9,6.5v2C9,8.776,9.224,9,9.5,9S10,8.776,10,8.5V6.5z"
    ></path>
    <path
      d="M7.5,11C7.224,11,7,11.224,7,11.5v2C7,13.776,7.224,14,7.5,14S8,13.776,8,13.5v-2C8,11.224,7.776,11,7.5,11z"
    ></path>
    <path
      d="M10,11.5c0-0.276-0.224-0.5-0.5-0.5S9,11.224,9,11.5v2C9,13.776,9.224,14,9.5,14s0.5-0.224,0.5-0.5V11.5z"
    ></path>
    <path
      d="M8,8.5v-2C8,6.224,7.776,6,7.5,6h-2C5.224,6,5,6.224,5,6.5v2C5,8.776,5.224,9,5.5,9h2C7.776,9,8,8.776,8,8.5z M7,8H6V7h1V8   z"
    ></path>
    <path
      d="M6,11.5C6,11.224,5.776,11,5.5,11h-2C3.224,11,3,11.224,3,11.5v2C3,13.776,3.224,14,3.5,14h2C5.776,14,6,13.776,6,13.5   V11.5z M5,13H4v-1h1V13z"
    ></path>
    <path
      d="M7.5,19h2c0.276,0,0.5-0.224,0.5-0.5v-2c0-0.276-0.224-0.5-0.5-0.5h-2C7.224,16,7,16.224,7,16.5v2   C7,18.776,7.224,19,7.5,19z M8,17h1v1H8V17z"
    ></path>
    <path
      d="M3,16.5v2C3,18.776,3.224,19,3.5,19S4,18.776,4,18.5v-2C4,16.224,3.776,16,3.5,16S3,16.224,3,16.5z"
    ></path>
    <path
      d="M5.5,16C5.224,16,5,16.224,5,16.5v2C5,18.776,5.224,19,5.5,19S6,18.776,6,18.5v-2C6,16.224,5.776,16,5.5,16z"
    ></path>
    <path
      d="M23.892,23.166l-5.944-11.89c-0.17-0.338-0.725-0.338-0.895,0l-6,12c-0.077,0.155-0.069,0.339,0.021,0.486   C11.166,23.91,11.327,24,11.5,24h12c0.007,0,0.015,0,0.02,0c0.276,0,0.5-0.224,0.5-0.5C24.02,23.371,23.972,23.254,23.892,23.166z    M12.309,23L17.5,12.618L22.691,23H12.309z"
    ></path>
    <path
      d="M17,16.409v3.272c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-3.272c0-0.276-0.224-0.5-0.5-0.5S17,16.133,17,16.409z"
    ></path>
    <circle cx="17.5" cy="21.5" r="0.5"></circle>
    <path
      d="M11.5,6H16v4h1V5.5c0-0.066-0.014-0.132-0.039-0.192c-0.025-0.062-0.063-0.115-0.108-0.162l-4.998-4.999   c-0.046-0.045-0.101-0.082-0.162-0.107C11.632,0.014,11.566,0,11.5,0h-11C0.224,0,0,0.224,0,0.5v21C0,21.776,0.224,22,0.5,22H11v-1   H1V1h10v4.5C11,5.776,11.224,6,11.5,6z M12,1.707L15.293,5H12V1.707z"
    ></path>
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconFileUnhealthy",
  status: "ready",
  release: "4.1.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Unhealthy File">
      <lux-icon-file-unhealthy></lux-icon-file-unhealthy>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Unhealthy File">
      <lux-icon-file-unhealthy></lux-icon-file-unhealthy>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Unhealthy File" icon-color="red">
      <lux-icon-file-unhealthy></lux-icon-file-unhealthy>
    </lux-icon-base>
  </div>
  ```
</docs>
