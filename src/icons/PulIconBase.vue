<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en"
    >{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#!/Adding%20Icons).
 */
export default {
  name: "PulIconBase",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The name of the icon to display. Also used for accessibility purposes.
     */
    iconName: {
      required: true,
      type: String,
      default: "pul-icon-data-file",
    },
    /**
     * The width of the icon. For square icons use values of `11px, 13px,
     * 16px, 24px, 36px, 48px, 64px` to follow visual heirachy set by
     * typography.
     */
    width: {
      type: [Number, String],
      default: 16,
    },
    /**
     * The height of the icon. For square icons use values of `11px, 13px,
     * 16px, 24px, 36px, 48px, 64px` to follow visual heirachy set by
     * typography.
     */
    height: {
      type: [Number, String],
      default: 16,
    },
    /**
     * The fill color of the SVG icon.
     */
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
}
</script>

<style lang="scss" scoped>
.svg-icon {
  display: inline-flex;
  align-self: center;

  svg {
    top: 0.125em;
    position: relative;
  }
}
</style>

<docs>
  ```jsx
  <div>
  <pul-icon-base
    width="30"
    height="30"
    icon-name="file"><pul-icon-file /></pul-icon-base>
  </div>
  ```
</docs>
