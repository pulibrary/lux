## How to install LUX in a Rails app

### Install Webpacker

#### Step 1

You will need to have Rails 5.1+. You can create a new app using the `--webpack=vue` option.

```
# Rails 5.1+
rails new myapp --webpack=vue
```

(or run `bundle exec rails webpacker:install:vue` on a Rails app already setup with Webpacker). More info on how to set up a
Rails app with Webpacker and Vue.js can be found on the [Webpacker README page](https://github.com/rails/webpacker#vue).

#### Step 2

Make sure your `package.json` file also has `@rails/webpacker": "^3.3.1"` listed as a dependency.

#### Step 3

Run `bundle install`

### Install Vue and LUX

#### Step 4

Install Vue and LUX:
`npm install vue lux-design-system`

#### Step 5 (optional)

If you are using Vuex, install that as well:
`npm install vuex`

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

Replace what is in that file with the following code:

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

(You can omit the "store" import and param if not using a Vuex store.)

#### Step 9

Next, go to your application.html.erb layout and add the following to the `<head>` section:

```html
<%= javascript_pack_tag 'application' %>
```

This creates a `javascript_pack_tag` reference to the application.js file in the previous step.

#### Step 10

In the same file (application.html.erb), add the data-behavior attribute to the element you want to use LUX components in:

```html
<div class="container" data-behavior="vue">
```

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

#### Step 15

If you need to use Vuex, you will need to touch a few other files. Please refer to the [State Management documentation](https://pulibrary.github.io/lux/docs/#!/State%20Management) for details.

## How to install LUX in a Drupal app

Coming soon ...

## How to use LUX in a JsFiddle

Coming soon ...
