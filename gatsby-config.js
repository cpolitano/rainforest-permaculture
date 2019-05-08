module.exports = {
  // pathPrefix: "/rainforest-permaculture",
  siteMetadata: {
    title: "Rainforest Permaculture - Cocal Restoration Project",
    author: "Clare Politano",
    description: "A farmland restoration project and permaculture education center in the heart of the Osa Peninsula, Costa Rica"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
