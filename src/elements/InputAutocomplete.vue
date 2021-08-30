<template>
  <div class="lux-autocomplete">
    <label v-if="label" :class="{ 'lux-hidden': hideLabel }">{{ label }}</label>
    <div class="lux-autocomplete-input">
      <input
        id="displayInput"
        autocomplete="off"
        type="text"
        @input="onChange"
        v-model="search"
        @keydown.down="onArrowDown"
        @keydown.up="onArrowUp"
        @keydown.enter="onEnter"
        @keydown.esc="onEscape"
        @keydown.tab="onEscape"
        :required="required"
        v-focus="focused"
        @focus="focused = true"
        @blur="focused = false"
      />
      <ul v-show="isOpen" class="lux-autocomplete-results">
        <li class="loading" v-if="isLoading">Loading results...</li>
        <li
          v-else
          v-for="(result, i) in results"
          :key="i"
          @click="setResult(result)"
          class="lux-autocomplete-result"
          :class="{ 'is-active': i === arrowCounter }"
        >
          {{ result }}
        </li>
      </ul>
      <input :name="name" :id="id" type="hidden" :value="inputValue" data-input-value />
    </div>
  </div>
</template>

<script>
import { mixin as focusMixin } from "vue-focus"
/**
 * InputAutocomplete is a cross between a text input and select input.
 * This component is used to offer users suggested values that
 * filter upon typing, while also allowing them to enter free-form text for the value.
 * The id and name supplied to this component are applied to a hidden input field, which
 * will contain the preferred value for submission based on the structure of the `items` prop.
 */
export default {
  name: "InputAutocomplete",
  status: "prototype",
  release: "1.0.0",
  type: "Element",
  mixins: [focusMixin],
  props: {
    /**
     * The available items in the autocomplete. This can be a simple array of strings
     * or an array of objects with an id and a label, if id is needed.
     */
    items: {
      type: Array,
      required: false,
      default: "",
    },
    /**
     * The placeholder value for the form input field.
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * The default value for the form input field.
     */
    defaultValue: {
      type: String,
      default: "",
    },
    /**
     * The label of the form input field.
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Visually hides the label of the form input field.
     */
    hideLabel: {
      type: Boolean,
      default: false,
    },
    /**
     * The id of the form input field.
     */
    id: {
      type: String,
      default: "",
    },
    /**
     * The name of the form input field.
     */
    name: {
      type: String,
      default: "",
    },
    /**
     * Is the data given by an outside ajax request?
     */
    isAsync: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Whether the form input field is required or not.
     * `true, false`
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether the input is focused or not
     * `true, false`
     */
    focused: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      results: [],
      search: "",
      inputValue: "",
      isLoading: false,
      arrowCounter: -1,
    }
  },
  methods: {
    onChange() {
      // Let's warn the parent that a change was made
      this.$emit("input", this.search)

      // Is the data given by an outside ajax request?
      if (this.isAsync) {
        this.isLoading = true
      } else {
        // Data is sync, we can search our flat array
        this.filterResults()
        this.isOpen = true
      }
    },
    filterResults() {
      if (this.items.length && typeof this.items[0] === "object") {
        let preResults = this.items.filter(
          item => item.label.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
        this.results = preResults.map(x => x.label)
      } else {
        this.results = this.items.filter(
          item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        )
      }
    },
    setResult(result) {
      this.search = result
      this.inputValue = result
      this.isOpen = false

      if (this.items.length && typeof this.items[0] === "object") {
        // we need to search the input list for a matching label and return
        // an id if it's found
        let item = this.items.find(obj => {
          return obj.label === result
        })
        if (typeof item !== "undefined") {
          this.inputValue = item.id
        }
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1
      }
    },
    onEnter() {
      this.setResult(this.results[this.arrowCounter])
      this.isOpen = false
      this.arrowCounter = -1
    },
    onEscape() {
      this.setResult(this.search)
      this.isOpen = false
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.setResult(this.search)
        this.isOpen = false
        this.arrowCounter = -1
      }
    },
  },
  watch: {
    // Once the items content changes, it means the parent component
    // provided the needed data
    items: function(value, oldValue) {
      // we want to make sure we only do this when it's an async request
      if (this.isAsync) {
        this.results = value
        this.isOpen = true
        this.isLoading = false
      }
    },
  },
  created() {
    this.setResult(this.defaultValue)
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside)
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside)
  },
}
</script>

<style lang="scss">
// Design Tokens with local scope
$color-placeholder: tint($color-grayscale, 50%);

.lux-autocomplete {
  @include stack-space($space-small);
  font-weight: $font-weight-regular;
  font-family: $font-family-text;
  font-size: $font-size-base;
  line-height: $line-height-heading;
  position: relative;
  width: auto;

  &.lux-input-expand {
    width: 100%;
  }

  label {
    display: block;
    font-size: $font-size-base;
    color: tint($color-rich-black, 20%);
    @include stack-space($space-x-small);

    &.lux-hidden {
      @include visually-hidden;
    }
  }

  input {
    @include inset-squish-space($space-small);
    @include stack-space($space-small);
    appearance: none;
    -webkit-appearance: none;
    background: $color-white;
    border-radius: $border-radius-default;
    border: 0;
    color: set-text-color($color-rich-black, $color-white);
    font-family: $font-family-text;
    font-size: $font-size-base;
    font-weight: $font-weight-regular;
    line-height: $line-height-heading;
    margin: 0;
    transition: all 0.2s ease;
    width: 100%;

    &::-webkit-input-placeholder {
      -webkit-font-smoothing: antialiased;
      color: $color-placeholder;
    }
    &:-ms-input-placeholder {
      color: $color-placeholder;
    }
    &::-moz-placeholder {
      color: $color-placeholder;
      -moz-osx-font-smoothing: grayscale;
      opacity: 1;
    }

    &:hover,
    &[hover] {
      box-shadow: 0 1px 5px 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 60%);
    }
    &:focus,
    &[focus] {
      transition: box-shadow 0.2s ease;
      box-shadow: inset 0 0 0 1px $color-bleu-de-france, 0 0 0 1px $color-bleu-de-france;
      outline: 0;
    }
  }
}

.lux-autocomplete-input {
  @include reset;
  background: $color-white;
  border-radius: $border-radius-default;
  box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07), 0 0 0 1px tint($color-rich-black, 80%);
}

.lux-autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  overflow: auto;
  color: set-text-color($color-rich-black, $color-white);
  font-family: $font-family-text;
  font-size: $font-size-base;
  font-weight: $font-weight-regular;
  line-height: $line-height-heading;
  position: absolute;
  background: white;
  width: 100%;
  z-index: 999;
}

.lux-autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.lux-autocomplete-result.is-active,
.lux-autocomplete-result:hover {
  background: $color-grayscale-light;
  color: $color-rich-black;
}
</style>

<docs>
  ```jsx
  <div>
    <input-autocomplete id="example-1" label="Fruit" default-value="Banana" :items="[ 'Apple', 'Banana', 'Orange', 'Mango', 'Pear', 'Peach', 'Grape', 'Tangerine', 'Pineapple']" />
    <input-autocomplete id="example-2" label="Fruit with IDs" default-value="Banana" :items="[ {id: 1, label: 'Apple'}, {id: 2, label: 'Banana'}, {id: 3, label: 'Mango'}, {id: 4, label: 'Pineapple'}]" />
  </div>
  ```
</docs>
