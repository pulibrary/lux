<template>
  <component :is="type" :class="['lux-library-header', theme]">
    <wrapper class="lux-header-content" :maxWidth="maxWidth">
      <library-logo :theme="value(theme)"></library-logo>
      <a class="lux-app-name" :href="appUrl" :title="appName" aria-labelledby="appName">
        <span id="appName" class="full-name">{{ appName }}</span>
        <span class="abbr-name">{{ abbrName }}</span>
      </a>
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
     * The abbreviation of the application or site's name
     */
    abbrName: {
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
     * Whether the header is dark, shade, or light. Default is set to dark.
     */
    theme: {
      type: String,
      default: "dark",
    },
  },
  methods: {
    value: function(theme) {
      return theme == "light" ? "light" : "dark"
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
  border-top: 3px solid $color-princeton-orange-on-black;
  font-family: $font-family-heading;
  position: relative;

  /deep/ .lux-main-menu {
    width: auto;
  }

  @media #{$media-query-medium-max} {
    /deep/ .lux-main-menu .lux-main-menu-list.lux-show {
      top: 50px;
    }
  }

  /deep/ .lux-main-menu .lux-submenu-toggle {
    @media #{$media-query-large} {
      color: $color-white;
    }
    padding-right: 25px;
  }

  /deep/ .lux-main-menu-list li:last-child ul {
    left: initial;
    right: 0;
  }

  /deep/ .lux-main-menu .lux-has-children ul {
    @media #{$media-query-large} {
      background: $color-white;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    a {
      color: $color-rich-black;

      &:hover,
      &:focus {
        color: $color-rich-black;
      }
    }
  }

  &.dark {
    background: $color-rich-black;

    @media #{$media-query-medium-max} {
      /deep/ .lux-main-menu a {
        color: $color-rich-black;
      }
    }

    @media #{$media-query-large} {
      /deep/ .lux-main-menu a,
      /deep/ .lux-main-menu button {
        color: $color-white;

        &:hover,
        &:focus {
          color: $color-white;
        }
      }
    }

    /deep/ .lux-main-menu .lux-submenu-toggle {
      background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjkyLjQgMjkyLjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5Mi40IDI5Mi40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODcsNjkuNGMtMy40LTMuNS04LjEtNS41LTEzLTUuNEgxOC40Yy01LDAtOS4zLDEuOC0xMi45LDUuNEMyLDcyLjcsMCw3Ny40LDAsODIuMmMwLDUsMS44LDkuMyw1LjQsMTIuOQoJbDEyOCwxMjcuOWMzLjYsMy42LDcuOCw1LjQsMTIuOCw1LjRzOS4yLTEuOCwxMi44LTUuNEwyODcsOTVjMy41LTMuNSw1LjQtNy44LDUuNC0xMi44cy0xLjktOS4yLTUuNS0xMi44TDI4Nyw2OS40eiIvPgo8L3N2Zz4K");

      @media #{$media-query-large} {
        color: white;
      }
    }
  }

  &.shade {
    background: $color-grayscale-darker;

    @media #{$media-query-medium-max} {
      /deep/ .lux-main-menu a {
        color: $color-rich-black;
      }
    }

    @media #{$media-query-large} {
      /deep/ .lux-main-menu a,
      /deep/ .lux-main-menu button {
        color: $color-white;

        &:hover,
        &:focus {
          color: $color-white;
        }
      }
    }

    /deep/ .lux-main-menu .lux-submenu-toggle {
      background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjkyLjQgMjkyLjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5Mi40IDI5Mi40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODcsNjkuNGMtMy40LTMuNS04LjEtNS41LTEzLTUuNEgxOC40Yy01LDAtOS4zLDEuOC0xMi45LDUuNEMyLDcyLjcsMCw3Ny40LDAsODIuMmMwLDUsMS44LDkuMyw1LjQsMTIuOQoJbDEyOCwxMjcuOWMzLjYsMy42LDcuOCw1LjQsMTIuOCw1LjRzOS4yLTEuOCwxMi44LTUuNEwyODcsOTVjMy41LTMuNSw1LjQtNy44LDUuNC0xMi44cy0xLjktOS4yLTUuNS0xMi44TDI4Nyw2OS40eiIvPgo8L3N2Zz4K");

      @media #{$media-query-large} {
        color: white;
      }
    }
  }

  &.light {
    background: $color-white;

    /deep/ .hamburger-inner,
    /deep/ .hamburger-inner:after,
    /deep/ .hamburger-inner:before {
      background-color: $color-rich-black;
    }

    @media #{$media-query-medium-max} {
      /deep/ .lux-main-menu a {
        color: $color-rich-black;
      }
    }

    @media #{$media-query-large} {
      /deep/ .lux-main-menu a,
      /deep/ .lux-main-menu button {
        color: $color-rich-black;

        &:hover,
        &:focus {
          color: $color-rich-black;
        }
      }
    }

    .lux-app-name:not(:empty) {
      color: $color-rich-black;
    }
  }
}

.lux-header-content {
  align-items: center;
  display: flex;
  padding: 0 $space-small;

  @media #{$media-query-large} {
    flex-direction: row;
    max-width: 1170px;
  }
}

.lux-app-name:not(:empty) {
  align-self: center;
  border-left: 0;
  color: $color-white;
  display: flex;
  font-size: $font-size-x-large;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 33px;
  padding-left: 1rem;
  text-align: center;
  text-decoration: none;

  @media #{$media-query-x-large} {
    border-left: 1px solid $color-grayscale-light;
    height: 35px;
    margin: 0 0 0 1rem;
    padding: 0 0 0 1rem;
    text-align: left;
  }

  .full-name {
    display: none;
  }

  @media #{$media-query-large} {
    .full-name {
      display: block;
      font-size: $font-size-large;
    }

    .abbr-name {
      display: none;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <library-header app-name="Leave and Travel Requests" abbr-name="LTR" app-url="https://catalog.princeton.edu" theme="dark">
      <menu-bar type="main-menu" :menu-items="[
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
