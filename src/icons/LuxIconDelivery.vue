<template>
  <g>
    <path
      d="M23.9,16.2l-2.5-4C21.3,12.1,21.2,12,21,12h-4V9.5C17,9.2,16.8,9,16.5,9H11v1h5v9l-4.8,0c-0.3-0.6-1-1-1.7-1
  		s-1.4,0.4-1.7,1H6v-7H5v7.5C5,19.8,5.2,20,5.5,20h2c0,1.1,0.9,2,2,2s2-0.9,2-2l5,0c0,0,0.1,0,0.1,0h0.9c0,0,0,0,0,0
  		c0,1.1,0.9,2,2,2s2-0.9,2-2c0,0,0,0,0,0h2c0.3,0,0.5-0.2,0.5-0.5v-3C24,16.4,24,16.3,23.9,16.2z M9.5,21c-0.6,0-1-0.4-1-1
  		s0.4-1,1-1s1,0.4,1,1S10.1,21,9.5,21z M20.7,13l1.9,3H17v-3H20.7z M19.5,21c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S20.1,21,19.5,21z
  		 M21.2,19c-0.4-0.6-1-1-1.7-1c-0.7,0-1.4,0.4-1.7,1H17v-2h6v2L21.2,19L21.2,19z"
    />
    <path
      d="M5,11c2.7,0,5-2.3,5-5S7.7,1,5,1S0,3.3,0,6S2.3,11,5,11z M5,2c2.2,0,4,1.8,4,4s-1.8,4-4,4S1,8.2,1,6S2.8,2,5,2z"
    />
    <path
      d="M4.5,7h2C6.8,7,7,6.8,7,6.5S6.8,6,6.5,6H5V3.5C5,3.2,4.8,3,4.5,3S4,3.2,4,3.5v3C4,6.8,4.2,7,4.5,7z"
    />
    <path
      d="M3.5,14l-3,0h0C0.2,14,0,14.2,0,14.5C0,14.8,0.2,15,0.5,15l3,0h0C3.8,15,4,14.8,4,14.5C4,14.2,3.8,14,3.5,14z"
    />
    <path
      d="M3.5,16L2,16c0,0,0,0,0,0c-0.3,0-0.5,0.2-0.5,0.5S1.7,17,2,17l1.5,0c0,0,0,0,0,0C3.8,17,4,16.8,4,16.5S3.8,16,3.5,16z"
    />
    <path
      d="M3.5,18L3,18c-0.3,0-0.5,0.2-0.5,0.5C2.5,18.8,2.7,19,3,19l0.5,0c0,0,0,0,0,0C3.8,19,4,18.8,4,18.5C4,18.2,3.8,18,3.5,18z"
    />
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconDelivery",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="Delivery">
      <lux-icon-delivery></lux-icon-delivery>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="Delivery">
      <lux-icon-delivery></lux-icon-delivery>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="Delivery" icon-color="red">
      <lux-icon-delivery></lux-icon-delivery>
    </lux-icon-base>
  </div>
  ```
</docs>
