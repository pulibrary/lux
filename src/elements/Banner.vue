<template>
  <div v-if="show" :class="['lux-banner', { 'lux-banner-fullscreen': isFullScreen }]">
    <div class="lux-announcement open" role="alert">
      <wrapper maxWidth="1125">
        <button
          v-if="dismissible"
          type="button"
          class="lux-announcement__close"
          data-dismiss="alert"
          aria-label="Close"
          @click="hideBanner()"
        >
          <span aria-hidden="true">×</span>
        </button>
        <slot>{{ bannerMessage }}</slot>
      </wrapper>
    </div>
  </div>
</template>

<script>
import VueCookies from "vue-cookies"

/**
 * Banners are used to provide timely, general information to users of a website or app.
 */
export default {
  name: "Banner",
  status: "prototype",
  release: "2.16.3",
  type: "Element",
  metaInfo: {
    title: "Global alert message to user.",
    htmlAttrs: {
      lang: "en",
    },
  },
  data: function() {
    return {
      bannerMessage: "This is the announcement description.",
      show: true,
    }
  },
  computed: {
    isFullScreen() {
      return this.fullscreen === "true" ? true : false
    },
  },
  props: {
    /**
     * Allows the banner to act as an overlay, near the top of the screen.
     */
    fullscreen: {
      type: Boolean,
      default: false,
    },
    /**
     * User can manually hide the notification.
     */
    dismissible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideBanner() {
      this.show = false
      VueCookies.set("showBanner", false)
    },
  },
  created: function() {
    if (VueCookies.isKey("showBanner")) {
      this.show = VueCookies.get("showBanner") === "true"
    }
  },
}
</script>

<style lang="scss">
.lux-banner-fullscreen {
  position: fixed;
  top: 5vh;
  left: 50%; /* move the left edge to the center … */
  margin-left: -25vw !important; /* … and move it to the left half the box’ width. */
  z-index: 9999;
  width: 50vw;
}

.lux-banner {
  @include reset;
  font-family: $font-family-text;
}

.lux-banner-dismissible > span {
  width: calc(100% - 25px);
  display: inline-block;
}

.lux-banner-dismissible .lux-banner__close {
  position: absolute;
  top: -4px;
  right: -5px;
  padding: 0.75rem 1.25rem;
  color: inherit;
}

.lux-announcement {
  position: relative;
  background: #1da3ff;
  color: white;
  padding: 1.5rem 0.5rem 0.5rem 0.5rem;
  transition: 0.2s;
  z-index: 1;

  a {
    color: white;
    transition: 0.25s ease;

    &:hover {
      opacity: 0.75;
    }
  }

  button.lux-announcement__close {
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
    -webkit-appearance: none;
  }

  &__close {
    position: absolute;
    right: 15px;
    top: 5px;
    font-size: 18px;
    width: 25px;
    height: 25px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    color: white;
    opacity: 0.65;
    transition: 0.25s ease;

    &:hover {
      opacity: 1;
    }
  }
}

.open {
  top: 0;
}
</style>

<docs>
  ```jsx
  <div>
    <banner dismissible>
      <h2>Fall Semester Announcements</h2>
      <p>We’re currently in beta for students and will be introducing faculty, advisor and staff functionality in the coming months.</p>
    </banner>
  </div>
  ```
</docs>
