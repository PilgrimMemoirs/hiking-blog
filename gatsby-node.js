const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.js');
  const tagTemplate = path.resolve('src/templates/tagTemplate.js');

  const result = await graphql(`
    {
      posts: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            category
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 500) {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                }
              }
            }
          }
        }
      }
      tags: allMdx {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.posts.nodes;
  const tags = result.data.tags.group;

  tags.forEach( tag => {
    createPage({
      path: `/tags/${tag.tag}/`,
      component: tagTemplate,
      context: {
        tag: tag.tag
      },
    })
  })

  posts.forEach((post, index) => {
    const previous =
      index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    createPage({
      path: post.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.fields.slug,
        previous,
        next,
      },
    })
  })
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
