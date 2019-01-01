module.exports = {
  pathPrefix: "/dixitk13-gatsby.github.io",
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
