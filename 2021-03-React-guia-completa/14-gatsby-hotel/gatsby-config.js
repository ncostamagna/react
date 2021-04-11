module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-emotion', // relacionamos @emotion con gatsby
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`, // para acceder a los archivos
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-datocms', // para acceder al CMS que generamos
                                        // en este caso la que utilizaremos como API
      options: { // con el API token ya se va a conectar al CMS
        apiToken: '48e12d2e2346e654bf185316419c57'
      }
    }
  ],
}
