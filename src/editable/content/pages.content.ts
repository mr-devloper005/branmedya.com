import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Global business listings, local discovery, and verified company profiles',
      description: 'Search business listings, compare local companies, and create a trusted profile for customers who are ready to find you.',
      openGraphTitle: 'Global business listings and verified company profiles',
      openGraphDescription: 'Find companies by service, city, and category, or add your business to a clean searchable directory.',
      keywords: ['business listing', 'business directory', 'local companies', 'company profiles'],
    },
    hero: {
      badge: 'Global business listing database',
      title: ['Find trusted businesses', 'by service, city, and category.'],
      description: 'Search a cleaner business directory, compare companies faster, and help customers discover verified local profiles.',
      primaryCta: { label: 'Browse businesses', href: '/listing' },
      secondaryCta: { label: 'Add a business', href: '/create' },
      searchPlaceholder: 'Business type, service, or company name',
      focusLabel: 'Focus',
      featureCardBadge: 'directory growth',
      featureCardTitle: 'Profiles, claim status, locations, and contact paths stay easy to scan.',
      featureCardDescription: 'The homepage now behaves like a business database instead of a content magazine.',
    },
    intro: {
      badge: 'Why list here',
      title: 'A practical directory for businesses that need to be found, compared, and contacted.',
      paragraphs: [
        'Visitors arrive with a job in mind: find a company, check the location, compare the profile, and take action without fighting the page.',
        'Business owners can create a listing that gives search engines and customers a clearer profile with name, service category, summary, website, and contact details.',
        'The experience keeps directory pages compact, readable, and focused on business discovery rather than stretched promotional layouts.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Search by business name, service keyword, category, or city.',
        'Archive cards show identity, claim cues, location, and quick actions.',
        'Detail pages emphasize contact information, maps, reviews, and tags.',
        'Local account access lets owners submit and manage directory drafts.',
      ],
      primaryLink: { label: 'Browse listings', href: '/listing' },
      secondaryLink: { label: 'Create listing', href: '/create' },
    },
    cta: {
      badge: 'Add your company',
      title: 'Put your business where customers are already searching.',
      description: 'Create a listing with clean details, visible contact paths, and a profile designed for business discovery.',
      primaryCta: { label: 'Add a business', href: '/create' },
      secondaryCta: { label: 'Contact support', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Directory mission',
    title: 'A clearer business directory for people who need useful company information fast.',
    description: `${slot4BrandConfig.siteName} helps customers discover businesses by service, city, category, and trust signals without burying essential details.`,
    paragraphs: [
      'Most directory pages fail by making visitors hunt for the basics. This experience puts business identity, address, contact options, listing status, tags, and related companies into a layout that can be scanned in seconds.',
      'For owners, the goal is equally simple: create a business profile that is clean, searchable, and useful enough to support discovery across local and global markets.',
      'The site is designed around practical business-listing tasks: finding vendors, comparing nearby options, checking coverage areas, and opening a profile with enough context to take the next step.',
    ],
    values: [
      {
        title: 'Useful before decorative',
        description: 'Every card and detail page is shaped around names, places, categories, claim signals, and contact paths.',
      },
      {
        title: 'Discovery across markets',
        description: 'A visitor can move from a search result to related services, cities, tags, and comparable business profiles.',
      },
      {
        title: 'Owner-ready profiles',
        description: 'Create, claim, enrich, and share listings with content that reads like a real business profile.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Need help with a listing, claim, category, or business profile?',
    description: 'Tell us what business you are adding, updating, claiming, or reporting. Include enough listing detail so support can route the request quickly.',
    formTitle: 'Send listing request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search businesses, categories, cities, and company profiles across the directory.',
    },
    hero: {
      badge: 'Business search',
      title: 'Find a business by name, service, category, or location.',
      description: 'Use directory search to discover companies, narrow by category, and open profiles with contact-ready details.',
      placeholder: 'Search plumbers, restaurants, agencies, dentists...',
    },
    resultsTitle: 'Latest business profiles',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit a business listing for the directory.',
    },
    locked: {
      badge: 'Business owner access',
      title: 'Login to add or manage a business listing.',
      description: 'Use your account to submit company details, profile copy, website links, images, and service categories.',
    },
    hero: {
      badge: 'Listing workspace',
      title: 'Create a business profile customers can understand quickly.',
      description: 'Add a company name, category, website, image, summary, and useful listing details for directory discovery.',
    },
    formTitle: 'Business details',
    submitLabel: 'Submit listing',
    successTitle: 'Business listing submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login to manage business listings and directory submissions.',
      badge: 'Business access',
      title: 'Welcome back to your listing dashboard.',
      description: 'Login to add businesses, manage submitted profiles, and keep company details ready for discovery.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Create an account to add a business listing.',
      badge: 'Create owner account',
      title: 'Create an account to add your business.',
      description: 'Set up a local account so you can submit a profile, return to the listing workspace, and keep business details organized.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
