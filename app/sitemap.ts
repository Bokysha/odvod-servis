export default function sitemap() {
    const baseUrl = 'https://www.odvodservis.rs';
    
    // Osnovne stranice
    const routes = ['', '/about', '/services', '/gallery', '/contact'].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly', 
      priority: route === '' ? 1 : 0.8,
    }));
  
    return routes;
  }