module.exports = {
  siteMetadata: {
    title: `FOSS@Amrita (amFOSS) - Code | Share | Grow`,
    description: `A Student Community of Open Source Enthusiasts based in Amrita Vishwa Vidyapeetham, Amritapuri. We promote and contribute to FOSS, and mentor students for achieving excellence.`,
    author: 'amfoss',
    siteUrl: 'https://amfoss.in/',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `amFOSS Website`,
        short_name: `amfoss`,
        start_url: `/`,
        background_color: `#ffc107`,
        theme_color: `#ffc107`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-yaml-full`,
      options: {
        createChildNodes: true,
        plugins: [
          `gatsby-yaml-full-markdown`, // Enable !markdown tags
          `gatsby-yaml-full-file`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-143287306-2',
        head: true,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ['gatsby-plugin-social-banner'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `amfoss`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'CMS',
        fieldName: 'cms',
        url: 'https://api.amfoss.in',
        refetchInterval: 60,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
