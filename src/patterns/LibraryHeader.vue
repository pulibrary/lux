<template>
  <component :is="type" :class="['library-header ', variation]">
    <wrapper class="header-content">
      <library-logo></library-logo>
      <a class="app-name" :href="appUrl">{{appName}}</a>
      <spacer></spacer>
      <slot/>
    </wrapper>
  </component>
</template>

<script>
/**
 * “Example Component” is used to visually communicate core parts of the product and available actions.
 */
export default {
  name: "LibraryHeader",
  status: "prototype",
  release: "1.0.0",
  type: "Pattern",
  props: {
    /**
     * The html element name used for the container
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * The name of the application or site
     */
    appName: {
      type: String,
      default: "",
    },
    /**
     * The URL of landing page for the application or site
     */
    appUrl: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
/**
 * Styles in a top-level App component and in layout components may be global,
 * but all other components should always be scoped (using either scoped
 * attribute or class based scoping).
 */
.library-header {
  @include reset;
  @include stack-space($space-small);
  font-family: $font-family-heading;
  background: $color-grayscale-darker;
  color: set-text-color($color-rich-black, $color-white);

  padding: 0 24px;

  border-top: 3px solid $color-princeton-orange-on-black;
  @media #{$media-query-medium} {
    @include stack-space($space-base);
  }

  .header-content {
    align-items: center;
    display: flex;
    width: auto;
    padding: 8px;

    .app-name {
      border-left: 1px solid $color-grayscale-light;
      color: $color-white;
      font-size: $font-size-x-large;
      font-weight: 400;
      height: 35px;
      letter-spacing: 1px;
      line-height: 33px;
      margin-left: 1rem;
      padding-left: 1rem;
      text-decoration: none;
    }
  }

  /deep/ .nav {
    width: auto;
  }

  /deep/ .nav a {
    color: $color-white;

    &:hover,
    &:focus {
      color: $color-white;
      text-decoration: underline;
    }
  }
}
</style>

<docs>
  ```jsx
  <library-header app-name="Catalog" app-url="https://catalog.princeton.edu">
  <menu-bar type="nav" :menu-items="[
      {name: 'Help', component: 'Help', href: '/help/'},
      {name: 'Feedback', component: 'Feedback', href: '/feedback/'},
      {name: 'Your Account', component: 'Account', href: '/account/'}
    ]"/>
  </library-header>
  ```
</docs>
