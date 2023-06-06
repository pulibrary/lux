<template>
  <g>
    <path
      d="M1.4,7.5c0.1,0,0.1,0.1,0.2,0.1c0.2,0,0.4-0.1,0.5-0.3c1-2.2,2.8-4,4.9-5.1c0.2-0.1,0.3-0.4,0.2-0.7
  		C7.1,1.3,6.8,1.2,6.5,1.3C4.2,2.5,2.3,4.5,1.2,6.8C1.1,7.1,1.2,7.4,1.4,7.5z"
    />
    <path
      d="M9.5,1.3c2.3-0.5,4.8-0.3,7,0.7c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.5-0.3c0.1-0.3,0-0.5-0.2-0.7C14.6,0,11.8-0.3,9.3,0.3
  		C9,0.4,8.9,0.6,8.9,0.9S9.2,1.3,9.5,1.3z"
    />
    <path
      d="M22.7,9.3c0.1,0.2,0.3,0.4,0.5,0.4c0,0,0.1,0,0.1,0c0.3-0.1,0.4-0.3,0.4-0.6c-0.6-2.5-2.1-4.8-4.2-6.5
  		c-0.2-0.2-0.5-0.1-0.7,0.1s-0.1,0.5,0.1,0.7C20.7,4.9,22.1,7,22.7,9.3z"
    />
    <path
      d="M1,12c0-0.7,0.1-1.5,0.2-2.2c0.1-0.3-0.1-0.5-0.4-0.6C0.6,9.2,0.3,9.3,0.2,9.6C0.1,10.4,0,11.2,0,12c0,1.8,0.4,3.6,1.2,5.2
  		c0.1,0.2,0.3,0.3,0.4,0.3c0.1,0,0.1,0,0.2,0c0.2-0.1,0.4-0.4,0.2-0.7C1.4,15.3,1,13.7,1,12z"
    />
    <path
      d="M18.9,20.6c-1.9,1.5-4.2,2.4-6.6,2.4c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5c0,0,0,0,0,0c2.7-0.1,5.2-1,7.2-2.6
  		c0.2-0.2,0.2-0.5,0.1-0.7C19.4,20.5,19.1,20.4,18.9,20.6z"
    />
    <path
      d="M23.5,11.5c-0.3,0-0.5,0.2-0.5,0.5c0,2.4-0.8,4.7-2.3,6.7c-0.2,0.2-0.1,0.5,0.1,0.7c0.1,0.1,0.2,0.1,0.3,0.1
  		c0.1,0,0.3-0.1,0.4-0.2c1.6-2.1,2.5-4.6,2.5-7.3v0C24,11.7,23.8,11.5,23.5,11.5z"
    />
    <path
      d="M9.6,22.7c-2.3-0.5-4.5-1.8-6-3.7c-0.2-0.2-0.5-0.2-0.7-0.1c-0.2,0.2-0.2,0.5-0.1,0.7c1.7,2,4,3.4,6.6,4c0,0,0.1,0,0.1,0
  		c0.2,0,0.4-0.2,0.5-0.4C10,23.1,9.8,22.8,9.6,22.7z"
    />
    <path
      d="M12,7c-4.6,0-8.2,4.5-8.4,4.7c-0.1,0.2-0.1,0.4,0,0.6C3.8,12.5,7.4,17,12,17c4.6,0,8.2-4.5,8.4-4.7c0.1-0.2,0.1-0.4,0-0.6
  		C20.2,11.5,16.5,7,12,7z M12,16c-3.4,0-6.4-3-7.3-4c0.9-1,3.9-4,7.3-4c3.4,0,6.4,3,7.3,4C18.4,13,15.4,16,12,16z"
    />
    <path
      d="M12,9c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S13.6,9,12,9z M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,14,12,14z"
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
  name: "LuxIconView",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="View">
      <lux-icon-view></lux-icon-view>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="View">
      <lux-icon-view></lux-icon-view>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="View" icon-color="red">
      <lux-icon-view></lux-icon-view>
    </lux-icon-base>
  </div>
  ```
</docs>
