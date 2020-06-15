module.exports = {
  siteMetadata: {
    title: `Dixit Keshavbhai Patel`,
    titleTemplate: "%s · just another software Engineer",
    blogTitleTemplate: "%s · By Dixit Keshavbhai Patel",
    url: "https://dixitk13.github.io",
    siteUrl: "https://dixitk13.github.io",
    description:
      "Dixit's Home Page. A software engineer, just living life by writing software.",
    image: "/static/img/dixitk13.jpg",
    twitterUsername: "@dixitk13",
  },
  pathPrefix: "/dixitk13.github.io",
  plugins: [
    `gatsby-plugin-sitemap`, //  TODO: maybe customize this later
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                let body = edge.node.body;
                const siteUrl = site.siteMetadata.siteUrl;
                const url = siteUrl + edge.node.frontmatter.path;
                const postText = `<div style="margin-top=60px;">Click Here to read on my website <a href="${url}">clicking here</a></div>`;
                body = body
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`);

                return Object.assign({}, edge.node.frontmatter, {
                  url,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": body + postText }],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { type: { eq: "blog" } } }
                ) {
                  edges {
                    node {
                      excerpt
                      body
                      frontmatter {
                        title
                        path
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Dixit's Blog Feed",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dixit Keshavbhai Patel`,
        short_name: `dixitk13`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon.ico`,
        theme_color_in_head: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-slug-field`,
    //   options: {
    //     source: ["id"],
    //     fieldName: "slug",
    //     urlSlugOptions: {
    //       separator: "_",
    //     },
    //   },
    // },
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          `gatsby-remark-copy-linked-files`,
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 590,
          //   },
          // },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 30px;`,
          //   },
          // },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
  ],
};
