import { MetadataRoute } from 'next';

const baseUrl = 'https://mhstimber.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'ar'];
  const routes = [
    '',
    '/about',
    '/products',
    '/services',
    '/contact',
    '/people',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for each locale and route
  locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = route === '' 
        ? `${baseUrl}/${locale}`
        : `${baseUrl}/${locale}${route}`;
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route === '/products' || route === '/services' ? 0.9 : 0.8,
      });
    });
  });

  // Add default homepage
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  });

  return sitemapEntries;
}

