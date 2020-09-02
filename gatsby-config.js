module.exports = {
  siteMetadata: {
    title: `Memoirs of a Pilgrim`,
    description: `Hiking, backpacing, and traveling around the Pacific Northwest and beyond.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
  ],
};
