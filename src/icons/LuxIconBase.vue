<template functional>
  <div class="lux-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="props.width"
      :height="props.height"
      viewBox="0 0 24 24"
      :aria-labelledby="props.iconName"
      :aria-hidden="props.iconHide"
      role="img"
    >
      <title v-if="props.iconName" :id="props.iconName" lang="en">{{ props.iconName }}</title>
      <g :fill="props.iconColor">
        <slot></slot>
      </g>
    </svg>
  </div>
</template>

<script>
/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#/Adding%20Icons).
 */
export default {
  name: "LuxIconBase",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The name of the icon to display. Also used for accessibility purposes.
     */
    iconName: {
      required: false,
      type: String,
      default: "",
    },
    /**
     * The width of the icon. For square icons use values of `11px, 13px,
     * 16px, 24px, 36px, 48px, 64px` to follow visual heirachy set by
     * typography.
     */
    width: {
      type: [Number, String],
      default: 24,
    },
    /**
     * The height of the icon. For square icons use values of `11px, 13px,
     * 16px, 24px, 36px, 48px, 64px` to follow visual heirachy set by
     * typography.
     */
    height: {
      type: [Number, String],
      default: 24,
    },
    /**
     * The fill color of the SVG icon.
     */
    iconColor: {
      type: String,
      default: "currentColor",
    },
    /**
     * Hides decorative icon from screen readers
     */
    iconHide: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-icon {
  display: inline-flex;
  align-self: center;
  margin: 0 $space-xx-small;

  svg {
    top: 0.125em;
    position: relative;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <lux-icon-base width="30" height="30" icon-name="file">
      <lux-icon-file></lux-icon-file>
    </lux-icon-base>
  </div>
  ```
</docs>
