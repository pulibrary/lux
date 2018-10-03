If you would like to add an icon, the easiest way to do this is to contact Axa or Shaun. The process involves splitting the SVG markup of the iconset that we use, to create individual icon components that are dynamically filled, sized, and labeled.

## Where can I get icons?

Iconsets are currently located in a [Google Drive folder](https://drive.google.com/drive/folders/0B7lJwwFLye5XaTNzdFAwRTEyNlk). We use the Ultimate Developer Filled and Line iconsets. You can preview [Streamline Filled](https://web.archive.org/web/20180112173120/http://www.streamlineicons.com:80/preview-ultimate-filled.html) and [Streamline Line](https://web.archive.org/web/20180116032529/http://www.streamlineicons.com:80/preview-ultimate.html) sets.

## How do I add icons to our PUL iconset?

_Note: Try to add icons from the Streamline iconset so that our icons have a consistent look and feel. If creating new icons, please attempt to make it look as if it is part of the same iconset._

_Note: We recommend importing this directory (and any other sets) into [IconJar](https://geticonjar.com/) for local font browsing and management. There's a free 14-day trial. If you suspect you will need to add more items in the future, talk to your manager about obtaining a license._

1.  Download the `Streamline Source Files/Iconjar.zip` from [Google Drive](https://drive.google.com/drive/folders/0B7lJwwFLye5XYUVxRVpsQndRWFU). Unzip the Iconjar.zip file.
2.  Open [IconJar](https://geticonjar.com/).
3.  Click "Import IconJar" from the File menu at the top of the screen.
4.  Choose line or filled and import separately.
5.  Right-click on desired icon and select "Show in Finder".
6.  Make a duplicate of one of the LUX icon components (e.g., LuxIconFile.vue) and rename it appropriately.
7.  Open the SVG file in your IDE.
8.  Copy all markup between the `<svg>` tag and paste it in between the `<template>` tags in the .vue file. If there are multiple elements, wrap them in a `<g>` tag.
9.  Save your new component, and make sure to wrap it in `<lux-icon-base>` with an appropriate `icon-name` attribute when you use it.

### Example usage:

```
<lux-icon-base
  width="30"
  height="30"
  icon-name="file"><lux-icon-file /></lux-icon-base>
```
