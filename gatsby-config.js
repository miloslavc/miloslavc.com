const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Miloslav Cvetkovic`,
    description: `Hi there 👋— my name is Miloslav. I'm a frontend developer and designer.`,
    author: `@miloslavc`,
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
        name: `Miloslav Cvetkovic`,
        short_name: `Miloslav Cvetkovic`,
        start_url: `/`,
        background_color: `#194ffd`,
        theme_color: `#194ffd`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-140802156-1",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `z79s13p94dn6`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: process.env.SENTRY_ACCESS_TOKEN,
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
        config: {
          // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
