<template>
  <g>
    <g>
      <path
        d="M11.5,22c-0.3,0-0.5-0.2-0.5-0.5V6.4c0-0.3,0.2-0.5,0.5-0.5S12,6.2,12,6.4v15.1C12,21.8,11.8,22,11.5,22z"
      />
    </g>
    <g>
      <path
        d="M14.4,22H8.6c-0.3,0-0.5-0.2-0.5-0.5S8.3,21,8.6,21h5.8c0.3,0,0.5,0.2,0.5,0.5S14.7,22,14.4,22z"
      />
    </g>
    <g>
      <path
        d="M11.5,6.9c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S12.6,6.9,11.5,6.9z M11.5,4c-0.5,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1
        S12,4,11.5,4z"
      />
    </g>
    <g>
      <g>
        <path
          d="M7.5,13c-0.2,0-0.4-0.1-0.5-0.3L4,5.7l-3,6.9C0.8,13,0.6,13.1,0.3,13C0,12.8-0.1,12.6,0,12.3l3.5-8C3.6,4.1,3.8,4,4,4
          c0,0,0,0,0,0c0.2,0,0.4,0.1,0.5,0.3l3.5,8c0.1,0.3,0,0.5-0.3,0.7C7.6,13,7.6,13,7.5,13z"
        />
      </g>
      <g>
        <path
          d="M10.1,5H2.5C2.2,5,2,4.8,2,4.5S2.2,4,2.5,4h7.6c0.3,0,0.5,0.2,0.5,0.5S10.4,5,10.1,5z"
        />
      </g>
      <g>
        <path
          d="M4,16.5c-2.2,0-4-1.8-4-4C0,12.2,0.2,12,0.5,12h7C7.8,12,8,12.2,8,12.5C8,14.7,6.2,16.5,4,16.5z M1,13
          c0.2,1.4,1.5,2.5,3,2.5s2.7-1.1,3-2.5H1z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M15.5,13c-0.1,0-0.1,0-0.2,0c-0.3-0.1-0.4-0.4-0.3-0.7l3.5-8C18.6,4.1,18.8,4,19,4l0,0c0.2,0,0.4,0.1,0.5,0.3l3.5,8
          c0.1,0.3,0,0.5-0.3,0.7c-0.3,0.1-0.5,0-0.7-0.3l-3-6.9l-3,6.9C15.9,12.9,15.7,13,15.5,13z"
        />
      </g>
      <g>
        <path
          d="M20.5,5h-7.6c-0.3,0-0.5-0.2-0.5-0.5S12.6,4,12.9,4h7.6C20.8,4,21,4.2,21,4.5S20.8,5,20.5,5z"
        />
      </g>
      <g>
        <path
          d="M19,16.5c-2.2,0-4-1.8-4-4c0-0.3,0.2-0.5,0.5-0.5h7c0.3,0,0.5,0.2,0.5,0.5C23,14.7,21.2,16.5,19,16.5z M16,13
          c0.2,1.4,1.5,2.5,3,2.5s2.7-1.1,3-2.5H16z"
        />
      </g>
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
  name: "LuxIconScales",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="scales">
      <lux-icon-scales></lux-icon-scales>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="scales">
      <lux-icon-scales></lux-icon-scales>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="scales" icon-color="red">
      <lux-icon-scales></lux-icon-scales>
    </lux-icon-base>
  </div>
  ```
</docs>
