const siteMetadata = {
  title: `Memoirs of a Pilgrim`,
  description: `Hiking, backpacking, and traveling around the Pacific Northwest and beyond.`,
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content/posts`, name: `posts` },
    },
  ],
};
