module.exports = {
  siteMetadata: {
    title: `近未来体験2019`,
    description: `『近未来体験2019』は電子情報工学科・電気電子工学科の学生が主催する五月祭展示企画です。`,
    author: `EEIC Students`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e8e8e8`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/eeic-black.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
