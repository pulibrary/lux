<template>
  <g>
    <path
      d="M23.5,1h-23C0.2,1,0,1.2,0,1.5v16C0,17.8,0.2,18,0.5,18H7v3.5c0,0.2,0.1,0.4,0.3,0.5c0.1,0,0.1,0,0.2,0
	c0.1,0,0.3-0.1,0.4-0.1l3.9-3.9h11.8c0.3,0,0.5-0.2,0.5-0.5v-16C24,1.2,23.8,1,23.5,1z M12.5,15c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1
	s1,0.4,1,1C13.5,14.6,13.1,15,12.5,15z M13,11v0.5c0,0.3-0.2,0.5-0.5,0.5S12,11.8,12,11.5v-1c0-0.3,0.2-0.5,0.5-0.5
	c1.4,0,2.5-1.1,2.5-2.5S13.9,5,12.5,5S10,6.1,10,7.5C10,7.8,9.8,8,9.5,8S9,7.8,9,7.5C9,5.6,10.6,4,12.5,4S16,5.6,16,7.5
	C16,9.3,14.7,10.7,13,11z"
    />
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconQuestionFilled",
  status: "ready",
  release: "3.1.1",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
    <lux-icon-base width="12" height="12" icon-name="question">
      <lux-icon-question-filled></lux-icon-question-filled>
    </lux-icon-base>

    <!-- or you can use the default, which is 18 -->
    <lux-icon-base icon-name="question">
      <lux-icon-question-filled></lux-icon-question-filled>
    </lux-icon-base>

    <!-- or make it a little bigger too, with colors :) -->
    <lux-icon-base width="30" height="30" icon-name="question" icon-color="red">
      <lux-icon-question-filled></lux-icon-question-filled>
    </lux-icon-base>
  </div>
  ```
</docs>
