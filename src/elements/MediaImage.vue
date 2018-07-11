<template>
  <div class="media-image" :class="[height, {'default-thumbnail': !src}]">
    <img v-if="src" :src="src" :alt="alt" :class="[{'cover': cover}, {'contain': contain}]">
    <svg-icon v-else name="pul-icon-file" fill="rgb(225,225,225)" width="64px" height="64px"></svg-icon>
  </div>
</template>

<script>
/**
 * Cards are used to apply a container around a related grouping of information.
 */
export default {
  name: "MediaImage",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
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
.media-image {
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

  .cover {
    object-fit: cover;
  }

  .contain {
    object-fit: contain;
  }

  &.default-thumbnail {
    background: $color-grayscale;
    display: flex;
    align-items: center;

    .svg-icon,
    svg {
      display: block;
      margin: auto;
    }
  }
}

.small {
  height: 100px;
  width: 100%;

  img {
    height: 100px;
    max-width: 100%;
  }
}

.medium {
  height: 200px;
  width: 100%;

  img {
    height: 200px;
    max-width: 100%;
  }
}

.large {
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
  <media-image src="https://picsum.photos/400/300/?random" height="medium"></media-image>
  ```
</docs>
