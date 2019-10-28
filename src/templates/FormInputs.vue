<template>
  <component :is="type" class="lux-form-inputs">
    <wrapper>
      <grid-container>
        <grid-item>
          <search-box>
            <input-text
              id="foo"
              name="value"
              label="Search"
              :hide-label="true"
              placeholder="Find all the things"
              size="small"
            ></input-text>
            <input-button type="button" variation="icon" icon="search" size="small"></input-button>
          </search-box>
          <search-box>
            <input-text
              id="foo"
              name="value"
              label="Search"
              :hide-label="true"
              placeholder="Find all the things"
            ></input-text>
            <input-button type="button" variation="icon" icon="search"></input-button>
          </search-box>
          <search-box>
            <input-text
              id="foo"
              name="value"
              label="Search"
              :hide-label="true"
              placeholder="Find all the things"
              size="large"
            ></input-text>
            <input-button type="button" variation="icon" icon="search" size="large"></input-button>
          </search-box>
        </grid-item>
      </grid-container>
      <grid-container>
        <grid-item>
          <input-text
            id="foo"
            name="value"
            label="Input"
            :hide-label="true"
            placeholder="Write your text"
            helper="This is helper text to help the user fill out this field"
            required
            size="small"
          ></input-text>
          <input-text
            id="foo"
            name="value"
            label="Input"
            :hide-label="true"
            placeholder="Write your text"
            helper="This is helper text to help the user fill out this field"
            required
          ></input-text>
          <input-text
            id="foo"
            name="value"
            label="Input"
            :hide-label="true"
            placeholder="Write your text"
            helper="This is helper text to help the user fill out this field"
            required
            size="large"
          ></input-text>
        </grid-item>
        <grid-item>
          <!-- with icons -->
          <input-text
            id="foo"
            name="value"
            :hide-label="true"
            label="Icon"
            placeholder="Write your text"
            icon="alert"
          ></input-text>
        </grid-item>

        <grid-item>
          <input-select
            label="Select..."
            id="myChoice"
            name="myChoice"
            :hide-label="true"
            value="bar"
            :options="[{ label: 'opt 1', value: 'foo' }, { label: 'opt 2', value: 'bar' }]"
            size="small"
          ></input-select>
          <input-select
            label="Select..."
            id="myChoice"
            name="myChoice"
            :hide-label="true"
            value="bar"
            :options="[{ label: 'opt 1', value: 'foo' }, { label: 'opt 2', value: 'bar' }]"
          ></input-select>
          <input-select
            label="Select..."
            id="myChoice"
            name="myChoice"
            :hide-label="true"
            value="bar"
            size="large"
            :options="[{ label: 'opt 1', value: 'foo' }, { label: 'opt 2', value: 'bar' }]"
          ></input-select>
        </grid-item>
        <grid-item>
          <dropdown-menu
            type="links"
            button-label="Options"
            :menu-items="[
              { name: 'Vegetable', component: 'Vegetable', disabled: true },
              { name: 'Fruit', component: 'Fruit' },
              { name: 'Apple', component: 'Apple', parent: 'Fruit' },
              { name: 'Lettuce', component: 'Lettuce', parent: 'Vegetable' },
              { name: 'Carrot', component: 'Carrot', parent: 'Vegetable' },
              { name: 'Pear', component: 'Pear', parent: 'Fruit' },
            ]"
            size="small"
          ></dropdown-menu>
          <dropdown-menu
            type="links"
            button-label="Options"
            :menu-items="[
              { name: 'Vegetable', component: 'Vegetable', disabled: true },
              { name: 'Fruit', component: 'Fruit' },
              { name: 'Apple', component: 'Apple', parent: 'Fruit' },
              { name: 'Lettuce', component: 'Lettuce', parent: 'Vegetable' },
              { name: 'Carrot', component: 'Carrot', parent: 'Vegetable' },
              { name: 'Pear', component: 'Pear', parent: 'Fruit' },
            ]"
          ></dropdown-menu>
          <dropdown-menu
            type="links"
            button-label="Options"
            size="large"
            :menu-items="[
              { name: 'Vegetable', component: 'Vegetable', disabled: true },
              { name: 'Fruit', component: 'Fruit' },
              { name: 'Apple', component: 'Apple', parent: 'Fruit' },
              { name: 'Lettuce', component: 'Lettuce', parent: 'Vegetable' },
              { name: 'Carrot', component: 'Carrot', parent: 'Vegetable' },
              { name: 'Pear', component: 'Pear', parent: 'Fruit' },
            ]"
          ></dropdown-menu>
        </grid-item>
        <grid-item>
          <input-text id="foe" name="value" label="Textarea" type="textarea"></input-text>
        </grid-item>
      </grid-container>

      <date-picker id="dateRange" name="daterange" label="Date Range" mode="range" size="small" />
      <date-picker id="dateRange" name="daterange" label="Date Range" mode="range" />
      <date-picker id="dateRange" name="daterange" label="Date Range" mode="range" size="large" />

      <input-radio
        id="foo"
        vertical
        groupLabel="Where is my mind?"
        :options="[
          { name: 'radio-group-name', value: 'In the clouds', id: 'radio-opt1', required: true },
          { name: 'radio-group-name', value: 'I don\'t know', id: 'radio-opt2', disabled: true },
        ]"
      ></input-radio>

      <input-checkbox
        groupLabel="Where is my mind?"
        :options="[
          { name: 'opt 1', value: 'In the clouds', id: 'checkbox-opt1', required: true },
          { name: 'opt 2', value: 'I don\'t know', id: 'checkbox-opt2', disabled: true },
        ]"
      ></input-checkbox>

      <input-button
        type="button"
        variation="icon"
        size="small"
        icon="search"
        hideLabel
      ></input-button>
      <input-button type="button" variation="icon" icon="search" hideLabel></input-button>
      <input-button
        type="button"
        variation="icon"
        size="large"
        icon="search"
        hideLabel
      ></input-button>

      <input-button variation="solid" size="small">Apply Changes</input-button>
      <input-button variation="solid">Apply Changes</input-button>
      <input-button variation="solid" size="large">Apply Changes</input-button>

      <tag
        type="tag"
        :tag-items="[
          { name: 'Cats', href: '/tags/cats', color: 'red', icon: 'denied' },
          { name: 'Cats', href: '/tags/cats', color: 'yellow', icon: 'alert' },
          { name: 'Cats', href: '/tags/cats', color: 'green', icon: 'approved' },
          { name: 'Cats', href: '/tags/cats', color: 'blue' },
          { name: 'Cats', color: 'blue' },
        ]"
      />

      <tag
        type="filter"
        size="small"
        :tag-items="[{ name: 'Cats', href: '/tags/cats' }, { name: 'Dogs', href: '/tags/dogs' }]"
      />
      <tag
        type="filter"
        :tag-items="[{ name: 'Cats', href: '/tags/cats' }, { name: 'Dogs', href: '/tags/dogs' }]"
      />
      <tag
        type="filter"
        size="large"
        :tag-items="[{ name: 'Cats', href: '/tags/cats' }, { name: 'Dogs', href: '/tags/dogs' }]"
      />

      <hyperlink href="#" variation="button solid" size="small">Bar</hyperlink>
      <hyperlink href="#" variation="button solid">Bar</hyperlink>
      <hyperlink href="#" variation="button solid" size="large">Bar</hyperlink>
    </wrapper>
  </component>
</template>

<script>
/**
 * Playground to consistently style all form components and similar items
 */
export default {
  name: "FormInputs",
  status: "prototype",
  release: "1.0.0",
  type: "Template",
  metaInfo: {
    title: "Form | LUX Design System",
    htmlAttrs: {
      lang: "en",
    },
  },
  props: {
    /**
     * The html element name used for the component.
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped></style>

<docs>
  ```jsx
  <form-inputs></form-inputs>
  ```
</docs>
