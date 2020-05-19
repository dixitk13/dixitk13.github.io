module.exports = {
  siteMetadata: {
    title: `Dixit's Home`,
    blog: `Dixit's Blog`,
    url: "https://dixitk13.github.io",
    image: "/static/img/dixitk13.jpg",
    twitterUsername: "@dixitk13",
  },
  pathPrefix: "/dixitk13.github.io",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
  ],
};
