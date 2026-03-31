/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://jardineriagreengood.es',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml', '/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://jardineriagreengood.es/sitemap.xml',
    ],
  },
};
