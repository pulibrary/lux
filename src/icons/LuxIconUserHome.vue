<template>
  <g>
    <g>
      <path
        d="M20.5,23h-17C3.2,23,3,22.8,3,22.5v-11C3,11.2,3.2,11,3.5,11S4,11.2,4,11.5V22h16V11c0-0.3,0.2-0.5,0.5-0.5
        S21,10.7,21,11v11.5C21,22.8,20.8,23,20.5,23z"
      />
    </g>
    <g>
      <path
        d="M23.5,11.5c-0.1,0-0.2,0-0.3-0.1L12,1.2L0.8,11.4c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7L11.7,0.1
        c0.2-0.2,0.5-0.2,0.7,0l11.5,10.5c0.2,0.2,0.2,0.5,0,0.7C23.8,11.4,23.6,11.5,23.5,11.5z"
      />
    </g>
    <g>
      <path
        d="M19.5,5.5C19.2,5.5,19,5.3,19,5V2h-3c-0.3,0-0.5-0.2-0.5-0.5S15.7,1,16,1h3.5C19.8,1,20,1.2,20,1.5V5
        C20,5.3,19.8,5.5,19.5,5.5z"
      />
    </g>
    <g>
      <path
        d="M12,15c-1.9,0-3.5-1.6-3.5-3.5S10.1,8,12,8s3.5,1.6,3.5,3.5S13.9,15,12,15z M12,9c-1.4,0-2.5,1.1-2.5,2.5
        S10.6,14,12,14c1.4,0,2.5-1.1,2.5-2.5S13.4,9,12,9z"
      />
    </g>
    <g>
      <path
        d="M17.3,20H6.7c-0.3,0-0.5-0.2-0.5-0.5c0-3.1,2.5-5.5,5.8-5.5s5.8,2.4,5.8,5.5C17.8,19.8,17.6,20,17.3,20z M7.2,19h9.6
        c-0.3-2.3-2.2-4-4.8-4C9.4,15,7.4,16.7,7.2,19z"
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
  name: "LuxIconUserHome",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="user-home">
      <lux-icon-user-home></lux-icon-user-home>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="user-home">
      <lux-icon-user-home></lux-icon-user-home>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30"  height="30" icon-name="user-home" icon-color="red">
      <lux-icon-user-home></lux-icon-user-home>
    </lux-icon-base>
  </div>
  ```
</docs>
