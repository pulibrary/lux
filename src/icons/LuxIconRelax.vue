<template>
  <g>
    <g>
      <path
        d="M12,24C5.4,24,0,18.6,0,12C0,5.4,5.4,0,12,0c6.6,0,12,5.4,12,12C24,18.6,18.6,24,12,24z M12,1C5.9,1,1,5.9,1,12
        s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1z"
      />
    </g>
    <g>
      <path
        d="M12,21c-4.4,0-8-3.6-8-8c0-0.3,0.2-0.5,0.5-0.5S5,12.7,5,13c0,3.9,3.1,7,7,7c3.9,0,7-3.1,7-7c0-0.3,0.2-0.5,0.5-0.5
        S20,12.7,20,13C20,17.4,16.4,21,12,21z"
      />
    </g>
    <g>
      <path
        d="M16.5,10.5C15.3,10.5,14,9.6,14,8c0-0.3,0.2-0.5,0.5-0.5S15,7.7,15,8c0,1.6,1.8,1.8,2.5,1.1C17.8,8.8,18,8.5,18,8
        c0-0.3,0.2-0.5,0.5-0.5S19,7.7,19,8c0,1-0.4,1.5-0.8,1.9C17.8,10.3,17.1,10.5,16.5,10.5z"
      />
    </g>
    <g>
      <path
        d="M7.5,10.5c-0.6,0-1.3-0.2-1.7-0.6C5.4,9.5,5,9,5,8c0-0.3,0.2-0.5,0.5-0.5S6,7.7,6,8c0,0.5,0.2,0.8,0.5,1.1
        C7.2,9.8,9,9.6,9,8c0-0.3,0.2-0.5,0.5-0.5S10,7.7,10,8C10,9.6,8.7,10.5,7.5,10.5z"
      />
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
  name: "LuxIconRelax",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="relax">
      <lux-icon-relax></lux-icon-relax>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="relax">
      <lux-icon-relax></lux-icon-relax>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="relax" icon-color="red">
      <lux-icon-relax></lux-icon-relax>
    </lux-icon-base>
  </div>
  ```
</docs>
