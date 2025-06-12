const readingTime = require("reading-time");
const path = require("path");
const { kebabCase } = require("lodash");
// const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx" && node.frontmatter.type === "blog") {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`#graphql
    type Mdx implements Node {
      # You can also use other keys from fields.timeToRead if you don't want "minutes"
      timeToRead: Float @proxy(from: "fields.timeToRead.minutes")
      wordCount: Int @proxy(from: "fields.timeToRead.words")
      timeToReadInWords: String @proxy(from: "fields.timeToRead.text")
    }
  `);
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(
    `src/components/Blog/BlogPostTemplate/BlogPostTemplate.js`
  );
  const tagTemplate = path.resolve("src/components/Tags/TagDetail.js");

  const result = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { type: { eq: "blog" } } }
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 150)
            internal {
              contentFilePath
            }
            fields {
              timeToRead {
                minutes
                text
                time
                words
              }
            }
            frontmatter {
              title
              date
              link
              type
              path
            }
          }
        }
      }

      tagsGroup: allMdx(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return Promise.reject(result.error);
  }
  // extract blog items
  const blogPages = result.data.allMdx.edges;

  // make blog pages
  blogPages.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // additional data can be passed via context
      context: {
        id: node.id,
        pathSlug: node.frontmatter.path,
        frontmatter: node.frontmatter,
        timeToReadInWords: node.fields.timeToRead.text,
        // pathSlug: relativePath,
      },
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
