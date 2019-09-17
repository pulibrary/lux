<template>
  <ul class="lux-tag" :class="[type]">
    <li class="lux-tag-item" v-for="(item, index) in tagItems">
      <a :key="index" :href="item.href" :class="['lux-tag-item']">
        <span v-html="item.name"></span>
        <span v-if="type === 'filter'" class="append-icon">
          <lux-icon-base width="14" height="14">
            <lux-icon-denied></lux-icon-denied>
          </lux-icon-base>
        </span>
      </a>
    </li>
  </ul>
</template>

<script>
/**
 * Tags are compact elements used for items that need to be labeled or categorized
 * using keywords that describe them. Tags are also used to represent applied filters.
 *
 * Multiple or single tags can be used to categorize items.
 */
export default {
  name: "Tag",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The type of tag. The `filter` option includes
     * a remove icon inside the tag.
     */
    type: {
      type: String,
      default: "tag",
      validator: value => {
        return value.match(/(tag|filter)/)
      },
    },
    /**
     * Tag items are tags to be displayed to the user.
     * You can pass a `name` and `href` in a tag-items array.
     */
    tagItems: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style lang="scss">
.lux-tag {
  @include reset;
  @include stack-space($space-base);
  font-family: $font-family-heading;
  line-height: $line-height-heading;
  color: $color-rich-black;

  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;

  a,
  a:visited {
    font-size: $font-size-small;
    font-weight: 400;
    line-height: 1rem;
    letter-spacing: 0.32px;
    display: inline-flex;
    align-items: flex-start;
    padding: 7px 12px;
    margin: 0.25rem;
    border-radius: $border-radius-pill;
    border: 1px solid;
    text-decoration: none;
    color: $color-rich-black;
    min-height: 32px;
    background: $color-white;
  }

  span {
    vertical-align: middle;
  }

  .lux-icon {
    margin: 0 0 0 6px;
  }
}

.tag {
  a:hover,
  a:focus {
    border-color: $color-bleu-de-france-dark;
    color: $color-bleu-de-france-dark;
  }
}

.filter {
  a:hover,
  a:focus {
    color: $color-white;
    background: $color-red;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <tag type="tag" :tag-items="[
      {name: 'Cats', href: '/tags/cats'},
      {name: 'Dogs', href: '/tags/dogs'}
      ]"/>

     <tag type="filter" :tag-items="[
      {name: 'Cats', href: '/tags/cats'},
      {name: 'Dogs', href: '/tags/dogs'}
      ]"/>
  </div>
  ```
</docs>
