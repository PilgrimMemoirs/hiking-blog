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
    `gatsby-remark-embed-video`,
    `gatsby-remark-responsive-iframe`,
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
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content/posts`, name: `posts` },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            height: 400, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            urlOverrides: [
              {
                id: 'youtube',
                embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
              }
            ],
            containerClass: 'embedVideo-container',
          }
        }
        ]
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
  ],
};
