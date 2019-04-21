module.exports = {
  siteMetadata: {
    title: `近未来体験2019`,
    description: `『近未来体験2019』は電子情報工学科・電気電子工学科の学生が主催する五月祭展示企画です。`,
    author: `東京大学電気系学科（EEIC）学生広報`,
    authorTwitter: `@eeic_studentadv`,
    url: `https://2019.eeic.jp`,
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
        name: `近未来体験2019`,
        short_name: `近未来体験2019`,
        start_url: `/`,
        background_color: `#e8e8e8`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/bulb-icon.png`, // This path is relative to the root of the site.

        // default settings except `icons/` in src are replaced with `favicons/`
        icons: [
          {
            src: `favicons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-svgr`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
