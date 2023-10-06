import { LitElement, html } from "https://unpkg.com/lit-html?module"

export class MyElement extends LitElement {
  static properties = {
    version: {},
  }

  constructor() {
    super()
    this.version = "STARTING"
  }

  render() {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
    `
  }
}
customElements.define("my-element", MyElement)

// <template functional>
//   <component
//     :is="props.type"
//     :class="['lux-text-style ', props.variation, data.class, data.staticClass]"
//     :style="[data.style, data.staticStyle]"
//     v-bind="data.attrs"
//     v-on="listeners"
//   >
//     <slot />
//   </component>
// </template>

// <script>
// /**
//  * Text style enhances text with additional visual meaning. For example, using
//  * disabled text to de-emphasize it from its surrounding text. Don’t use text
//  * styles only for aesthetic effect.
//  */
// export default {
//   name: "TextStyle",
//   status: "ready",
//   release: "1.0.0",
//   type: "Element",
//   props: {
//     /**
//      * The html element name used for the text
//      */
//     type: {
//       type: String,
//       default: "p",
//     },
//     /**
//      * Style variation to give additional meaning.
//      * `default, disabled, strong, positive, negative`
//      */
//     variation: {
//       type: String,
//       default: "default",
//       validator: value => {
//         return value.match(/(default|disabled|strong|emphasis|positive|negative|small|uppercase)/)
//       },
//     },
//   },
// }
// </script>

// <style lang="scss">
// // Design Tokens with local scope
// $positive-text: #7cb518;

// .lux-text-style {
//   @include reset;
//   @include stack-space($space-small);
//   color: $color-rich-black;
//   font-family: $font-family-text;
//   font-weight: $font-weight-regular;
//   font-size: $font-size-base;
//   line-height: $line-height-base;
//   @media #{$media-query-large} {
//     // This is how you’d use design tokens with media queries
//   }
//   &.disabled {
//     color: tint($color-rich-black, 40%);
//     text-decoration: line-through;
//   }
//   &.strong {
//     font-weight: $font-weight-semi-bold;
//   }
//   &.emphasis {
//     font-style: italic;
//   }
//   &.positive {
//     color: shade($positive-text, 20%);
//   }
//   &.negative {
//     color: $color-red;
//   }
//   &.small {
//     font-size: $font-size-x-small;
//   }
//   &.uppercase {
//     text-transform: uppercase;
//   }
// }
// </style>

// <docs>
//   ```jsx
//   <div>
//     <text-style variation="default">Design isn’t just about the look and feel. Design is how it works.</text-style>
//     <text-style variation="disabled">Design isn’t just about the look and feel.</text-style>
//     <text-style variation="strong">Design isn’t just about look and feel.</text-style>
//     <text-style variation="emphasis">Design is how it works.</text-style>
//   </div>
//   ```
// </docs>
