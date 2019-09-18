<template>
  <g>
    <g>
      <path
        d="M10.5,13c-0.1,0-0.3-0.1-0.4-0.1L7.3,10H6.5C5.7,10,5,9.3,5,8.5v-7C5,0.7,5.7,0,6.5,0h11C18.3,0,19,0.7,19,1.5v7
        c0,0.8-0.7,1.5-1.5,1.5H11v2.5c0,0.2-0.1,0.4-0.3,0.5C10.6,13,10.6,13,10.5,13z M6.5,1C6.2,1,6,1.2,6,1.5v7C6,8.8,6.2,9,6.5,9
        h1C7.6,9,7.8,9,7.9,9.1l2.1,2.1V9.5C10,9.2,10.2,9,10.5,9h7C17.8,9,18,8.8,18,8.5v-7C18,1.2,17.8,1,17.5,1H6.5z"
      />
    </g>
    <g>
      <path
        d="M19.5,17c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S21.2,17,19.5,17z M19.5,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2
        S20.6,12,19.5,12z"
      />
    </g>
    <g>
      <path
        d="M23.5,21h-8c-0.3,0-0.5-0.2-0.5-0.5c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5C24,20.8,23.8,21,23.5,21z M16,20H23
        c-0.2-1.7-1.7-3-3.5-3S16.3,18.3,16,20z"
      />
    </g>
    <g>
      <path
        d="M4.5,17c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S6.2,17,4.5,17z M4.5,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2
        S5.6,12,4.5,12z"
      />
    </g>
    <g>
      <path
        d="M8.5,21h-8C0.2,21,0,20.8,0,20.5C0,18,2,16,4.5,16S9,18,9,20.5C9,20.8,8.8,21,8.5,21z M1,20H8c-0.2-1.7-1.7-3-3.5-3
        S1.3,18.3,1,20z"
      />
    </g>
    <g>
      <path
        d="M12,20c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S13.7,20,12,20z M12,15c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2
        S13.1,15,12,15z"
      />
    </g>
    <g>
      <path
        d="M16,24H8c-0.3,0-0.5-0.2-0.5-0.5c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5C16.5,23.8,16.3,24,16,24z M8.5,23h6.9
        c-0.2-1.7-1.7-3-3.5-3C10.2,20,8.8,21.3,8.5,23z"
      />
    </g>
    <g>
      <path d="M15.5,3h-7C8.2,3,8,2.8,8,2.5S8.2,2,8.5,2h7C15.7,2,16,2.2,16,2.5S15.7,3,15.5,3z" />
    </g>
    <g>
      <path d="M15.5,5h-7C8.2,5,8,4.8,8,4.5S8.2,4,8.5,4h7C15.7,4,16,4.2,16,4.5S15.7,5,15.5,5z" />
    </g>
    <g>
      <path d="M15.5,7h-7C8.2,7,8,6.8,8,6.5S8.2,6,8.5,6h7C15.7,6,16,6.2,16,6.5S15.7,7,15.5,7z" />
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
  name: "LuxIconConsulting",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="consulting">
      <lux-icon-consulting></lux-icon-consulting>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="consulting">
      <lux-icon-consulting></lux-icon-consulting>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30"  height="30" icon-name="consulting" icon-color="red">
      <lux-icon-consulting></lux-icon-consulting>
    </lux-icon-base>
  </div>
  ```
</docs>
