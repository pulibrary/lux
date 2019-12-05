<template>
  <component :is="type" :class="['lux-library-header', theme]">
    <wrapper class="lux-header-content" :maxWidth="maxWidth">
      <library-logo :theme="theme"></library-logo>
      <a class="lux-app-name" :href="appUrl">{{ appName }}</a>
      <spacer></spacer>
      <slot />
    </wrapper>
  </component>
</template>

<script>
/**
 * LibraryHeader is the preferred Header styling/behavior for PUL websites.
 * Don't forget to create a fallback for this component by also providing the HTML
 * rendering in _<noscript></noscript>_ tags.
 */
export default {
  name: "LibraryHeader",
  status: "ready",
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
    /**
     * The maximum width of the wrapper. Default is set to 1170.
     */
    maxWidth: {
      type: Number,
      default: 1170,
    },
    /**
     * Whether the header is dark or light. Default is set to dark.
     */
    theme: {
      type: String,
      default: "dark",
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
.lux-library-header {
  @include reset;
  font-family: $font-family-heading;
  color: set-text-color($color-rich-black, $color-white);
  background: $color-grayscale-darker;
  padding: 0;
  border-top: 3px solid $color-princeton-orange-on-black;

  .lux-header-content {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: auto;
    padding: 0.5rem 1rem;

    @media #{$media-query-large} {
      max-width: 1170px;
    }

    .lux-app-name:not(:empty) {
      border-left: 0;
      color: $color-white;
      font-size: $font-size-large;
      font-weight: 400;
      height: 35px;
      letter-spacing: 1px;
      line-height: 33px;
      margin: 8px 0 0;
      text-decoration: none;
    }

    @media #{$media-query-medium} {
      flex-direction: row;

      /deep/ .lux-app-name:not(:empty) {
        border-left: 1px solid $color-grayscale-light;
        padding: 0 0 0 1rem;
        margin: 0 0 0 1rem;
      }
    }
  }

  /deep/ .lux-dropdown-menu .lux-dropdown {
    background: transparent;
    color: $color-white;
  }

  /deep/ .lux-dropdown-menu .lux-dropdown .lux-dropdown-indicator {
    color: $color-white;
  }

  /deep/ .lux-nav {
    min-width: 100px;
    top: 37px;
    right: 0;
    width: auto;
  }

  /deep/ .lux-nav a {
    color: $color-white;
    white-space: nowrap;

    &:hover,
    &:focus {
      color: $color-white;
      text-decoration: underline;
    }
  }

  &.light {
    color: set-text-color($color-white, $color-rich-black);
    background: $color-white;

    .lux-app-name:not(:empty) {
      color: $color-rich-black;
    }

    /deep/ .lux-dropdown-menu .lux-dropdown {
      background: transparent;
      color: $color-rich-black;
    }

    /deep/ .lux-dropdown-menu .lux-dropdown .lux-dropdown-indicator {
      color: $color-rich-black;
    }

    /deep/ .lux-nav a {
      color: $color-rich-black;

      &:hover,
      &:focus {
        color: $color-rich-black;
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <library-header app-name="Catalog" app-url="https://catalog.princeton.edu" theme="light">
      <menu-bar type="links" :menu-items="[
          {name: 'Help', component: 'Help', href: '/help/'},
          {name: 'Feedback', component: 'Feedback', href: '/feedback/'},
          {name: 'Your Account', component: 'Account', href: '/account/'}
        ]"
      ></menu-bar>
    </library-header>
  </div>
  ```

  ```jsx noeditor
  <div class="dos-n-donts">
    <div class="do">
      <div class="do-dont-example">
        <library-header></library-header>
        <noscript>Place fallback header here.</noscript>
      </div>
      <p>Make sure users with JavaScript disabled can see important parts of the page by using &lt;noscript&gt; tags.</p>
    </div>

    <div class="dont">
      <div class="do-dont-example">
        <spacer></spacer>
        <p>? ? ? </p>
        <spacer></spacer>
      </div>
      <p>JavaScript-disabled browsers won't see any branding and may be missing important functionality.</p>
    </div>
  </div>
  ```
</docs>
