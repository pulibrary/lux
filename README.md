[![CircleCI](https://circleci.com/gh/pulibrary/lux.svg?style=svg)](https://circleci.com/gh/pulibrary/lux) [![npm version](https://badge.fury.io/js/lux-design-system.svg)](https://badge.fury.io/js/lux-design-system) ![Dependencies status](https://david-dm.org/pulibrary/lux.svg) ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

# LUX Design System

## Important

This repo is for Lux version 4 and earlier.  For current releases of Lux, please see the [Lux Design System documentation](https://pulibrary.github.io/lux-design-system/) or [code repository](https://github.com/pulibrary/lux-design-system).

## Docs

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

1.  If you don't already have np installed, `yarn global add np`. If you are running an old version of node (e.g. Node 12), you may need to install an older version of np (e.g. `yarn global add np@6.5.0`)
1.  If you have a passphrase on your ssh key, run
    `ssh-add ~/.ssh/id_ed25519` (or wherever your key is located).
1.  If you use a security key, rather than an authenticator app, for
    two-factor authentication in npmjs.com, make sure that
    "Require two-factor authentication for write actions" is not
    checked in your account 2FA settings. If it is checked, np will
    ask you for an OTP from your phone, and won't allow you to push
    without it.
1.  Pull latest main with merged changes.
1.  Run `yarn login`
1.  Run `yarn release`
1.  :tada:
