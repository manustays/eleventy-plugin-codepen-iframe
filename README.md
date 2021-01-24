# Eleventy Plugin to Embed CodePen.io Pens (using iFrame)

> Embed CodePen.io Pens into your 11ty website using a ShortCode. It directly embeds an iFrame for efficiency (without loading CodePen's Javascript).

Yet another [11ty](11ty.dev) plugin to embed CodePens into you pages. The other plugins that I had seen use CodePen's preferred Javascript based embeds. It requires loading an external Javascript (though, a small one) into your page. The Javascript finally embeds an `<iframe>` anyway!

I wanted a more efficient solution for my blog by directly embedding the Pen's iFrame; therefore this plugin.

## Usage

### STEP 1: Install the plugin:

```bash
npm install --save-dev @manustays/eleventy-plugin-codepen-iframe
```

### STEP 2: Include it in your `.eleventy.js` config file:

```js
const EmbedCodePen = require("@manustays/eleventy-plugin-codepen-iframe");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EmbedCodePen);
};
```

## Config Options

| Option      | Type    | Default       | Description              |
| ----------- | ------- | ------------- |--------------------------|
| option name | type    | default value | What does this option do |


## Credits

Huge shoutout to the [awesome 11ty community](https://twitter.com/eleven_ty) for inspirations and learning and to [CodePen.io](https://codepen.io/) for makign this plugin possible!

