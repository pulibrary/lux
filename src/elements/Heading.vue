<template>
  <component :is="level" class="lux-heading" :class="{'lux-hidden': hidden}">
    <slot/>
  </component>
</template>

<script>
/**
 * Headings are used as the titles of each major section of a page in the
 * interface. For example, templates generally use headings as their title.
 * Heading element provides an option to change the level of the heading.
 */
export default {
  name: "Heading",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The heading level used for the heading.
     * `h1, h2, h3, h4, h5, h6`
     */
    level: {
      type: String,
      default: "h1",
      validator: value => {
        return value.match(/(h1|h2|h3|h4|h5|h6)/)
      },
    },
    /**
     * Whether the heading is visually hidden or not.
     * `true, false`
     */
    hidden: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-heading {
  @include reset;
  @include stack-space($space-base);
  font-family: $font-family-heading;
  line-height: $line-height-heading;
  color: $color-rich-black;
}

.lux-hidden {
  @include visually-hidden;
}

h1 {
  @include responsive-font(3vw, $font-size-xxx-large-min, $font-size-xxx-large-max, $font-size-xxx-large);
  letter-spacing: $letter-spacing-x-small;
  font-weight: $font-weight-bold;
}

h2 {
  @include responsive-font(2.5vw, $font-size-xx-large-min, $font-size-xx-large-max, $font-size-xx-large);
  letter-spacing: $letter-spacing-small;
  font-weight: $font-weight-bold;
}

h3 {
  @include responsive-font(2vw, $font-size-x-large-min, $font-size-x-large-max, $font-size-x-large);
  font-weight: $font-weight-bold;
}

h4 {
  @include responsive-font(1.5vw, $font-size-large-min, $font-size-large-max, $font-size-large);
  font-weight: $font-weight-semi-bold;
}

h5 {
  @include responsive-font(1vw, $font-size-base-min, $font-size-base-max, $font-size-base);
  font-weight: $font-weight-regular;
}

h6 {
  font-size: $font-size-small;
  font-weight: $font-weight-regular;
}
</style>

<docs>
  ```jsx
  <div>
    <heading level="h1" hidden>The quick brown fox</heading>
    <heading level="h2">The quick brown fox</heading>
    <heading level="h3">The quick brown fox</heading>
    <heading level="h4">The quick brown fox</heading>
  </div>
  ```

  ```jsx noeditor
  <div class="dos-n-donts">
    <div class="do">
      <div class="do-dont-example">
        <heading level="h1">Do this.</heading>
        <heading level="h2">Do this.</heading>
      </div>
      <p>Nest headings appropriately by level.</p>
    </div>

    <div class="dont">
      <div class="do-dont-example">
        <heading level="h2">Don't do this.</heading>
        <heading level="h1">Don't do this.</heading>
      </div>
      <p>If you nest headings out of order or skip levels, the lack of organization of content on the page will confuse users.</p>
    </div>
  </div>
  ```

</docs>
