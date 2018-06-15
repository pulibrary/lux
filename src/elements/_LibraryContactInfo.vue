<template>
  <component :is="type" class="library-contact">
    <div itemscope itemtype="http://schema.org/Organization">
      <span itemprop="name">Princeton University Library</span> 
      <div itemscope itemtype="http://schema.org/PostalAddress">
        <span itemprop="streetAddress">One Washington Road</span> <br>
        <span itemprop="addressLocality">Princeton</span>, <span itemprop="addressRegion">NJ</span> <span itemprop="postalCode">08544</span> <span itemprop="addressCountry">USA</span>
      </div>
      <span itemprop="telephone"><a href="tel:1-609-258-1470">(609) 258-1470</a></span>
    </div>
    <!-- icons (facebook, twitter, govdocs, friends) -->
  </component>
</template>

<script>
/**
 * Used to show Library's contact information, including address and phone, is
 * clear and in the footer.
 */
export default {
  name: "LibraryContactInfo",
  status: "review",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The html element name used for the wrapper.
     */
    type: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
.library-contact {
  @include reset;
  @include stack-space($space-base);
  font-family: $font-family-heading;
  font-size: $font-size-x-small;
  line-height: $line-height-heading;
  color: $color-rich-black;
}
</style>


<docs>
  ```jsx
  <library-contact-info type="div"></library-contact-info>
  ```
</docs>
