import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export default function SEO({ title, description, keywords, canonical, ogType = 'website', ogImage = '/og-image.png' }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (el) {
        el.setAttribute('content', content);
      } else {
        el = document.createElement('meta');
        el.setAttribute(name.startsWith('og:') ? 'property' : 'name', name);
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', canonical);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonical);
        document.head.appendChild(link);
      }
    }

    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:type', ogType);
    setMeta('og:image', ogImage);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
  }, [title, description, keywords, canonical, ogType, ogImage]);

  return null;
}
