const siteMetadata = {
  title: `Memoirs of a Pilgrim`,
  description: `Hiking, backpacking, and traveling around the Pacific Northwest and beyond.`,
  image: `/site-image.jpg`,
  siteUrl: `https://memoirsofapilgrim.com`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  twitterUsername: `@pilgrimmemoirs`,
  authorName: `Jamie Pilgrim`,
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans JP`,
          `Lora\:500i`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true
            }
          },
        ],
      },
    },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content/posts`, name: `posts` },
    },
  ],
};
