<template>
  <g>
    <g>
      <path
        d="M18.4,24H0.5C0.2,24,0,23.8,0,23.5c0-3.7,4.9-5,9.5-5c4.6,0,9.5,1.3,9.5,5C18.9,23.8,18.7,24,18.4,24z M1,23h16.8
        c-0.5-2.6-4.7-3.5-8.4-3.5C5.8,19.5,1.5,20.4,1,23z"
      />
    </g>
    <g>
      <path
        d="M6.5,19.5L5.6,19l5.9-10.8C11.7,8.1,11.9,8,12.1,8s0.4,0.3,0.4,0.5L12,19.1l-1,0l0.4-8.5L6.5,19.5z"
      />
    </g>
    <g>
      <path
        d="M3.7,11.4c-0.9,0-1.8,0-2.7-0.1c-0.2,0-0.3-0.1-0.4-0.2c-0.1-0.1-0.1-0.3,0-0.5c2.1-5,8.7-4.8,11.7-3.6
        c0.2,0.1,0.3,0.3,0.3,0.5v1c0,0.2-0.1,0.3-0.2,0.4C9.5,10.9,6.7,11.4,3.7,11.4z M1.7,10.3c3.6,0.2,6.7,0,9.8-2.1V7.9
        C9.3,7.1,3.9,6.6,1.7,10.3z"
      />
    </g>
    <g>
      <path
        d="M12,8c-0.1,0-0.1,0-0.2,0L4.3,5C4.1,4.9,4,4.7,4,4.6c0-0.2,0.1-0.4,0.2-0.5C6,2.9,8.1,2.8,9.9,3.8
        c1.6,0.8,2.6,2.3,2.6,3.7c0,0.2-0.1,0.3-0.2,0.4C12.2,8,12.1,8,12,8z M5.7,4.4l5.7,2.3c-0.3-0.8-1-1.6-1.9-2.1
        C8.2,4,6.9,3.9,5.7,4.4z"
      />
    </g>
    <g>
      <path
        d="M19.1,11.5c-2.9,0-5.6-0.5-7.5-2.6c-0.1-0.1-0.1-0.2-0.1-0.3v-1c0-0.2,0.1-0.4,0.3-0.5c3-1.2,9.6-1.4,11.7,3.6
        c0.1,0.1,0.1,0.3,0,0.5c-0.1,0.1-0.2,0.2-0.4,0.2l-0.9,0C21.2,11.4,20.1,11.5,19.1,11.5z M12.5,8.3c2.2,2.5,6,2.2,9.7,2l0.1,0
        c-2.2-3.7-7.6-3.2-9.8-2.5V8.3z"
      />
    </g>
    <g>
      <path
        d="M12,8c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.2-0.2-0.2-0.4c0-1.4,1-2.9,2.6-3.7c1.8-1,3.9-0.9,5.7,0.3
        C19.9,4.2,20,4.4,20,4.6c0,0.2-0.1,0.3-0.3,0.4l-7.5,3C12.1,8,12.1,8,12,8z M16.7,4.1c-0.7,0-1.4,0.2-2.1,0.5
        c-0.9,0.5-1.6,1.3-1.9,2.1l5.7-2.3C17.8,4.2,17.2,4.1,16.7,4.1z"
      />
    </g>
    <g>
      <path
        d="M11.6,17.5H10c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h1.6c0.3,0,0.5,0.2,0.5,0.5S11.9,17.5,11.6,17.5z"
      />
    </g>
    <g>
      <path
        d="M11.7,15.5h-1.2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h1.2c0.3,0,0.5,0.2,0.5,0.5S12,15.5,11.7,15.5z"
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
  name: "LuxIconVacation",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="vacation">
      <lux-icon-vacation></lux-icon-vacation>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="vacation">
      <lux-icon-vacation></lux-icon-vacation>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="vacation" icon-color="red">
      <lux-icon-vacation></lux-icon-vacation>
    </lux-icon-base>
  </div>
  ```
</docs>
