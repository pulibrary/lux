<template>
  <g>
    <path
      d="M12,21H2.5C1.673,21,1,20.327,1,19.5V4h3v1H2.5C2.224,5,2,5.224,2,5.5v14C2,19.776,2.224,20,2.5,20h8   c0.276,0,0.5-0.224,0.5-0.5S10.776,19,10.5,19H3V6h1v0.5C4,6.776,4.224,7,4.5,7h8C12.776,7,13,6.776,13,6.5V6h1v5   c0,0.276,0.224,0.5,0.5,0.5S15,11.276,15,11V5.5C15,5.224,14.776,5,14.5,5H13V4h3v7.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5   v-8C17,3.224,16.776,3,16.5,3H13V2.5C13,2.224,12.776,2,12.5,2h-1.545C10.766,0.963,9.98,0,8.5,0S6.234,0.963,6.045,2H4.5   C4.224,2,4,2.224,4,2.5V3H0.5C0.224,3,0,3.224,0,3.5v16C0,20.879,1.122,22,2.5,22H12c0.276,0,0.5-0.224,0.5-0.5S12.276,21,12,21z    M5,3h1.5C6.776,3,7,2.776,7,2.5C7,2.347,7.042,1,8.5,1S10,2.347,10,2.5C10,2.776,10.224,3,10.5,3H12v3H5V3z"
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
      d="M20.414,13.001c-0.951,0-2.071,0.491-2.777,1.784c-0.706-1.293-1.826-1.784-2.777-1.784c-1.584,0-3.223,1.322-3.223,3.536   c0,3.181,5.473,7.198,5.706,7.367C17.43,23.969,17.534,24,17.637,24s0.207-0.031,0.294-0.096c0.233-0.169,5.706-4.187,5.706-7.367   C23.637,14.323,21.998,13.001,20.414,13.001z M17.637,22.876c-1.63-1.246-5-4.253-5-6.339c0-1.588,1.13-2.536,2.223-2.536   c1.086,0,1.942,0.864,2.291,2.313c0.108,0.449,0.864,0.449,0.973,0c0.348-1.448,1.204-2.313,2.291-2.313   c1.093,0,2.223,0.948,2.223,2.536C22.637,18.621,19.267,21.63,17.637,22.876z"
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
  name: "LuxIconReportHealthy",
  status: "ready",
  release: "4.1.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Healthy Report">
      <lux-icon-report-healthy></lux-icon-report-healthy>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Healthy Report">
      <lux-icon-report-healthy></lux-icon-report-healthy>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Healthy Report" icon-color="green">
      <lux-icon-report-healthy></lux-icon-report-healthy>
    </lux-icon-base>
  </div>
  ```
</docs>
