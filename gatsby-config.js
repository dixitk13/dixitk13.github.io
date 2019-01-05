module.exports = {
  siteMetadata: {
    title: `Dixit's Home`
  },
  pathPrefix: "/dixitk13-gatsby.github.io",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/static/markdowns/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`
  ]
};
