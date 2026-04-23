/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://greengood.es',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml', '/404'],
  additionalPaths: async () => {
    const servicios = [
      'jardineria-general',
      'cesped-artificial',
      'limpieza-comunes',
      'piscinas',
      'servicios-comunidades',
      'urbanizaciones',
    ];
    const municipios = [
      'salamanca',
      'santa-marta-de-tormes',
      'carbajosa-de-la-sagrada',
      'villares-de-la-reina',
      'cabrerizos',
      'pelabravo',
      'aldeatejada',
      'calvarrasa-de-abajo',
    ];

    const paths = [];

    for (const slug of servicios) {
      paths.push({
        loc: `/servicios/${slug}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    }

    for (const slug of municipios) {
      paths.push({
        loc: `/cesped-artificial-en/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    }

    return paths;
  },
  robotsTxtOptions: {},
};
