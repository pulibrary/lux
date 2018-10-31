### Elements are the smallest basic structures of an user interface. They cannot be broken down any further. Buttons, links, and inputs are good examples. Elements utilize decisions made on the design token level.

## How to add Elements

### Naming Elements

To avoid future collisions, we prefix Elements with `Lux` and us Upper Camel Case naming convention. For example, a `<form-input>` element would be named `LuxFormInput.vue`.

### Creating an Element

To create an element, you will need to create a .vue file inside the [/src/elements](https://github.com/pulibrary/lux/tree/master/src/elements) directory. You can start with the [component template](https://github.com/pulibrary/lux/tree/master/src/ExampleComponent.vue), which will guide you in documenting the component via the comments.

## Overview

```
<components show="elements" />
```
