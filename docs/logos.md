<div class="introduction">
	<p>Logos are used to enforce brand identity, so there are restrictions around their use and variants. Where applicable, we will include usage restrictions. LUX uses SVG for logos rather than pixel-based formats like PNG or GIF.</p>
</div>

### Accessibility and Logos

LUX logos are made accessible by using the `title`, `title#id` and `aria-labeledBy` appropriately:

```html
<svg xmlns="http://www.w3.org/2000/svg"
  :width="width"
  :height="height"
  viewBox="0 0 263 71.84"
  aria-labelledby="logo-university"
  role="presentation"
>
  <title
    id="logo-university"
    lang="en"
  >Princeton University Logo</title>
 ... SVG path info goes here
```

### Adding New Logos

In order to add a new logo, you must have access to the SVG version of the logo. SVGs can be created from Adobe Illustrator (.ai) or Encapsulated PostScript (.eps) files.
