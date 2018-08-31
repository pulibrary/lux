[![CircleCI](https://circleci.com/gh/pulibrary/lux.svg?style=svg)](https://circleci.com/gh/pulibrary/lux) [![npm version](https://badge.fury.io/js/lux-design-system.svg)](https://badge.fury.io/js/lux-design-system) ![Dependencies status](https://david-dm.org/pulibrary/lux.svg) ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

# LUX Design System

[View the docs](https://pulibrary.github.io/lux/docs/#!/Getting%20Started)

To contribute to lux:

```
yarn install
```

To start development server:

```
yarn start
```

To run all unit tests:

```
yarn test
```

To run a single test:

```
yarn unit mytest.spec.js
```

To deploy [docs](https://pulibrary.github.io/lux/docs/#!/Getting%20Started):

```
# make sure git status is clean with no uncommitted modified files
yarn run deploy
```

To add to your project:

```
# this will add the latest official release
npm i --save lux-design-system
```

If you are looking to integrate LUX into an existing Rails, Drupal, or even JSFiddle, check out
our documentation for [How to Install LUX](https://pulibrary.github.io/lux/docs/#!/Installing%20LUX).

To ride the bleeding edge, pull directly from the GitHub in package.json dependencies:

```
...
"dependencies": {
  "lux-design-system": "pulibrary/lux"
}
...
```

To use an older version, add pin the npm version you want to your package.json dependencies:

```
...
"dependencies": {
  "lux-design-system": "^0.0.0"
}
...
```

To generate static asset files to use in a stand-alone HTML doc, run this command:

```
yarn build:static
```

Then use `<script/>` and `<link/>` tags to include to the js and css files in the `static/assets` directory in your HTML. (Ignore the `style.css` file for now.)

To publish a new version to npm:

1.  Pull latest master with merged changes.
2.  Run `yarn build:system`
3.  Commit generated files
4.  Bump the npm version with `npm version {semantic version number}`
5.  Run `npm publish`
6.  Push fresh commits to master
7.  Create a Github Release tag with change log
