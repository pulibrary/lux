## How to install LUX in a Rails app

### Install Webpacker and Vue

#### Step 1

Make sure you have the webpacker gem in your Gemfile:

```ruby
# add webpacker to your Gemfile
gem "webpacker", ">= 4.0.x"
```

Then run:

```cmd
# Rails 5.1+
bundle install
```

You will need to have Rails 5.1+, and make sure you have the `webpacker` gem in your Gemfile. Run:

```cmd
# Rails 5.1+
bundle exec rails webpacker:install
```

Note: you may need to install node/nvm and yarn

```cmd
brew install nvm
nvm install { latest node }
brew install yarn
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
    "lux-design-system": "^2.0.4",

  },
  "devDependencies": {
    "webpack-dev-server": "^3.1.10"
  }
}
```

### Install LUX, and optionally Vuex

#### Step 4

Install Vue and LUX:
`yarn install`

#### Step 5 (optional)

If you are using Vuex, install that as well:
`yarn add vuex`

#### Step 6

If you followed all the steps, verify that your `package.json` file has the following dependencies:

```javascript
"dependencies": {
  "@rails/webpacker": "^3.3.1",
  "lux-design-system": "^2.0.4",
  "vuex": "^2.4.1",
  "vue": "^2.6.10",
  "vue-loader": "^15.7.0",
  "vue-template-compiler": "^2.6.10"
},
```

#### Step 7

To avoid flashes of unstyled content (FOUC) in your app, make sure to extract css by setting `extract_css: true` in `config/webpacker.yml`.

### Mount LUX on a container element in your Rails app

#### Step 8

If Webpacker installed correctly, you should be able to find this file: `app/javascript/packs/application.js`

You can use the tokens in your own custom component styles by importing the `tokens.scss` file separately. If you _*are not using TurboLinks*_, replace what is in the `application.js` file with the following code:

```javascript
import Vue from "vue/dist/vue.esm"
import system from "lux-design-system"
import "lux-design-system/dist/system/system.css"
import "lux-design-system/dist/system/tokens/tokens.scss"
import store from "../store" // this is only if you are using vuex

Vue.use(system)

// create the LUX app and mount it to wrappers with class="lux"
document.addEventListener("DOMContentLoaded", () => {
  var elements = document.getElementsByClassName("lux")
  for (var i = 0; i < elements.length; i++) {
    new Vue({
      el: elements[i],
      store, // this is only if you're using vuex
    })
  }
})
```

(This assumes a Vuex store to be defined one directory up. You can omit the "store" import and param if not using a Vuex store. If you need to use Vuex, you will need to touch a few other files. Please refer to the [State Management documentation](https://pulibrary.github.io/lux/docs/#/State%20Management) for details.)

You can also easily add the LUX Design Token variables to your asset pipeline. To do this, you'll need to @import the `system.utils.scss` file from the npm package at the top of your `app/assets/stylesheets/application.scss` file, along with the other variable imports, like so:

```scss
@import "../../../node_modules/lux-design-system/dist/system/system.utils.scss";
```

If you _*are using TurboLinks*_ (Not Recommended), replace what is in `app/javascript/packs/application.js` with the following code:

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
  ... <%= javascript_pack_tag 'application' %> <%= stylesheet_pack_tag 'application' %> ...
</head>
```

#### Step 10

In the same file (application.html.erb), add the class attribute to the element you want to use LUX components in. To look for lux components on any views wrap the yield statement in a div:

```html
<div class="lux"></div>
```

_Note: You cannot mount Vue apps on `<html>` or `<body>` elements._

#### Step 11

To run both Webpack and Rails servers with a single command, install the Foreman gem (you can also add this to your Gemfile instead):

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

Note: you can also add foreman to your Gemfile, but you will need to run `bundle exec foreman start`.

#### Step 14

Test to make sure it's working. Add a LUX component to the container div (or a partial within it). If you add the following,
you should see the icon of a mountain scene:

```html
<lux-icon-base icon-name="picture">
  <lux-icon-picture></lux-icon-picture>
</lux-icon-base>
```

## How to install LUX in a Rails app that uses Vite, rather than webpacker

The steps are largely the same.  Here are the main differences:

1. Instead of installing `webpacker`, you will install the `vite_rails` gem.  [Documentation here](https://vite-ruby.netlify.app/guide/#installation-%F0%9F%92%BF).
2. Instead of `javascript_pack_tag` and `stylesheet_pack_tag`, you can simply use `vite_javascript_tag`.
3. Instead of `app/javascript/packs/application.js`, mount the Vue app in `app/javascript/entrypoints/application.js`.
4. Vite compiles your javascript into an ecmascript module, and includes it through a tag like `<script src="file.js" type="module">`.  Scripts with `type="module"` are treated as deferred, meaning there can be quite some time between when the DOM is parsed and the LUX components actually start to display.  To avoid flashes of unstyled content (FOUC) in a vite applications, you can:
    1. Set the CSS on the `<html>` element to `display:none`.
    2. Add some javascript to `app/javascript/packs/application.js` to remove the `display:none` style.
    3. Alternatively, you could mount the Vue app outside of vite.  Just be sure that your mount code is not included with `type="module"` or `defer`.

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
