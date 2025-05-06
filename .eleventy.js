module.exports = function(eleventyConfig) {
  // Copia la cartella images così com'è
  eleventyConfig.addPassthroughCopy("images");
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
  };
};
