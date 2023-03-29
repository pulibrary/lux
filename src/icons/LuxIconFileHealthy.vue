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
      d="M20.276,12.5c-0.95,0-2.07,0.491-2.776,1.784c-0.706-1.293-1.826-1.784-2.776-1.784c-1.585,0-3.224,1.323-3.224,3.537   c0,3.181,5.473,7.198,5.706,7.367c0.088,0.063,0.19,0.096,0.294,0.096s0.206-0.032,0.294-0.096   c0.233-0.169,5.706-4.187,5.706-7.367C23.5,13.823,21.861,12.5,20.276,12.5z M17.5,22.376c-1.63-1.246-5-4.253-5-6.339   c0-1.588,1.131-2.537,2.224-2.537c1.086,0,1.942,0.864,2.29,2.313c0.109,0.449,0.863,0.449,0.973,0   c0.348-1.448,1.204-2.313,2.29-2.313c1.093,0,2.224,0.949,2.224,2.537C22.5,18.121,19.13,21.13,17.5,22.376z"
    ></path>
    <path
      d="M1,1h10v4.5C11,5.776,11.224,6,11.5,6H16v5h1V5.5c0-0.066-0.014-0.132-0.039-0.192c-0.025-0.062-0.063-0.115-0.108-0.162   l-4.998-4.999c-0.046-0.045-0.101-0.082-0.162-0.107C11.632,0.014,11.566,0,11.5,0h-11C0.224,0,0,0.224,0,0.5v21   C0,21.776,0.224,22,0.5,22h11.979v-1H1V1z M12,1.707L15.293,5H12V1.707z"
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
  name: "LuxIconFileHealthy",
  status: "ready",
  release: "4.1.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Healthy File">
      <lux-icon-file-healthy></lux-icon-file-healthy>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Healthy File">
      <lux-icon-file-healthy></lux-icon-file-healthy>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Healthy File" icon-color="green">
      <lux-icon-file-healthy></lux-icon-file-healthy>
    </lux-icon-base>
  </div>
  ```
</docs>
