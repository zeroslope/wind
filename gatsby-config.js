module.exports = {
  siteMetadata: {
    title: `zeroslope's blog`,
    name: `zeroslope`,
    siteUrl: `https://zeroslope.github.io`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `👨‍💻‍📝`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/slope_zero`,
      },
      {
        name: `github`,
        url: `https://github.com/zeroslope`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zeroslope's blog`,
        short_name: `zeroslope`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
