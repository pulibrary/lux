<template>
  <g>
    <path
      d="M23.5,1h-23C0.2,1,0,1.2,0,1.5v16C0,17.8,0.2,18,0.5,18H7v3.5c0,0.2,0.1,0.4,0.3,0.5c0.1,0,0.1,0,0.2,0
  		c0.1,0,0.3-0.1,0.4-0.1l3.9-3.9h11.8c0.3,0,0.5-0.2,0.5-0.5v-16C24,1.2,23.8,1,23.5,1z M23,17H11.5c-0.1,0-0.3,0.1-0.4,0.1L8,20.3
  		v-2.8C8,17.2,7.8,17,7.5,17H1V2h22V17z"
    />
    <path
      d="M9.5,8C9.8,8,10,7.8,10,7.5C10,6.1,11.1,5,12.5,5S15,6.1,15,7.5S13.9,10,12.5,10c-0.3,0-0.5,0.2-0.5,0.5v1
  		c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5V11c1.7-0.2,3-1.7,3-3.5C16,5.6,14.4,4,12.5,4S9,5.6,9,7.5C9,7.8,9.2,8,9.5,8z"
    />
    <circle cx="12.5" cy="14" r="1" />
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconQuestion",
  status: "ready",
  release: "3.1.1",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="question">
      <lux-icon-question></lux-icon-question>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="question">
      <lux-icon-question></lux-icon-question>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="question" icon-color="red">
      <lux-icon-question></lux-icon-question>
    </lux-icon-base>
  </div>
  ```
</docs>
