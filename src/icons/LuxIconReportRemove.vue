<template>
  <g>
    <g>
      <g>
        <path
          d="M17.5,24c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5s6.5,2.9,6.5,6.5S21.1,24,17.5,24z M17.5,12c-3,0-5.5,2.5-5.5,5.5
          s2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5S20.5,12,17.5,12z"
        />
      </g>
      <g>
        <path
          d="M15,20.5c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l5-5c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-5,5
          C15.3,20.5,15.1,20.5,15,20.5z"
        />
      </g>
      <g>
        <path
          d="M20,20.5c-0.1,0-0.3,0-0.4-0.1l-5-5c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l5,5c0.2,0.2,0.2,0.5,0,0.7
          C20.3,20.5,20.1,20.5,20,20.5z"
        />
      </g>
    </g>
    <g>
      <g>
        <path d="M8,7H3.5C3.2,7,3,6.8,3,6.5S3.2,6,3.5,6H8c0.3,0,0.5,0.2,0.5,0.5S8.3,7,8,7z" />
      </g>
      <g>
        <path
          d="M11.5,10h-8C3.2,10,3,9.8,3,9.5S3.2,9,3.5,9h8C11.8,9,12,9.2,12,9.5S11.8,10,11.5,10z"
        />
      </g>
      <g>
        <path
          d="M9.5,13h-6C3.2,13,3,12.8,3,12.5S3.2,12,3.5,12h6c0.3,0,0.5,0.2,0.5,0.5S9.8,13,9.5,13z"
        />
      </g>
      <g>
        <path
          d="M8.5,16h-5C3.2,16,3,15.8,3,15.5S3.2,15,3.5,15h5C8.8,15,9,15.2,9,15.5S8.8,16,8.5,16z"
        />
      </g>
      <g>
        <g>
          <path
            d="M10.5,22h-10C0.2,22,0,21.8,0,21.5v-21C0,0.2,0.2,0,0.5,0h11c0.1,0,0.3,0.1,0.4,0.1l5,5C16.9,5.2,17,5.4,17,5.5v4
            c0,0.3-0.2,0.5-0.5,0.5S16,9.8,16,9.5V5.7L11.3,1H1v20h9.5c0.3,0,0.5,0.2,0.5,0.5S10.8,22,10.5,22z"
          />
        </g>
        <g>
          <path
            d="M16.5,6h-5C11.2,6,11,5.8,11,5.5v-5C11,0.2,11.2,0,11.5,0S12,0.2,12,0.5V5h4.5C16.8,5,17,5.2,17,5.5S16.8,6,16.5,6z"
          />
        </g>
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
  name: "LuxIconReportRemove",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="report-remove">
      <lux-icon-report-remove></lux-icon-report-remove>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="report-remove">
      <lux-icon-report-remove></lux-icon-report-remove>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="report-remove" icon-color="red">
      <lux-icon-report-remove></lux-icon-report-remove>
    </lux-icon-base>
  </div>
  ```
</docs>
