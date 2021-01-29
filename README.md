# Eleventy Plugin to Embed CodePen.io Pens (using iFrame)

Embed CodePen.io Pens into your 11ty website by using a ShortCode. It directly embeds an iFrame for efficiency (without loading CodePen's Javascript).

<a href="https://github.com/manustays/eleventy-plugin-codepen-iframe/issues">![GitHub issues](https://img.shields.io/github/issues/manustays/eleventy-plugin-codepen-iframe)</a>
<a href="https://www.npmjs.com/package/@manustays/eleventy-plugin-codepen-iframe" target="_blank">![npm (scoped)](https://img.shields.io/npm/v/@manustays/eleventy-plugin-codepen-iframe)</a>
<a href="https://abhi.page" target="_blank">![About Abhishek](https://img.shields.io/badge/about-me-blue)</a>
<a href="https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fmanustays%2Feleventy-plugin-codepen-iframe" target="_blank"><img alt="Twitter" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fmanustays%2Feleventy-plugin-codepen-iframe"></a>
<a href="https://twitter.com/intent/follow?screen_name=abhiweb" target="_blank">![Twitter Follow](https://img.shields.io/twitter/follow/abhiweb?label=Follow&style=social)</a>

---

Yet another [11ty](11ty.dev) plugin to embed CodePens into you pages. The other plugins that I had seen use CodePen's preferred Javascript based embeds. It requires loading an external Javascript (though, a small one) into your page. The Javascript finally creates an `<iframe>` anyway!

I wanted a more efficient solution for my blog by directly embedding the Pen's iFrame; therefore this plugin.

## Usage

### STEP 1: Install the plugin:

```bash
npm install --save-dev @manustays/eleventy-plugin-codepen-iframe
```

### STEP 2: Include it in your `.eleventy.js` config file:

```js
const embedCodePen = require("@manustays/eleventy-plugin-codepen-iframe");

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(embedCodePen, {
		tabs: "js,result",
		user: "manustays"
	});
};
```

### STEP 3 – Use it in your templates:

```njk
{% CodePen "pen-url" %}
```

## Config Options
These options set the default values for embedded Pens. They can be overridden while embedding individual Pens.

| Option   | Type    | Default   | Description              |
| -------- | ------- | --------- |--------------------------|
| tabs     | string  | "result"  | Default comma-separated string of the tabs of the codepen to display |
| height   | number  | 300       | Default height of Pen iFrames |
| width    | string  | "100%"    | Default width of Pen iFrames |
| theme    | string  | "dark"    | Default theme for all Pens |
| user     | string  | ""        | CodePen user-id to use if only Pen-id is provided |
| class    | string  | "codepen" | CSS classes to add to the iFrame |

## Credits

Huge shout-out to the [awesome 11ty community](https://twitter.com/eleven_ty) for inspirations and learning and to [CodePen.io](https://codepen.io/) for makign this plugin possible!

