const config = {
  siteTitle: 'tsdocode', // Site title.
  siteTitleShort: "tsdocode's blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'tsdocode', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://tsdocode.github.io', // Domain of your website without pathPrefix.
  pathPrefix: '/tsdoblog', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'dssd', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-161211056-1', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'Thanh Sang Nguyen', // Username to display in the author segment.
  userEmail: 'hcmute.ts@hotmail.com', // Email used for RSS feed's author segment
  userTwitter: 'gatsbyjs', // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: 'tsdocode', // Optionally renders "Follow Me" in the Bio segment.
  userLocation: 'Viet Nam', // User location to display in the author segment.
  userAvatar: '/avt/avt.jpg', // User avatar to display in the author segment.
  userDescription:
    "Love doing mad things", // User description to display in the author segment.
  copyright: 'Copyright © 2020. All rights reserved.', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: 'red' // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config
