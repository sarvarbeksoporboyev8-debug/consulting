module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      // If the page already sets its own permalink, respect it
      if (data.permalink) return data.permalink;
      return `${data.page.filePathStem}.html`;
    }
  }
};
