<template>
  <component :is="type" class="index">
    <nav-bar active="Index" :navItems="[
      {name: 'Template', component: 'Index', href: '/#/'},
      {name: 'Living Docs', href: 'http://localhost:6060/'}
    ]"/>
    <wrapper>
      <heading level="h1">PUL Design System</heading>
      <text-style>The PUL Design System is a set of organized tools, patterns, and practices that work as the foundation for PUL web and application development. It aims to increase consistency, improve accessibility, reduce design debt, and accelerate the design and development process. It works as the foundation for your application development.</text-style>
    </wrapper>
  </component>
</template>

<script>
/**
 * Shows how to layout and structure a home page.
 */
export default {
  name: "Index",
  status: "deprecated",
  release: "1.0.0",
  metaInfo: {
    title: "PUL Design System",
    htmlAttrs: {
      lang: "en",
    },
  },
  props: {
    /**
     * The html element name used for the component.
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped>
// Design Tokens with local scope
$color-template-background: $color-university-black;
$color-template-background-top: tint($color-template-background, 5%);
$color-template-background-bottom: shade($color-template-background, 5%);
$color-template-text: $color-white;
$color-template-link: $color-blue;

.index {
  @include reset;
  @include inset-space($space-base);
  min-height: $space-xx-large * 4;
  background: $color-template-background;
  background: linear-gradient(0deg, $color-template-background-bottom, $color-template-background-top 100%);
  text-align: center;
  position: relative;
  float: left;
  height: 100%;
  width: 100%;
  @media #{$media-query-large} {
    // This is how you’d use design tokens with media queries
  }
  .heading {
    color: $color-template-text;
  }
  .text-style {
    color: $color-template-text;
  }
  .text-link {
    color: $color-template-link;
  }
  .wrapper {
    max-width: $space-xx-large * 4.5;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
  a {
    font-family: $font-family-text;
    color: $color-blue;
    text-decoration: underline;
  }
}
</style>

<docs>
  ```jsx
  <index />
  ```
</docs>
