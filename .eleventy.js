const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copia file statici
  eleventyConfig.addPassthroughCopy("/styles.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy({ "pages": "pages" });

  // Filtro robusto per date con localizzazione in italiano
  eleventyConfig.addFilter("date", (dateObj, format = "d LLLL yyyy") => {
    try {
      if (typeof dateObj === "string") {
        return DateTime.fromISO(dateObj).setLocale("it").toFormat(format);
      } else if (dateObj instanceof Date) {
        return DateTime.fromJSDate(dateObj).setLocale("it").toFormat(format);
      } else {
        return "Data non valida";
      }
    } catch (err) {
      return "Data non valida";
    }
  });

  // Collezione dinamica eventi
  eleventyConfig.addCollection("eventi", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/events/*.md");
  });

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
