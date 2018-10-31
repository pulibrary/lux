<template>
  <img v-if="isIE" :src="currPath" :aria-label="ariaLabel" class="lux-logo-svg" :width="width" :height="height" :style="{ fill: fill }"/>
  <component v-else :is="type" :aria-label="ariaLabel" class="lux-svg-icon">
  </component>
</template>

<script>
const req = require("../utils/icon-loader")
let cache = new Map()

/**
 * These icons will not work well in IE. Please use IconBase with one of the icons from the library.
 * Icons are used to visually communicate core parts of the product and
 * available actions. Please be aware that all elements must have closing tags (not "self-closing").
 * To add additional icons, please consult [the instructions](/#!/Adding%20Icons).
 */
export default {
  name: "SvgIcon",
  status: "deprecated",
  release: "1.0.0",
  type: "Element",
  data: function() {
    return {
      currPath: req("./" + this.name + ".svg"),
      isIE: false,
    }
  },
  props: {
    /**
     * The optional src of the svg.
     */
    src: {
      required: false,
      default: "ready",
    },
    /**
     * The name of the icon to display.
     */
    name: {
      required: true,
      default: "ready",
    },
    /**
     * Descriptive text to be read to screenreaders. Do not include if use of
     * icon is decorative.
     */
    ariaLabel: {
      type: String,
      default: "",
    },
    /**
     * The html element name used for the icon.
     */
    type: {
      type: String,
      default: "span",
    },
    /**
     * The fill color of the SVG icon.
     */
    fill: {
      type: String,
      default: "rgb(0, 17, 35)",
    },
    /**
     * The width of the icon. For square icons use values of `11px, 13px,
     * 16px, 24px, 36px, 48px, 64px` to follow visual heirachy set by
     * typography.
     */
    width: {
      required: true,
      type: String,
      default: "16px",
    },
    /**
     * The height of the icon. For square icons use values of `11px, 13px,
     * 16px, 24px, 36px, 48px, 64px` to follow visual heirachy set by
     * typography.
     */
    height: {
      required: true,
      type: String,
      default: "16px",
    },
  },
  methods: {
    detectIE: function() {
      var ua = window.navigator.userAgent

      // Test values; Uncomment to check result …

      // IE 10
      // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

      // IE 11
      // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

      // Edge 12 (Spartan)
      // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

      // Edge 13
      // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

      var msie = ua.indexOf("MSIE ")
      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10)
      }

      var trident = ua.indexOf("Trident/")
      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf("rv:")
        return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10)
      }

      var edge = ua.indexOf("Edge/")
      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10)
      }

      // other browser
      return false
    },
  },
  async mounted() {
    // this.currPath = req("./" + this.name + ".svg")
    var version = this.detectIE()
    // if it's not IE we can use svg with innerHTML
    if (version === false || version >= 12) {
      this.isIE = false
      let currPath = req("./" + this.name + ".svg")
      if (!cache.has(currPath)) {
        try {
          cache.set(currPath, fetch(currPath).then(r => r.text()))
        } catch (e) {
          cache.delete(currPath)
        }
      }
      if (cache.has(currPath)) {
        this.$el.innerHTML = await cache.get(currPath)
        this.$el.children[0].style.fill = this.fill
        this.$el.children[0].style.width = this.width
        this.$el.children[0].style.height = this.height
      }
    } else {
      this.isIE = true
    }
  },
}
</script>

<style lang="scss" scoped>
.lux-svg-icon {
  display: inline-flex;
  align-self: center;

  svg {
    top: 0.125em;
    position: relative;
  }
}
.lux-logo-svg {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  height: 20.58823529px;
  width: auto;
}
</style>

<docs>
  ```jsx
  <div>
    <svg-icon name="deprecated" fill="rgb(44, 110, 175)" ariaLabel="add item" width="48px" height="48px"></svg-icon>
    <svg-icon name="ready" width="48px" height="48px"></svg-icon>
  </div>
  ```
</docs>
