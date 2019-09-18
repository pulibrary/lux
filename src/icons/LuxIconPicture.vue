<template>
  <g>
    <g>
      <path
        d="M23.5,24h-23C0.2,24,0,23.8,0,23.5v-23C0,0.2,0.2,0,0.5,0h23C23.8,0,24,0.2,24,0.5v23C24,23.8,23.8,24,23.5,24z M1,23
					h22V1H1V23z"
      />
    </g>
    <g>
      <rect x="0.5" y="17" width="23" height="1" />
    </g>
    <g>
      <path
        d="M9.5,9h-3c-1.1,0-2-0.9-2-2c0-0.7,0.3-1.3,0.9-1.6C5.8,5.1,6.2,5,6.7,5c0.4-1.2,1.5-2,2.8-2c1.7,0,3,1.3,3,3
					S11.2,9,9.5,9z M6.5,6C6.3,6,6.1,6.1,5.9,6.2C5.7,6.4,5.5,6.7,5.5,7c0,0.6,0.4,1,1,1h3c1.1,0,2-0.9,2-2s-0.9-2-2-2
					c-1,0-1.8,0.7-2,1.7C7.5,5.8,7.4,6,7.3,6C7.2,6.1,7,6.1,6.9,6.1C6.7,6,6.6,6,6.5,6z"
      />
    </g>
    <g>
      <path
        d="M21.6,17.7L18,10.7c-0.2-0.4-0.6-0.6-1-0.6c-0.4,0-0.8,0.2-1.1,0.6l-3,5.2c-0.1,0.1-0.2,0.2-0.4,0.2
					c-0.2,0-0.3-0.1-0.4-0.2c0,0-1.9-2.8-4.1-2.8c-1.8,0-3.5,3.4-4,4.7L3,17.3C3.3,16.8,5.2,12,8,12c2,0,3.7,1.7,4.4,2.6l2.6-4.5
					C15.5,9.4,16.2,9,17,9c0.8,0,1.5,0.5,1.9,1.2l3.5,7.1L21.6,17.7z"
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
  name: "LuxIconPicture",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="picture">
      <lux-icon-picture></lux-icon-picture>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="picture">
      <lux-icon-picture></lux-icon-picture>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="picture" icon-color="red">
      <lux-icon-picture></lux-icon-picture>
    </lux-icon-base>
  </div>
  ```
</docs>
