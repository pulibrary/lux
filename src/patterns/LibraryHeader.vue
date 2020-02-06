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
      letter-spacing: 1px;
      line-height: 33px;
      margin: 8px 0 0;
      text-decoration: none;
      text-align: center;

      @media #{$media-query-x-large} {
        height: 35px;
        text-align: left;
      }
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

  &.dark /deep/ .lux-nav .lux-has-children {
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjkyLjQgMjkyLjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5Mi40IDI5Mi40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODcsNjkuNGMtMy40LTMuNS04LjEtNS41LTEzLTUuNEgxOC40Yy01LDAtOS4zLDEuOC0xMi45LDUuNEMyLDcyLjcsMCw3Ny40LDAsODIuMmMwLDUsMS44LDkuMyw1LjQsMTIuOQoJbDEyOCwxMjcuOWMzLjYsMy42LDcuOCw1LjQsMTIuOCw1LjRzOS4yLTEuOCwxMi44LTUuNEwyODcsOTVjMy41LTMuNSw1LjQtNy44LDUuNC0xMi44cy0xLjktOS4yLTUuNS0xMi44TDI4Nyw2OS40eiIvPgo8L3N2Zz4K");
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

  /deep/ .lux-nav-children {
    background: $color-white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 3px;

    a {
      color: $color-rich-black;

      &:hover,
      &:focus {
        color: $color-rich-black;
        text-decoration: underline;
      }
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
          {name: 'Your Account', component: 'Account', href: '/account/', children: [
            {name: 'Logout', component: 'Logout', href: '/account/'}
          ]}
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
