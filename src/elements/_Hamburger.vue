<template>
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</template>

<script>
/**
 * Used to show Library's contact information, including address and phone, is
 * clear and in the footer.
 */
export default {
  name: "Hamburger",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The html element name used for the wrapper.
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped>
// Hamburger
// ==================================================
$hamburger-padding-x: 15px !default;
$hamburger-padding-y: 15px !default;
$hamburger-layer-width: 40px !default;
$hamburger-layer-height: 4px !default;
$hamburger-layer-spacing: 6px !default;
$hamburger-layer-color: #fff !default;
$hamburger-layer-border-radius: 4px !default;
$hamburger-hover-opacity: 0.7 !default;
$hamburger-active-layer-color: $hamburger-layer-color !default;
$hamburger-active-hover-opacity: $hamburger-hover-opacity !default;

$hamburger-hover-use-filter: false !default;
$hamburger-hover-filter: opacity(50%) !default;
$hamburger-active-hover-filter: $hamburger-hover-filter !default;

.hamburger {
  padding: $hamburger-padding-y $hamburger-padding-x;
  display: inline-block;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  // Normalize (<button>)
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    @if $hamburger-hover-use-filter == true {
      filter: $hamburger-hover-filter;
    } @else {
      opacity: $hamburger-hover-opacity;
    }
  }

  &.is-active {
    &:hover {
      @if $hamburger-hover-use-filter == true {
        filter: $hamburger-active-hover-filter;
      } @else {
        opacity: $hamburger-active-hover-opacity;
      }
    }

    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: $hamburger-active-layer-color;
    }
  }
}

.hamburger-box {
  width: $hamburger-layer-width;
  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: $hamburger-layer-height / -2;

  &,
  &::before,
  &::after {
    width: $hamburger-layer-width;
    height: $hamburger-layer-height;
    background-color: $hamburger-layer-color;
    border-radius: $hamburger-layer-border-radius;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }

  &::after {
    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }
}

.hamburger-inner {
  transition-duration: 0.075s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

  &::before {
    transition: top 0.075s 0.12s ease, opacity 0.075s ease;
  }

  &::after {
    transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
}

.is-active {
  .hamburger-inner {
    transform: rotate(45deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

    &::before {
      top: 0;
      opacity: 0;
      transition: top 0.075s ease, opacity 0.075s 0.12s ease;
    }

    &::after {
      bottom: 0;
      transform: rotate(-90deg);
      transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <hamburger></hamburger>
  </div>
  ```
</docs>
