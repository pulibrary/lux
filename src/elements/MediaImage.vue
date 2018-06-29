<template>
  <div class="media-image" :class="[height, {'default-thumbnail': !src}]">
    <img v-if="src" :src="src" :alt="alt">
    <svg-icon v-else name="pul-icon-data-file" fill="rgb(225,225,225)" width="55px"></svg-icon>
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
     * The alternative text describing the image
     */
    alt: {
      type: String,
      default: "",
    },
    /**
     * Manually define the heiht of the image for a card
     */
    height: {
      type: String,
      default: "medium",
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

  img {
    background-color: $color-grayscale-lighter;
    max-width: 100%;
    vertical-align: middle;
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
