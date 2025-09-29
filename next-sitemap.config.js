/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.example.com', // TODO: change
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};
