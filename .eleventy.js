module.exports = function(eleventyConfig) {
  // Copia lo stylesheet in root
  eleventyConfig.addPassthroughCopy("styles.css");
  // Copia la cartella immagini
  eleventyConfig.addPassthroughCopy("images");
  // Copia la cartella admin per Netlify CMS
  eleventyConfig.addPassthroughCopy("admin");
  // Copia la cartella pages (chi-siamo.md/.html)
  eleventyConfig.addPassthroughCopy({ "pages": "pages" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
