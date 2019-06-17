<template>
  <g>
    <g id="Outline_Icons">
      <g>
        <g>
          <circle
            fill="none"
            stroke="#000000"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            cx="17.5"
            cy="17.5"
            r="6"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="15"
            y1="20"
            x2="20"
            y2="15"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="20"
            y1="20"
            x2="15"
            y2="15"
          />
        </g>
        <g>
          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="3.5"
            y1="6.5"
            x2="8"
            y2="6.5"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="3.5"
            y1="9.5"
            x2="11.5"
            y2="9.5"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="3.5"
            y1="12.5"
            x2="9.5"
            y2="12.5"
          />

          <line
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="3.5"
            y1="15.5"
            x2="8.5"
            y2="15.5"
          />
          <g>
            <polyline
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              points="
					10.5,21.5 0.5,21.5 0.5,0.5 11.5,0.5 16.5,5.5 16.5,9.5 				"
            />
            <polyline
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              points="
					11.5,0.5 11.5,5.5 16.5,5.5 				"
            />
          </g>
        </g>
      </g>
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
    <lux-icon-base width="30" height="30" icon-name="report-remove" icon-color="rgb(44, 110, 175)">
      <lux-icon-report-remove></lux-icon-report-remove>
    </lux-icon-base>
  </div>
  ```
</docs>
