<template>
  <g>
    <g>
      <path
        d="M21.5,23h-19C2.2,23,2,22.8,2,22.5v-1.9c0-1.5,0.9-2.8,2.3-3.3L9,15.6v-2.5h1V16c0,0.2-0.1,0.4-0.3,0.5l-5,1.8
			c-1,0.4-1.7,1.3-1.7,2.4V22h18v-1.4c0-1.1-0.7-2-1.7-2.4l-5-1.8C14.1,16.4,14,16.2,14,16v-2.8h1v2.5l4.7,1.7
			c1.4,0.5,2.3,1.8,2.3,3.3v1.9C22,22.8,21.8,23,21.5,23z"
      />
    </g>
    <g>
      <path
        d="M12,14.5c-1.5,0-2.9-0.7-3.9-1.9C6,10,6,6,8.1,3.4c1-1.2,2.4-1.9,3.9-1.9l0,0c1.5,0,2.9,0.7,3.9,1.9v0
			C18,6,18,10,15.9,12.6C14.9,13.8,13.5,14.5,12,14.5z M12,2.5c-1.2,0-2.3,0.6-3.2,1.6C7,6.2,7,9.8,8.8,11.9c0.8,1,2,1.6,3.2,1.6
			s2.3-0.6,3.2-1.6c1.8-2.2,1.8-5.7,0-7.8v0C14.3,3.1,13.2,2.5,12,2.5L12,2.5z"
      />
    </g>
    <g>
      <path
        d="M15.7,8.1c-1.2,0-2.1-0.5-2.9-1.6C11.9,7.3,10.4,8,9,8C8.2,8,7.5,7.8,6.8,7.5l0.5-0.9C7.8,6.9,8.4,7,9,7
			c1.3,0,2.9-0.8,3.3-1.7c0.1-0.2,0.3-0.3,0.4-0.3c0.2,0,0.4,0.1,0.4,0.3c0.9,1.5,1.8,2,3.2,1.7c0.1,0,0.2,0,0.3,0l0.2,0l0.1,1
			c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0C16.3,8.1,16,8.1,15.7,8.1z"
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
  name: "LuxIconPerson",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="person">
      <lux-icon-person></lux-icon-person>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="person">
      <lux-icon-person></lux-icon-person>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="person" icon-color="red">
      <lux-icon-person></lux-icon-person>
    </lux-icon-base>
  </div>
  ```
</docs>
