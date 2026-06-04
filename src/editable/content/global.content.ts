import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'The global business listing database',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'The global business listing database',
    primaryLinks: [
      { label: 'Businesses', href: '/listing' },
      { label: 'Search', href: '/search' },
      { label: 'Add business', href: '/create' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Find a business', href: '/search' },
      secondary: { label: 'Add listing', href: '/create' },
    },
  },
  footer: {
    tagline: 'Business discovery, claims, and local profile visibility',
    description: 'A practical business listing directory for finding companies, comparing services, and creating searchable profiles.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Business listings', href: '/listing' },
          { label: 'Search directory', href: '/search' },
          { label: 'Add a business', href: '/create' },
          { label: 'Latest listings', href: '/business-listing' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for clean business discovery and owner-ready listings.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
