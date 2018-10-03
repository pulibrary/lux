<div class="introduction">
	<p>Icons are used to visually communicate core parts of the product and available actions. LUX uses SVG for its icon needs for [a number of reasons](https://css-tricks.com/icon-fonts-vs-svg/). </p>
</div>

### Accessibility and Icons

Icons are labeled according to the `icon-name` attribute placed on the `<lux-icon-base>` wrapper. For example, the following icon has an aria-label of "file icon":

```html
<lux-icon-base
  width="30"
  height="30"
  icon-name="file"><lux-icon-file /></lux-icon-base>
```

There are times when you can leave icon-name blank. For example, buttons can have icons alongside text. In this case, the screen reader would read the text in the button instead, so the icon is then decorative and should not have a separate aria-label itself.

### Adding New Icons

There are a few steps to this, so we provide a separate page with [instructions for adding new icons](/#!/Adding%20Icons).

### Why do I have to wrap my Icons with the Icon Base component?

<p>There are many ways to create an SVG Icon System, but one method that takes advantage of Vue’s capabilities is to create editable inline icons as components. Some of the advantages of this way of working is:</p>
<ul>
<li>They are easy to edit on the fly</li>
<li>They are animatable</li>
<li>You can use standard props and defaults to keep them to a typical size or alter them if you need to</li>
<li>They are inline, so no HTTP requests are necessary</li>
<li>They can be made accessible dynamically</li>
</ul>

<p>The way we do this is to split the SVG markup out into the `<svg>`, `<title>`, and `g` elements so that we can change certain attributes entirely via props. The icon component itself should only contain the path(s). This approach was adopted from the [VueJS Cookbook](https://vuejs.org/v2/cookbook/editable-svg-icons.html).
