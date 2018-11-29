## How to install LUX in a Rails app

### Install Webpacker and Vue

#### Step 1

Make sure you have the webpacker gem in your Gemfile:

```ruby
# add webpacker to your Gemfile
gem "webpacker", ">= 4.0.x"
```

You will need to have Rails 5.1+, and make sure you have the `webpacker` gem in your Gemfile. Run:

```cmd
# Rails 5.1+
bundle exec rails webpacker:install
```

#### Step 2

The next command configures Webpacker for use with Vue.js:

```cmd
bundle exec rails webpacker:install:vue
```

More info on how to set up a Rails app with Webpacker and Vue.js can be found on the [Webpacker README page](https://github.com/rails/webpacker#vue).

#### Step 3

Verify that your `package.json` has the following dependencies (for minimal setup):

```javascript
{
  "dependencies": {
    "@rails/webpacker": "3.5",
    "lux-design-system": "^0.0.24"
  },
  "devDependencies": {
    "webpack-dev-server": "^3.1.10"
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

```javascript
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

You can use the tokens in your own custom component styles by importing the `tokens.scss` file separately. If you _*are not using TurboLinks*_, replace what is in that file with the following code:

```javascript
import Vue from "vue/dist/vue.esm"
import system from "lux-design-system"
import "lux-design-system/dist/system/system.css"
import "lux-design-system/dist/system/tokens/tokens.scss"
import store from "../store"

Vue.use(system)

// create the LUX app and mount it to wrappers with class="lux"
document.addEventListener("DOMContentLoaded", () => {
  var elements = document.getElementsByClassName("lux")
  for (var i = 0; i < elements.length; i++) {
    new Vue({
      el: elements[i],
      store,
    })
  }
})
```

(This assumes a Vuex store to be defined one directory up. You can omit the "store" import and param if not using a Vuex store. If you need to use Vuex, you will need to touch a few other files. Please refer to the [State Management documentation](https://pulibrary.github.io/lux/docs/#!/State%20Management) for details.)

You can also easily add the LUX Design Token variables to your asset pipeline. To do this, you'll need to @import the `system.utils.scss` file from the npm package at the top of your `app/assets/stylesheets/application.scss` file, along with the other variable imports, like so:

```scss
@import "../../../node_modules/lux-design-system/dist/system/system.utils.scss";
```

If you _*are using TurboLinks*_, replace what is in `app/javascript/packs/application.js` with the following code:

```cmd
yarn add vue-turbolinks
```

```javascript
import Vue from "vue/dist/vue.esm"
import system from "lux-design-system"
import "lux-design-system/dist/system/system.css"
import TurbolinksAdapter from "vue-turbolinks"

Vue.use(system)
Vue.use(TurbolinksAdapter)

// create the LUX app and mount it to wrappers with class="lux"
document.addEventListener("turbolinks:load", () => {
  var elements = document.getElementsByClassName("lux")
  for (var i = 0; i < elements.length; i++) {
    new Vue({
      el: elements[i],
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

```cmd
 gem install foreman
```

#### Step 12

Create a file called `Procfile` in the root directory and add the following code:

```cmd
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

## How to use LUX in a static web page (or a JsFiddle, if you can host the files)

To generate static asset files to use in a stand-alone HTML doc, run this command:

```cmd
yarn build:static
```

Then use `<script/>` and `<link/>` tags to include to the js and css files in the `static/system` directory in your HTML. Then include any LUX components in a wrapper with `class="lux"`.

Example HTML:

```html
<!DOCTYPE html>
<html lang=en>

<head>
    <meta charset=utf-8>
    <meta name=viewport content="width=device-width,initial-scale=1">
    <title>LUX Design System sample</title>
    <link href=static/system/system.css rel=stylesheet>
</head>

<body>
  <div id="lux">
  	<card id="myCard">
  	  <media-image src="https://picsum.photos/600/300/?random" height="medium" cover></media-image>
  	  <heading level="h2">Title</heading>
  	  <text-style variation="default">Design isn’t just about the look and feel. Design is how it works.</text-style>
  	</card>
  </div>
<script type=text/javascript src=static/system/system.js></script>
</body>

</html>
```
