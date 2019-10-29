<template>
  <g>
    <g>
      <path
        d="M7.5,22c-0.1,0-0.1,0-0.2,0C7.1,21.9,7,21.7,7,21.5V18H0.5C0.2,18,0,17.8,0,17.5v-16C0,1.2,0.2,1,0.5,1h23
			C23.8,1,24,1.2,24,1.5v16c0,0.3-0.2,0.5-0.5,0.5H11.7l-3.9,3.9C7.8,21.9,7.6,22,7.5,22z M1,17h6.5C7.8,17,8,17.2,8,17.5v2.8
			l3.1-3.1c0.1-0.1,0.2-0.1,0.4-0.1H23V2H1V17z"
      />
    </g>
    <g>
      <path d="M14.5,7h-9C5.2,7,5,6.8,5,6.5S5.2,6,5.5,6h9C14.8,6,15,6.2,15,6.5S14.8,7,14.5,7z" />
    </g>
    <g>
      <path
        d="M18.5,10h-13C5.2,10,5,9.8,5,9.5S5.2,9,5.5,9h13C18.8,9,19,9.2,19,9.5S18.8,10,18.5,10z"
      />
    </g>
    <g>
      <path
        d="M18.5,13h-13C5.2,13,5,12.8,5,12.5S5.2,12,5.5,12h13c0.3,0,0.5,0.2,0.5,0.5S18.8,13,18.5,13z"
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
  name: "LuxIconNote",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="note">
      <lux-icon-note></lux-icon-note>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="note">
      <lux-icon-note></lux-icon-note>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="note" icon-color="red">
      <lux-icon-note></lux-icon-note>
    </lux-icon-base>
  </div>
  ```
</docs>
