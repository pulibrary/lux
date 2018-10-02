<template>
  <component :is="type" class="lux-not-found">
    <menu-bar active="NotFound" :menuItems="[
      {name: 'Template', component: 'Index', href: '/#/'},
      {name: 'Living Docs', href: 'http://localhost:6060/'}
    ]"/>
    <wrapper>
      <heading level="h1">404 Error</heading>
      <text-style>Couldn’t find a component or page that matches the URL you entered. Double check configuration in router/index.js.</text-style>
    </wrapper>
  </component>
</template>

<script>
/**
 * Shows how to layout and structure an error page.
 */
export default {
  name: "NotFound",
  status: "prototype",
  release: "1.0.0",
  type: "Template",
  metaInfo: {
    title: "Page Not Found | LUX Design System",
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
$color-template-background: $color-rich-black;
$color-template-background-top: tint($color-template-background, 5%);
$color-template-background-bottom: shade($color-template-background, 5%);
$color-template-text: $color-white;
$color-template-link: $color-bleu-de-france;

.lux-not-found {
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
  .lux-heading {
    color: $color-template-text;
  }
  .lux-text-style {
    color: $color-template-text;
  }
  .lux-text-link {
    color: $color-template-link;
  }
  .lux-wrapper {
    max-width: $space-xx-large * 4.5;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
}
</style>

<docs>
  ```jsx
  <not-found />
  ```
</docs>
