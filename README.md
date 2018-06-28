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
