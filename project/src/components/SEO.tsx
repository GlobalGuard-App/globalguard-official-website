import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogUrl?: string;
  noIndex?: boolean;
}

const SITE_NAME = 'GlobalGuard';
const BASE_URL = 'https://globalguard.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  ogUrl,
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    const setMeta = (nameOrProp: string, content: string, useProperty = false) => {
      const selector = useProperty
        ? `meta[property="${nameOrProp}"]`
        : `meta[name="${nameOrProp}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (el) {
        el.setAttribute('content', content);
      } else {
        el = document.createElement('meta');
        el.setAttribute(useProperty ? 'property' : 'name', nameOrProp);
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (el) {
        el.setAttribute('href', href);
      } else {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        el.setAttribute('href', href);
        document.head.appendChild(el);
      }
    };

    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : (ogUrl || BASE_URL);

    // Core
    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    if (noIndex) setMeta('robots', 'noindex, nofollow');
    else setMeta('robots', 'index, follow');

    // Canonical
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:locale', 'en_US', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:site', '@GlobalGuardApp');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Theme color (mobile browser chrome)
    setMeta('theme-color', '#00d4ff');
    setMeta('msapplication-TileColor', '#060810');
  }, [title, description, keywords, canonical, ogType, ogImage, ogUrl, noIndex]);

  return null;
}