module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "rafael-ludescher",
    author: "rafael ludescher",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'backgrounds',
        path: `${__dirname}/src/images/backgrounds`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'logos',
        path: `${__dirname}/src/images/logos`
      }
    }
  ],
};
