## What is the LUX Design System?

LUX Design System is a UI Design System based on [VueDS](https://viljamis.com/2018/vue-design-system/), an open source tool for building UI Design Systems with Vue.js. Design Systems reduce design debt, encourage consistency, speed up our development process, and improve accessibility and user experiences.

## What browsers are supported?

The development environment supports the following browsers. If we want to edit the browsers supported in production we can edit the [browsers list in package.json](https://github.com/pulibrary/lux/blob/master/package.json#L172-L180). To see what browsers are selected by the browser list, run `npx browserslist --config="package.json"` in the root directory of this project.

| BROWSER           | VERSION         |
| ----------------- | --------------- |
| Google Chrome     | Last 2 versions |
| Microsoft Edge    | Last 2 versions |
| Mozilla Firefox   | Last 2 versions |
| Opera             | Last 2 versions |
| Safari            | Last 2 versions |
| Internet Explorer | 11              |

## How do I install LUX?

Please see the [documentation on Installing LUX in our wiki](https://github.com/pulibrary/lux/wiki/How-to-install-LUX).

## How do I manage state in my components?

Please see the [documentation on State Management in our wiki](https://github.com/pulibrary/lux/wiki/State-Management).

## Why Vue and not React, Jekyll, or some other tool?

We need something that is cross-platform and simple to implement. We have worked with other front-end component frameworks, and Vue.js is the simplest to learn, implement, and understand. If you know HTML, CSS, and a bit of JavaScript you’re ready to start using this tool and getting involved.

## Is this tool only for Vue.js based applications?

No, LUX can be used anywhere, though the installation may vary for different contexts. Tokens which store visual design attributes are universal and can be used on any platform. Vue Design System also renders all components in both Vue.js & HTML which allows you to use the components on any web based platform. Additionally, it’s possible to configure the build process to output Web Components instead of Vue.js Components.

## Where are molecules and pages from Atomic Design?

Compared to Atomic Design, this setup doesn’t include molecule/page levels. They’re omitted to help reduce the complexity of the system for its end-users.

## Why aren’t there more components by default?

We want to start this conversation before investing too much effort. We will build more if we agree that this will be valuable.

## Can I convert YAML tokens to more than just SCSS and JSON?

Definitely. See [Theo’s docs](https://github.com/salesforce-ux/theo). It allows you to convert the tokens to almost any format you can think of. The formats used are being configured in [package.json](https://github.com/pulibrary/lux/blob/master/#L25).

## I can’t figure out what icons are available?

Icons are inside `src/assets/icons` directory, so you can just add any icons that you need. We intend to display all available icons in the example, as well as [document the process of adding more](http://localhost:6060/#!/Adding%20Icons) from the Streamline Icon set.

## How to use design tokens in JavaScript?

First, import tokens inside the component you want to use them in:

```html
<script>
  import designTokens from "@/assets/tokens/tokens.raw.json";
</script>
```

Then, pass the data:

```html
<script>
export default {
  data() {
    return {
      tokens: designTokens.props
    };
  }
};
</script>
```

Once done, you can utilize tokens inside `<template>` like this:

```html
<template>
  <a-thing :style="{color: tokens.color_vermilion.value}" />
</template>
```

## How do you use media queries defined in tokens?

```scss
.wrapper {
  padding: $space-large;
  @media #{$media-query-large} {
    padding: $space-x-large;
  }
}
```

## How do I use static image assets?

You can put your assets under `src/assets`. It’s ok to create new directories under that directory as well. Since Webpack is used to include all static assets on the Vue app side, you’ll have to define the path like this in order for it to work on both the app and the styleguide: `<img src="@/assets/img/example.jpg" />`.

For component’s `<docs>` section things work a bit differently. Using `<img src="img/example.jpg" />` without `@/assets/` works there. This is because [Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) handles the assets directory a bit differently.
