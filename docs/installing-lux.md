## How to install LUX in a Rails app

### Install Webpacker

#### Step 1

You will need to have Rails 5.1+, and make sure you have the `webpacker` gem in your Gemfile. Run:

```
# Rails 5.1+
bundle exec rails webpacker:install
```

#### Step 2

The next command configures Webpacker for use with Vue.js:

```
bundle exec rails webpacker:install:vue
```

More info on how to set up a Rails app with Webpacker and Vue.js can be found on the [Webpacker README page](https://github.com/rails/webpacker#vue).

#### Step 3

Verify that your `package.json` file also has `@rails/webpacker` listed as a dependency, as well as `vue`.

### Install Vue and LUX

#### Step 4

Install Vue and LUX:
`yarn add lux-design-system`

#### Step 5 (optional)

If you are using Vuex, install that as well:
`yarn add vuex`

#### Step 6

If you followed all the steps, verify that your `package.json` file has the following dependencies:

```html
"dependencies": {
  "@rails/webpacker": "^3.3.1",
  "lux-design-system": "^0.0.9",
  "vue": "^2.5.3",
  "vuex": "^2.4.1"
},
```

### Mount LUX on a container element in your Rails app

#### Step 7

If Webpacker installed correctly, you should be able to find this file: `app/javascript/packs/application.js`

#### Step 8

If you are not using TurboLinks, replace what is in that file with the following code:

```html
import Vue from 'vue/dist/vue.esm'
import system from 'lux-design-system'
import 'lux-design-system/lib/system/system.css'
import store from '../store'

Vue.use(system)

// create the LUX app and mount it to a wrapper with data-behavior="vue"
document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '[data-behavior="vue"]',
    store
  })
})
```

(This assumes a Vuex store to be defined one directory up. You can omit the "store" import and param if not using a Vuex store. If you need to use Vuex, you will need to touch a few other files. Please refer to the [State Management documentation](https://pulibrary.github.io/lux/docs/#!/State%20Management) for details.)

If you _are_ using TurboLinks, do the following:

```html
yarn add vue-turbolinks
```

```html
import Vue from 'vue/dist/vue.esm'
import system from 'lux-design-system'
import 'lux-design-system/lib/system/system.css'
import TurbolinksAdapter from 'vue-turbolinks';

Vue.use(system)
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '[data-behavior="vue"]'
  })
})
```

#### Step 9

Next, go to your application.html.erb layout (or whatever you named your main layout) and add the following to the `<head>` section:

```html
<%= javascript_pack_tag 'application' %>
<%= stylesheet_pack_tag 'application' %>
```

#### Step 10

In the same file (application.html.erb), add the data-behavior attribute to the element you want to use LUX components in like this:

```html
<div class="container" data-behavior="vue">
```

_*Note*: You cannot mount Vue apps on `<html>` or `<body>` elements._

#### Step 11

To run both Webpack and Rails servers with a single command, install the Foreman gem:

```html
 gem install foreman
```

#### Step 12

Create a file called `Procfile` in the root directory and add the following code:

```html
# Procfile
backend: bin/rails s -p 3000
frontend: bin/webpack-dev-server
```

(You can run these manually in separate terminal windows if you wish.)

#### Step 13

Run `foreman start`

#### Step 14

Test to make sure it's working. Add a LUX component to the container div (or a partial within it). If you add the following,
you should see the icon of a mountain scene:

```html
<svg-icon name="pul-icon-picture-solid" width="48px" height="48px"></svg-icon>
```

## How to install LUX in a Drupal app

Coming soon ...

## How to use LUX in a JsFiddle

Coming soon ...
