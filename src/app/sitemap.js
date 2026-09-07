import { servicesData } from '../data/services';

export default function sitemap() {
  const baseUrl = 'https://startuputra.com'; // Change to your actual production URL

  // Base static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic service routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes];
}
