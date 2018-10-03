<template>
  <g>
    <g id="Outline_Icons">
    	<g>
    		<rect x="0.5" y="0.5" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" width="23" height="23"/>
    		<line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" x1="23.5" y1="17.5" x2="0.5" y2="17.5"/>
    		<path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" d="M9.5,3.5c-1.245,0-2.27,0.914-2.46,2.104
    			C6.027,5.215,5,5.973,5,7c0,0.828,0.672,1.5,1.5,1.5h3C10.881,8.5,12,7.381,12,6S10.881,3.5,9.5,3.5z"/>
    		<path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" d="M3.5,17.5c0,0,2-5,4.5-5s4.5,3,4.5,3
    			l3.015-5.168c0.672-1.152,2.356-1.093,2.948,0.096L22,17.5"/>
    	</g>
    </g>
    <g id="Invisible_Shape">
    	<rect fill="none" width="24" height="24"/>
    </g>
  </g>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#!/Adding%20Icons).
 */
export default {
  name: "LuxIconPicture",
  status: "ready",
  release: "1.0.0",
  type: "Element",
}
</script>

<docs>
  ```jsx
  <div>
    <!-- you can pass in a smaller `width` and `height` as props -->
  <lux-icon-base
    width="12"
    height="12"
    icon-name="picture"
  ><lux-icon-picture /></lux-icon-base>
  <!-- or you can use the default, which is 18 -->
  <lux-icon-base icon-name="picture"><lux-icon-picture /></lux-icon-base>
  <!-- or make it a little bigger too, with colors :) -->
  <lux-icon-base
    width="30"
    height="30"
    icon-name="picture"
    icon-color="rgb(44, 110, 175)"
  ><lux-icon-picture /></lux-icon-base>
  </div>
  ```
</docs>
