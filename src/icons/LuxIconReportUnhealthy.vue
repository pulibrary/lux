<template>
  <g>
    <path
      d="M2.5,5C2.224,5,2,5.224,2,5.5v14C2,19.776,2.224,20,2.5,20H11c0.276,0,0.5-0.224,0.5-0.5S11.276,19,11,19H3V6h1v0.5   C4,6.776,4.224,7,4.5,7h8C12.776,7,13,6.776,13,6.5V6h1v7c0,0.276,0.224,0.5,0.5,0.5S15,13.276,15,13V5.5C15,5.224,14.776,5,14.5,5   H13V4h3v6c0,0.276,0.224,0.5,0.5,0.5S17,10.276,17,10V3.5C17,3.224,16.776,3,16.5,3H13V2.5C13,2.224,12.776,2,12.5,2h-1.545   C10.766,0.963,9.98,0,8.5,0S6.234,0.963,6.045,2H4.5C4.224,2,4,2.224,4,2.5V3H0.5C0.224,3,0,3.224,0,3.5v16   C0,20.879,1.122,22,2.5,22H10c0.276,0,0.5-0.224,0.5-0.5S10.276,21,10,21H2.5C1.673,21,1,20.327,1,19.5V4h3v1H2.5z M5,3h1.5   C6.776,3,7,2.776,7,2.5C7,2.347,7.042,1,8.5,1S10,2.347,10,2.5C10,2.776,10.224,3,10.5,3H12v3H5V3z"
    ></path>
    <path
      d="M10.5,9h-5C5.224,9,5,9.224,5,9.5S5.224,10,5.5,10h5c0.276,0,0.5-0.224,0.5-0.5S10.776,9,10.5,9z"
    ></path>
    <path
      d="M10.5,11h-5C5.224,11,5,11.224,5,11.5S5.224,12,5.5,12h5c0.276,0,0.5-0.224,0.5-0.5S10.776,11,10.5,11z"
    ></path>
    <path
      d="M11,13.5c0-0.276-0.224-0.5-0.5-0.5h-5C5.224,13,5,13.224,5,13.5S5.224,14,5.5,14h5C10.776,14,11,13.776,11,13.5z"
    ></path>
    <path
      d="M5.5,15C5.224,15,5,15.224,5,15.5S5.224,16,5.5,16h3C8.776,16,9,15.776,9,15.5S8.776,15,8.5,15H5.5z"
    ></path>
    <path
      d="M23.892,23.166l-5.945-11.89c-0.17-0.338-0.725-0.338-0.895,0l-6,12c-0.078,0.155-0.069,0.339,0.022,0.486   S11.327,24,11.5,24h12c0.007,0,0.013,0,0.02,0c0.276,0,0.5-0.224,0.5-0.5C24.02,23.371,23.972,23.254,23.892,23.166z M12.309,23   L17.5,12.619L22.691,23H12.309z"
    ></path>
    <path
      d="M17,16.409v3.272c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-3.272c0-0.276-0.224-0.5-0.5-0.5S17,16.133,17,16.409z"
    ></path>
    <circle cx="17.5" cy="21.318" r="0.545"></circle>
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconReportUnhealthy",
  status: "ready",
  release: "4.1.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Unhealthy Report">
      <lux-icon-report-unhealthy></lux-icon-report-unhealthy>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Unhealthy Report">
      <lux-icon-report-unhealthy></lux-icon-report-unhealthy>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Unhealthy Report" icon-color="red">
      <lux-icon-report-unhealthy></lux-icon-report-unhealthy>
    </lux-icon-base>
  </div>
  ```
</docs>
