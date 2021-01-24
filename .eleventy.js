// Example use for the demo plugin:
// {{ 'Steph' | hello | safe }}

// Define defaults for your plugin config
const defaults = {
  htmlTag: "h2",
};

module.exports = (eleventyConfig, options) => {
  // Combine defaults with user defined options
  const { htmlTag } = {
    ...defaults,
    ...options,
  };
  
  // You can create more than filters as a plugin, but here's an example
  eleventyConfig.addFilter("hello", (name) => {
    return `<${htmlTag}>Hello, ${name}!</${htmlTag}>`;
  });
};
