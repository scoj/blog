require('dotenv').config();



module.exports = {
  siteMetadata: {
    title: `Romanian living in 🇩🇰 Copenhagen.`,
    name: `Sorin Cojocaru`,
    siteUrl: `https://sorincojocaru.com`,
    description: `Sorin Cojocaru - Romanian living in Copenhagen. Entrepreneur. Digital wizard. Globetrotter.`,
    hero: {
      heading: `Romanian living in 🇩🇰 Copenhagen. Entrepreneur. Digital wizard. Globetrotter.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/sheepcoatmaker`,
      },
      {
        name: `github`,
        url: `https://github.com/scoj`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/sorincph`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/scojocaru/`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/sorincph/`,
      },
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
          contentful: true,
          local: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
      {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  /*{
    resolve: '@narative/gatsby-theme-novela',
    options: {
      sources: {
        contentful: true,
      }
    }
  },*/
  ],
};
