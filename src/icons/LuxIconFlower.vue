<template>
  <g>
    <g>
      <path
        d="M10,13.5c-3.9,0-7-2.7-7-6c0-1.7,0.8-3.2,2.2-4.4C5.4,3,5.7,3,5.9,3.2C6.1,3.4,6,3.7,5.8,3.9C4.6,4.9,4,6.1,4,7.5
        c0,2.8,2.7,5,6,5s6-2.2,6-5c0-1.4-0.6-2.6-1.8-3.6c-0.2-0.2-0.2-0.5-0.1-0.7C14.3,3,14.6,3,14.8,3.1C16.2,4.3,17,5.8,17,7.5
        C17,10.8,13.9,13.5,10,13.5z"
      />
    </g>
    <g>
      <path
        d="M10,7.5C7.3,7.5,5.2,5.9,5.2,4c0-1,0.6-1.9,1.6-2.6C7,1.3,7.3,1.3,7.4,1.6c0.2,0.2,0.1,0.5-0.1,0.7
        C6.6,2.7,6.2,3.3,6.2,4c0,1.4,1.8,2.5,3.8,2.5s3.8-1.1,3.8-2.5c0-0.7-0.4-1.3-1.1-1.7c-0.2-0.2-0.3-0.5-0.1-0.7
        c0.2-0.2,0.5-0.3,0.7-0.1c1,0.7,1.6,1.6,1.6,2.6C14.8,5.9,12.7,7.5,10,7.5z"
      />
    </g>
    <g>
      <path
        d="M13.5,12.5c-0.3,0-0.5-0.2-0.5-0.5v-2c0-2-2.5-2.5-2.6-2.5c-0.3,0-0.5-0.3-0.4-0.6c0-0.3,0.3-0.5,0.6-0.4
        C11.7,6.7,14,7.7,14,10v2C14,12.3,13.8,12.5,13.5,12.5z"
      />
    </g>
    <g>
      <path
        d="M8,7C7.9,7,7.9,7,7.8,7C7.6,6.9,7.4,6.6,7.5,6.3c0-0.1,0.4-1.2,1.4-2.2C9.1,4,9.4,4,9.6,4.1c0.2,0.2,0.2,0.5,0,0.7
        C8.8,5.6,8.5,6.6,8.5,6.7C8.4,6.9,8.2,7,8,7z"
      />
    </g>
    <g>
      <path
        d="M10,5C8,5,6.5,3.9,6.5,2.5S8,0,10,0s3.5,1.1,3.5,2.5S12,5,10,5z M10,1C8.6,1,7.5,1.7,7.5,2.5S8.6,4,10,4
        s2.5-0.7,2.5-1.5S11.4,1,10,1z"
      />
    </g>
    <g>
      <path
        d="M10,5C9.7,5,9.5,4.8,9.5,4.5S9.7,4,10,4c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5c0-0.5-0.7-0.8-1.8-0.8
        C8.7,2.5,8.5,2.3,8.5,2S8.7,1.5,9,1.5c0.9,0,1.5,0.2,2,0.5c0.5,0.3,0.7,0.8,0.7,1.3C11.8,4.2,11,5,10,5z"
      />
    </g>
    <g>
      <path
        d="M10.5,24c-0.3,0-0.5-0.2-0.5-0.5V13c0-0.3,0.2-0.5,0.5-0.5S11,12.7,11,13v10.5C11,23.8,10.8,24,10.5,24z"
      />
    </g>
    <g>
      <path
        d="M12.5,22c-0.8,0-1.6-0.3-2.1-1.1c-0.5-0.7-0.5-1.6,0-2.2c0.5-0.7,1.4-1,2.3-0.7c1,0.3,2.7-0.7,3.2-1.2
        c0.2-0.1,0.4-0.2,0.6,0c0.2,0.1,0.3,0.3,0.2,0.5c-0.1,0.3-0.8,3.1-2.1,4C14,21.7,13.2,22,12.5,22z M12,18.9
        c-0.3,0-0.6,0.2-0.8,0.4c-0.2,0.2-0.3,0.6,0,1c0.7,0.9,1.9,0.8,2.8,0.2c0.5-0.3,0.9-1.2,1.2-2.1c-0.8,0.5-2,0.9-2.9,0.5
        C12.2,18.9,12.1,18.9,12,18.9z"
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
  name: "LuxIconFlower",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="flower">
      <lux-icon-flower></lux-icon-flower>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="flower">
      <lux-icon-flower></lux-icon-flower>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="flower" icon-color="red">
      <lux-icon-flower></lux-icon-flower>
    </lux-icon-base>
  </div>
  ```
</docs>
