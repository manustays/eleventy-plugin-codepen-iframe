// Example use for the demo plugin:
// {% CodePen "https://codepen.io/abhiweb/pen/wvzNaQM", "result", "220" %}

// Define defaults for your plugin config
const defaults = {
	tabs: "result",
	height: "300",
	width: "100%",
	theme: "dark",
	user: "anon",
	class: "codepen"
};

/**
 *
 * @param {object} eleventyConfig
 * @param {object} options The default values for embedded Pens
 * @param {string} options.tabs	The Default comma-separated string of the tabs of the codepen to display (default="result")
 * @param {number} options.height The default height of Pen iFrames (default=300)
 * @param {string} options.width The default width of Pen iFrames (default="100%")
 * @param {string} options.theme The default theme for all Pens (default="dark")
 * @param {string} options.user The CodePen user-id to use if only Pen-id is provided
 * @param {string} options.class One or more classes to add to the iFrame (default="codepen")
 */
module.exports = (eleventyConfig, options) => {
	// Combine defaults with user defined options
	const userDefaults = {
		...defaults,
		...options,
	};

  	/**
	 * Embed CodePen
	 * @param {*} url The Pen ID or full URL
	 * @param {*} tabs Comma-separated string of the tabs of the codepen to display (default: "js,result")
	 * @param {*} height A unitless value of the height in pixels (default: "300")
	 * @param {*} theme A theme ID (default: "dark")
	 */
	eleventyConfig.addShortcode("CodePen", (url, tabs, height, theme) => {

		const id = new URL(url).pathname.split('/')[3];

		return `<iframe class="${userDefaults.class}" height="${height || userDefaults.height}" style="width:${userDefaults.width};" scrolling="no" title="CodePen Embed" src="https://codepen.io/anon/embed/${id}?height=${height || userDefaults.height}&theme-id=${theme || userDefaults.theme}&default-tab=${tabs || userDefaults.tabs}" frameborder="0" loading="lazy" allowtransparency="true" allowfullscreen="true"><p><a href="${url}" target="_blank" rel="noopener">See the Pen</a></p></iframe>`
	});
};
