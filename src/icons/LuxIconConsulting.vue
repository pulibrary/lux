<template>
  <g>
    <g id="Outline_Icons_1_">
      <g id="Outline_Icons">
        <g>
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M5.5,8.493
            c0,0.552,0.447,1,1,1h1l3,3v-3h7c0.552,0,1-0.448,1-1v-7c0-0.552-0.448-1-1-1h-11c-0.553,0-1,0.448-1,1V8.493z"
          />

          <circle
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            cx="19.5"
            cy="14.008"
            r="2.5"
          />
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M23.5,20.508h-8
            c0-2.209,1.79-4,4-4S23.5,18.299,23.5,20.508z"
          />

          <circle
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            cx="4.5"
            cy="14.008"
            r="2.5"
          />
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M8.5,20.508h-8
            c0-2.209,1.79-4,4-4S8.5,18.299,8.5,20.508z"
          />

          <circle
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            cx="12"
            cy="17.008"
            r="2.5"
          />
          <path
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M16,23.508H8
            c0-2.209,1.79-4,4-4S16,21.299,16,23.508z"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="8.5"
            y1="2.493"
            x2="15.469"
            y2="2.493"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="8.5"
            y1="4.493"
            x2="15.469"
            y2="4.493"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="8.5"
            y1="6.493"
            x2="15.469"
            y2="6.493"
          />
        </g>
      </g>
      <g id="New_icons_1_"></g>
    </g>
    <g id="Invisible_Shape">
      <rect fill="none" width="24" height="24" />
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
    <lux-icon-base width="30"  height="30" icon-name="consulting" icon-color="rgb(44, 110, 175)">
      <lux-icon-consulting></lux-icon-consulting>
    </lux-icon-base>
  </div>
  ```
</docs>
