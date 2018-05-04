## Where can I get icons?

Iconsets are currently located in a [Google Drive folder](https://drive.google.com/drive/folders/0B7lJwwFLye5XaTNzdFAwRTEyNlk).

## What is the PUL iconset?

The PUL iconset is a subset of icons that we use across our sites, making it easy to be consistent and build components that work.

## How do I add icons to our PUL iconset?

_Note: Try to add icons from the Streamline iconset so that our icons have a consistent look and feel. If creating new icons, please attempt to make it look as if it is part of the same iconset._

_Note: We recommend importing this directory (and any other sets) into [IconJar](https://geticonjar.com/) for local font browsing and management. There's a free 14-day trial. If you suspect you will need to add more items in the future, talk to your manager about obtaining a license._

1.  Download the `pul-icons.json` and the `Streamline Source Files/Iconjar.zip` from [Google Drive](https://drive.google.com/drive/folders/0B7lJwwFLye5XYUVxRVpsQndRWFU). Unzip the Iconjar.zip file.
2.  Create an account and login to the [Icomoon app](https://icomoon.io/app).
3.  Click "Import Icons" button at the top of the screen.
4.  Select `pul-icons.json` and import.
5.  Open IconJar and select "Import IconJar" from the "+" dropdown. Navigate to the expanded Iconjar.zip directory and load the `line icon.iconjar`.
6.  Drag and Drop each icon you want to add directly from IconJar into pul-icons via Icomoon.
7.  When you've done this, select all the PUL-icons and click "Generate Font" at the bottom of the screen, and click Preferences at the top. Make sure your preference screen looks like this (in the near future we plan to prefix with `pul-icon-`):
    ![IcoMoon Preferences](https://raw.githubusercontent.com/pulibrary/UI-Components/master/img/icomoon-preferences.png)
8.  Click "Download".
9.  You will then want to go back to your pul-icons and download the json file. Replace the json file in the [Google Drive folder](https://drive.google.com/drive/folders/0B7lJwwFLye5XaTNzdFAwRTEyNlk) with your updated version.
10. If you're project is a Rails app, replace the files in `app/assets/fonts/icons` with the files in the `pul-icons/fonts` directory found in the zip file you just downloaded.
11. You should also see `style.scss` and `variables.scss`. Rename `style.scss` to `icons.scss` and, if this is a Rails project, overwrite the files in `/app/assets/stylesheets/icons/` with these two new ones.
12. You should be able to now use these icons in your HTML like this example of the `file-pdf` icon below.

### Example usage:

```
<span class="icon-file-pdf"></span>
```
