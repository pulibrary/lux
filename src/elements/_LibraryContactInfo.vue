<template>
  <component :is="type" class="lux-library-contact">
    <div itemscope itemtype="http://schema.org/Organization">
      <h2 itemprop="name">Princeton University Library</h2>
      <div itemscope itemtype="http://schema.org/PostalAddress">
        <span itemprop="streetAddress">One Washington Road</span> <br>
        <span itemprop="addressLocality">Princeton</span>, <span itemprop="addressRegion">NJ</span> <span itemprop="postalCode">08544</span> <span itemprop="addressCountry">USA</span>
      </div>
      <span itemprop="telephone"><a href="tel:1-609-258-1470">(609) 258-1470</a></span>
    </div>
    <ul class="icons">
      <li><a href="http://www.facebook.com/PULibrary"><logo-facebook /></a></li>
      <li><a href="http://twitter.com/PULibrary"><logo-twitter /></a></li>
      <li><a href="https://libguides.princeton.edu/usgovdocs"><logo-gov-docs width="24" height="24" /></a></li>
      <li><a href="https://fpul.princeton.edu/"><logo-friends width="87" height="24" /></a></li>
    </ul>
  </component>
</template>

<script>
/**
 * Used to show Library's contact information, including address and phone, is
 * clear and in the footer.
 */
export default {
  name: "LibraryContactInfo",
  status: "ready",
  release: "1.0.0",
  type: "Element",
  props: {
    /**
     * The html element name used for the wrapper.
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped>
.lux-library-contact {
  @include reset;
  @include stack-space($space-x-small);
  font-family: $font-family-heading;
  font-size: $font-size-small;
  line-height: $line-height-base;
  color: $color-rich-black;

  a {
    text-decoration: none;
    color: $color-rich-black;
  }

  h2 {
    color: $color-rich-black;
    font-family: $font-family-heading;
    font-size: $font-size-base;
    font-weight: $font-weight-bold;
    line-height: $line-height-heading;
  }
}

.icons {
  list-style-type: none;
  margin: 8px 0 0;
  padding: 0;

  li {
    display: inline;
  }
}
</style>


<docs>
  ```jsx
  <library-contact-info type="div"></library-contact-info>
  ```
</docs>
