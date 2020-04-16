<template functional>
  <div class="lux-media-image"
       :class="[props.height, {'lux-default-thumbnail': !props.src}, data.class, data.staticClass]"
       :style="[data.style, data.staticStyle]"
       v-bind="data.attrs"
       v-on="listeners">
    <img v-if="props.src" @error="$options.methods.fixSrc" :src="props.src" :alt="props.alt" :class="[{'lux-cover': props.cover}, {'lux-contain': props.contain}]" />
    <lux-icon-base
      width="50"
      height="50"
      icon-name="file"
      icon-color="rgb(225,225,225)"
      icon-hide="true"
      ><lux-icon-file
    /></lux-icon-base>
  </div>
</template>

<script>
/**
 * Cards are used to apply a container around a related grouping of information.
 */
export default {
  name: "MediaImage",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  methods: {
    fixSrc(event) {
      console.log(event)
      event.target.parentNode.classList.add("lux-default-thumbnail")
      event.target.remove()
    }
  },
  props: {
    /**
     * The image displayed
     */
    src: {
      type: String,
      default: null,
    },
    /**
     * The alternative text describing the image. Do not include if image is decorative.
     */
    alt: {
      type: String,
      default: "",
    },
    /**
     * Manually define the height of the image for a card
     */
    height: {
      type: String,
      default: "",
    },
    /**
     * Whether the image fills the container maintaining aspect ratio and is cropped
     */
    cover: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether the full image is contained within the container maintaining aspect ratio. Note that this property is not recommened for use when the `height` prop is used as it will show the background of the container.
     */
    contain: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-media-image {
  @include reset;
  @include stack-space($space-base);
  font-family: $font-family-text;
  line-height: $line-height-base;
  color: $color-rich-black;
  overflow: hidden;
  position: relative;
  height: auto;

  img {
    background-color: $color-grayscale-lighter;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  .lux-cover {
    object-fit: cover;
  }

  .lux-contain {
    object-fit: contain;
  }

  .lux-icon {
    display: none;
  }

  &.lux-default-thumbnail {
    background: $color-grayscale;
    display: flex;
    align-items: center;

    .lux-icon {
      display: block;
    }
    .lux-svg-icon,
    svg {
      display: block;
      margin: auto;
    }
  }
}

.lux-small {
  height: 100px;
  width: 100%;

  img {
    height: 100px;
    max-width: 100%;
  }
}

.lux-medium {
  height: 200px;
  width: 100%;

  img {
    height: 200px;
    max-width: 100%;
  }
}

.lux-large {
  height: 300px;
  width: 100%;

  img {
    height: 300px;
    max-width: 100%;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <media-image src="https://picsum.photos/400/300/?random" height="medium"></media-image>
  </div>
  ```
</docs>
