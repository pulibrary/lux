<template>
  <article
    :id="id"
    @click.capture="select($event)"
    class="lux-card"
    :class="[
      size,
      { 'lux-card-selected': selected },
      { 'lux-card-edited': edited },
      { 'lux-card-disabled': disabled },
    ]"
    v-bind:style="{ 'max-width': cardPixelWidth + 'px' }"
  >
    <slot />
  </article>
</template>

<script>
/**
 * Cards are used to apply a container around a related grouping of information.
 */
export default {
  name: "Card",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * Sets the id to reference this card with.
     */
    id: {
      type: String,
      default: "",
    },
    /**
     * Sets the URL linking to the card content
     */
    cardUrl: {
      type: String,
      default: "",
    },
    /**
     * Sets arbitrary card width. It's recommended to use size over this setting.
     */
    cardPixelWidth: {
      default: "",
    },
    /**
     * Sets the size of the card `small, medium, large, full-width`
     */
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return value.match(/(small|medium|large|full-width)/)
      },
    },
    /**
     * Indicates whether the card is selected.
     */
    selected: {
      type: Boolean,
      default: false,
    },
    /**
     * Indicates whether the object a card represents has been altered from its persisted form.
     */
    edited: {
      type: Boolean,
      default: false,
    },
    /**
     * Indicates the user cannot interact with the card.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Indicates the user cannot interact with the card.
     */
    cardTitle: {
      type: String,
      default: "",
    },
  },
  methods: {
    select: function(event) {
      this.$emit("card-click", event)
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-card {
  @include reset;
  @include stack-space($space-base);
  font-family: $font-family-text;
  line-height: $line-height-base;
  background: $color-white;
  box-shadow: $box-shadow-small;
  color: $color-rich-black;
  position: relative;

  &:active {
    cursor: move;
  }

  &:focus,
  &-selected {
    box-shadow: $box-shadow-selected;
  }

  &-edited {
    background: $color-princeton-orange-on-white;
  }

  &-disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }

  &.small {
    width: 200px;
  }

  &.medium {
    width: 300px;
  }

  &.large {
    width: 400px;
  }

  .lux-heading,
  .lux-text-style {
    padding: 0 1rem;
  }

  .lux-heading,
  .lux-text-style,
  .lux-media-image {
    pointer-events: none;
  }

  .lux-text-style {
    padding-bottom: 1rem;
  }
}

.full-width {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;

  .lux-card-media + .lux-card-header {
    padding-left: 0;
  }

  @media #{$media-query-large} {
    .lux-card-header {
      flex: 1;
    }
  }
}

.lux-card /deep/ .lux-link {
  color: $color-rich-black;
  outline: 0;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    pointer-events: auto;
    content: "";
    background-color: rgba(0, 0, 0, 0);
  }

  &:hover,
  &:focus {
    box-shadow: none;

    &::after {
      box-shadow: $box-shadow-selected;
      transition: box-shadow 0.2s ease;
    }
  }

  &:visited {
    color: $color-rich-black;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <!-- Card without sections -->
    <card id="a">
      <media-image src="https://picsum.photos/600/300/?random" height="medium" cover></media-image>
      <heading level="h2">Title</heading>
      <text-style variation="default">Design isn’t just about the look and feel. Design is how it works.</text-style>
    </card>

    <!-- Card with sections -->
    <card id="b" size="full-width">
      <card-media>
        <lux-icon-base width="50" height="50">
          <lux-icon-globe></lux-icon-globe>
        </lux-icon-base>
      </card-media>
      <card-header>
        <!-- Hyperlink is the text screen readers would read, we don't want to wrap the entire card -->
        <heading level="h2" size="h3"><hyperlink href="#">Code4Lib - Trip ID 1234</hyperlink></heading>
        <text-style>Jan 9, 2019 to Jan 16, 2019</text-style>
      </card-header>
      <card-content>
        <tag type="tag" :tag-items="[
          {name: 'Pending', color: 'yellow'}
          ]"
          horizontal="end"
          size="small"/>
        <text-style type="span" variation="small">Last Updated on Dec 15, 2018</text-style>
      </card-content>
    </card>
  </div>
  ```
</docs>
