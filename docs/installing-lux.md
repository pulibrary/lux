## How to install LUX in a Rails app

### Install Webpacker and Vue

#### Step 1

Make sure you have the webpacker gem in your Gemfile:

```html
# LUX dependency
gem 'webpacker', '~> 3.5'
```

You will need to have Rails 5.1+, and make sure you have the `webpacker` gem in your Gemfile. Run:

```html
# Rails 5.1+
bundle exec rails webpacker:install
```

#### Step 2

The next command configures Webpacker for use with Vue.js:

```html
bundle exec rails webpacker:install:vue
```

More info on how to set up a Rails app with Webpacker and Vue.js can be found on the [Webpacker README page](https://github.com/rails/webpacker#vue).

#### Step 3

Verify that your `package.json` has the following dependencies:

```html
{
  "dependencies": {
    "@rails/webpacker": "3.5",
    "lux-design-system": "^0.0.24"
  },
  "devDependencies": {
    "webpack-dev-server": "2.11.2"
  }
}
```

### Install LUX, and optionally Vuex

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
  "lux-design-system": "^0.0.11",
  "vuex": "^2.4.1"
},
```

### Mount LUX on a container element in your Rails app

#### Step 7

If Webpacker installed correctly, you should be able to find this file: `app/javascript/packs/application.js`

#### Step 8

If you _*are not using TurboLinks*_, replace what is in that file with the following code:

```html
import Vue from 'vue/dist/vue.esm'
import system from 'lux-design-system'
import 'lux-design-system/lib/system/system.css'
import store from '../store'

Vue.use(system)

// create the LUX app and mount it to wrappers with class="lux"
document.addEventListener('DOMContentLoaded', () => {
  var elements = document.getElementsByClassName('lux')
  for(var i = 0; i < elements.length; i++){
    new Vue({
      el: elements[i],
      store
    })
  }
})
```

(This assumes a Vuex store to be defined one directory up. You can omit the "store" import and param if not using a Vuex store. If you need to use Vuex, you will need to touch a few other files. Please refer to the [State Management documentation](https://pulibrary.github.io/lux/docs/#!/State%20Management) for details.)

If you _*are using TurboLinks*_, replace what is in `app/javascript/packs/application.js` with the following code:

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

// create the LUX app and mount it to wrappers with class="lux"
document.addEventListener('turbolinks:load', () => {
  var elements = document.getElementsByClassName('lux')
  for(var i = 0; i < elements.length; i++){
    new Vue({
      el: elements[i]
    })
  }
})
```

#### Step 9

Next, go to your application.html.erb layout (or whatever you named your main layout) and add the following to the `<head>` section:

```html
<head>
  ...
<%= javascript_pack_tag 'application' %>
<%= stylesheet_pack_tag 'application' %>
  ...
</head>
```

#### Step 10

In the same file (application.html.erb), add the data-behavior attribute to the element you want to use LUX components in like this:

```html
<div class="lux">
```

_Note: You cannot mount Vue apps on `<html>` or `<body>` elements._

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
