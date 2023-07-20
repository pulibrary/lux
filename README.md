[![CircleCI](https://circleci.com/gh/pulibrary/lux.svg?style=svg)](https://circleci.com/gh/pulibrary/lux) [![npm version](https://badge.fury.io/js/lux-design-system.svg)](https://badge.fury.io/js/lux-design-system) ![Dependencies status](https://david-dm.org/pulibrary/lux.svg) ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

# LUX Design System

[View the docs](https://pulibrary.github.io/lux/docs/#/Getting%20Started)

## To add to your project:

```
# this will add the latest official release
yarn add lux-design-system
```

If you are looking to integrate LUX into an existing Rails, Drupal, or even JSFiddle, check out
our documentation for [How to Install LUX](https://pulibrary.github.io/lux/docs/#/Installing%20LUX).

### To ride the bleeding edge, pull directly from the GitHub in package.json dependencies:

```
...
"dependencies": {
  "lux-design-system": "pulibrary/lux"
}
...
```

### To use an older version, add pin the npm version you want to your package.json dependencies:

```
...
"dependencies": {
  "lux-design-system": "^0.0.0"
}
...
```

### To generate static asset files to use in a stand-alone HTML doc, run this command:

```
yarn build:static
```

Then use `<script/>` and `<link/>` tags to include to the js and css files in the `static/system` directory in your HTML. Then include any LUX components in a wrapper with `class="lux"`.

## To contribute to lux:

- You will need Node v10.16.0+
- If you use a NVM, run `nvm install` or `nvm use` if you already know you have Node v10.16.0

```
yarn install
```

### To start development server:

```
yarn start
```

### To run all unit tests:

```
yarn test
```

### To run a single test:

```
yarn unit mytest.spec.js
```

### To develop LUX locally as a dependency in a project

You might want to develop LUX while developing on a project that uses LUX as a dependency. For example, you might want to develop LUX components while developing the Approvals app. NOTE: You will need to have both LUX and the project using it as a dependency running on your machine.

1. Install [yalc](https://github.com/whitecolor/yalc)
1. In the LUX root directory, run `yarn build:system && yalc publish`
1. In the Project (e.g., Approvals) root directory, run `yalc add lux-design-system`
1. Each time that you are ready to view the LUX work in progress, run the last 2 steps:
   1. In the LUX root directory, run `yarn build:system && yalc publish`
   1. In the Project (e.g., Approvals) root directory, run `yalc update`

## To deploy [docs](https://pulibrary.github.io/lux/docs/#/Getting%20Started):

```
# make sure git status is clean with no uncommitted modified files
yarn run deploy
```

## To publish a new version to npm:

1.  Pull latest main with merged changes.
2.  Run `yarn release`
3.  :tada:
