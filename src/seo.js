/**
 * Stars, Stripes & Wild India - Comprehensive SEO Configuration & Metadata
 *
 * Target Keywords:
 * - stars n stripes
 * - stars n stripes india
 * - photo expedition in inida / photo expedition in india
 * - 2027 photography tours
 * and related high-ranking wildlife & astrophotography search terms.
 */

export const SEO_KEYWORDS = {
  // Primary brand and core search queries
  primary: [
    "stars n stripes",
    "stars n stripes india",
    "stars & stripes india",
    "stars and stripes india",
    "stars stripes and wild india",
    "starsnstripesindia",
    "starsnstripesindia.com",
  ],

  // Core expedition & tour search terms
  tours: [
    "photo expedition in inida",
    "photo expedition in india",
    "2027 photography tours",
    "photography tours 2027",
    "india photography tours 2027",
    "wildlife photography expedition india 2027",
    "astrophotography workshop india 2027",
    "tiger safari photography tour 2027",
    "central india photo safari 2027",
    "exclusive photography expedition 2027",
    "small group photography tour india",
    "luxury wildlife photography tour india",
    "10 day photography tour india",
    "april 2027 photo tour india",
  ],

  // Astrophotography & Dark Sky search terms
  astrophotography: [
    "astrophotography tours india",
    "pench dark sky park",
    "pench dark sky astrophotography",
    "dark sky reserve india photography",
    "milky way photography tour india",
    "night sky photography workshop",
    "star photography tour india",
    "darksky international pench",
    "star tracking photography workshop",
    "astrophotography masterclass india",
    "deep sky night photography tours",
    "astrophotography coaching india",
    "stargazing and astro tour india",
  ],

  // Tiger & Wildlife Safari search terms
  wildlife: [
    "tadoba tiger photography safari",
    "pench tiger safari photography",
    "bengal tiger photography tour",
    "tiger safari tours 2027",
    "tadoba andhari tiger reserve photography",
    "pench national park wildlife photography",
    "wildlife photography masterclass india",
    "big cat photo tour india",
    "exclusive tiger safari jeeps",
    "central india tiger photo expedition",
    "safari photo workshop 2027",
  ],

  // Instructors, Leaders & Experts
  mentors: [
    "Himanshu Bagde wildlife photography",
    "Himanshu Bagde tiger safari guide",
    "P S Srinivas astrophotography",
    "Srini astrophotographer",
    "Abhishek Pawse DarkSky International",
    "Abhishek Pawse astrophotography expert",
    "professional photography guides india",
  ],

  // Destinations & Locations
  locations: [
    "Pench National Park Madhya Pradesh",
    "Tadoba-Andhari Tiger Reserve Maharashtra",
    "Nagpur central india safari",
    "India Dark Sky Park tour",
    "central india national parks photography",
  ],

  // High-intent search combinations
  intent: [
    "best tiger photography tours 2027",
    "astrophotography and wildlife safari combination",
    "how to photograph tigers in india safari",
    "pench dark sky photography workshop 2027",
    "luxury photo safari india booking",
    "commercial photography workshop central india",
  ],
}

// Flattened keyword list for meta tags
export const ALL_KEYWORDS = [
  ...SEO_KEYWORDS.primary,
  ...SEO_KEYWORDS.tours,
  ...SEO_KEYWORDS.astrophotography,
  ...SEO_KEYWORDS.wildlife,
  ...SEO_KEYWORDS.mentors,
  ...SEO_KEYWORDS.locations,
  ...SEO_KEYWORDS.intent,
]

export const KEYWORDS_STRING = ALL_KEYWORDS.join(", ")

// Base site configuration
export const SITE_CONFIG = {
  siteName: "Stars, Stripes & Wild India",
  siteUrl: "https://www.starsnstripesindia.com",
  defaultTitle:
    "Stars, Stripes & Wild India | Astrophotography & Tiger Safari Expedition",
  defaultDescription:
    "An exclusive 10-day Astrophotography and Tiger Photography Expedition in Pench National Park & Tadoba-Andhari Tiger Reserve, India (April 5–14, 2027). Co-guided by Himanshu Bagde, P S Srinivas (Srini), and Abhishek Pawse.",
  defaultImage: "https://www.starsnstripesindia.com/logo.jpg",
  twitterHandle: "@starsnstripesindia",
  eventDates: {
    startDate: "2027-04-05",
    endDate: "2027-04-14",
    location:
      "Pench National Park & Tadoba-Andhari Tiger Reserve, Central India",
  },
  contactEmail: "contact@starsnstripesindia.com",
}

// Route-specific SEO Metadata
export const PAGE_SEO = {
  "/": {
    title:
      "Stars, Stripes & Wild India | Astrophotography & Tiger Safari Expedition 2027",
    description:
      "Join our premier 10-day astrophotography and Bengal tiger safari photo expedition in Pench Dark Sky Park and Tadoba-Andhari Tiger Reserve, India (April 5–14, 2027). Limited to 8 photographers.",
    keywords: [
      "stars n stripes",
      "stars n stripes india",
      "photo expedition in inida",
      "photo expedition in india",
      "2027 photography tours",
      "pench dark sky park astrophotography",
      "tadoba tiger photography safari",
      "wildlife photography tour india",
      "milky way photography expedition 2027",
    ].join(", "),
    canonical: "https://www.starsnstripesindia.com/",
    ogImage: "https://www.starsnstripesindia.com/logo.jpg",
  },
  "/itinerary": {
    title:
      "10-Day Expedition Itinerary | Stars, Stripes & Wild India (April 5–14, 2027)",
    description:
      "Detailed day-by-day expedition schedule: 4 nights in Pench (India's 1st Dark Sky Park for Milky Way astro sessions) and 5 nights in Tadoba-Andhari Tiger Reserve for 8 private open-top safari drives.",
    keywords: [
      "2027 photography tours itinerary",
      "pench astrophotography schedule",
      "tadoba tiger safari drives",
      "photo expedition in india itinerary",
      "stars n stripes india schedule",
    ].join(", "),
    canonical: "https://www.starsnstripesindia.com/itinerary",
    ogImage: "https://www.starsnstripesindia.com/logo.jpg",
  },
  "/destinations": {
    title:
      "Destinations: Pench Dark Sky Park & Tadoba Tiger Reserve | Stars n Stripes India",
    description:
      "Discover Pench National Park — India’s first Dark Sky Park with Bortle Class 3 skies — and Tadoba-Andhari Tiger Reserve, Maharashtra’s premier high-density Bengal tiger habitat.",
    keywords: [
      "pench dark sky park",
      "tadoba andhari tiger reserve",
      "photo expedition in inida destinations",
      "bortle class 3 skies pench",
      "stars n stripes india locations",
    ].join(", "),
    canonical: "https://www.starsnstripesindia.com/destinations",
    ogImage: "https://www.starsnstripesindia.com/logo.jpg",
  },
  "/instructors": {
    title:
      "Co-Directors & Guides: Himanshu Bagde, P S Srinivas & Abhishek Pawse | Stars n Stripes",
    description:
      "Learn from master wildlife photographer Himanshu Bagde (700+ tigers tracked), astrophotographer P S Srinivas (Srini), and DarkSky International advocate Abhishek Pawse.",
    keywords: [
      "Himanshu Bagde wildlife photographer",
      "P S Srinivas astrophotography",
      "Abhishek Pawse dark sky expert",
      "stars n stripes co-directors",
      "photo expedition in inida instructors",
    ].join(", "),
    canonical: "https://www.starsnstripesindia.com/instructors",
    ogImage: "https://www.starsnstripesindia.com/logo.jpg",
  },
  "/whats-included": {
    title:
      "What's Included: Luxury Lodging, Private Jeeps & Gear Guide | Stars n Stripes India",
    description:
      "Explore everything included: premium safari lodges (single occupancy available), max 2 photographers per open safari vehicle, all permits, meals, internal transit, and night-sky field instruction.",
    keywords: [
      "stars n stripes tour inclusions",
      "wildlife photography gear list india",
      "2027 photography tours accommodations",
      "photo expedition in india gear checklist",
    ].join(", "),
    canonical: "https://www.starsnstripesindia.com/whats-included",
    ogImage: "https://www.starsnstripesindia.com/logo.jpg",
  },
  "/included": {
    title:
      "What's Included: Luxury Lodging, Private Jeeps & Gear Guide | Stars n Stripes India",
    description:
      "Explore everything included: premium safari lodges, max 2 photographers per open safari vehicle, all permits, meals, internal transit, and night-sky field instruction.",
    keywords: [
      "stars n stripes tour inclusions",
      "photo expedition in inida whats included",
      "2027 photography tours inclusions",
    ].join(", "),
    canonical: "https://www.starsnstripesindia.com/whats-included",
    ogImage: "https://www.starsnstripesindia.com/logo.jpg",
  },
  "/pricing": {
    title:
      "Expedition Pricing & Payment Schedule | Stars, Stripes & Wild India 2027",
    description:
      "Transparent tiered pricing for international and Indian participants, single room supplements, flexible payment milestones, and clear cancellation terms.",
    keywords: [
      "stars n stripes pricing",
      "2027 photography tours cost",
      "photo expedition in india cost",
      "tiger safari photography tour price",
    ].join(", "),
    canonical: "https://www.starsnstripesindia.com/pricing",
    ogImage: "https://www.starsnstripesindia.com/logo.jpg",
  },
  "/faq": {
    title: "Frequently Asked Questions & Travel Guide | Stars n Stripes India",
    description:
      "Find answers regarding visas, internal flights to Nagpur (NAG), equipment recommendations, weather in April, fitness requirements, and health precautions.",
    keywords: [
      "stars n stripes faq",
      "photo expedition in inida travel guide",
      "india visa for photography tour",
      "nagpur airport transfer tiger safari",
    ].join(", "),
    canonical: "https://www.starsnstripesindia.com/faq",
    ogImage: "https://www.starsnstripesindia.com/logo.jpg",
  },
  "/book": {
    title: "Reserve Your Spot | Stars, Stripes & Wild India (April 5–14, 2027)",
    description:
      "Secure your place for the exclusive 8-photographer Astrophotography & Tiger Safari Expedition in Pench & Tadoba, India. Book online or contact co-directors.",
    keywords: [
      "book stars n stripes expedition",
      "reserve 2027 photography tours",
      "photo expedition in inida booking",
      "stars n stripes india reserve",
    ].join(", "),
    canonical: "https://www.starsnstripesindia.com/book",
    ogImage: "https://www.starsnstripesindia.com/logo.jpg",
  },
}

// Schema.org Structured Data Generators (JSON-LD)
export const SCHEMA_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stars, Stripes & Wild India",
  alternateName: [
    "Stars n Stripes India",
    "Stars and Stripes India",
    "Stars n Stripes",
  ],
  url: "https://www.starsnstripesindia.com",
  logo: "https://www.starsnstripesindia.com/logo.jpg",
  description:
    "Premier photographic expeditions in India combining world-class wildlife tiger safaris with Dark Sky astrophotography workshops.",
  founders: [
    {
      "@type": "Person",
      name: "Himanshu Bagde",
      jobTitle: "Co-Director & Wildlife Photography Lead",
      url: "https://himanshubagde.com",
    },
    {
      "@type": "Person",
      name: "P S Srinivas",
      jobTitle: "Co-Director & Astrophotography Guide",
    },
  ],
  keywords: KEYWORDS_STRING,
}

export const SCHEMA_TOUR_EVENT = {
  "@context": "https://schema.org",
  "@type": ["TouristTrip", "Event"],
  name: "Stars, Stripes & Wild India: Astrophotography & Tiger Safari Expedition 2027",
  alternateName: "Stars n Stripes India Photo Expedition",
  description:
    "An exclusive 10-day photography expedition in Pench National Park (India's 1st Dark Sky Park) and Tadoba-Andhari Tiger Reserve (April 5–14, 2027). Includes 8 safari drives with max 2 photographers per vehicle and nightly Bortle 3 astrophotography coaching.",
  startDate: "2027-04-05",
  endDate: "2027-04-14",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: [
    {
      "@type": "Place",
      name: "Pench National Park (Dark Sky Park)",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Madhya Pradesh",
        addressCountry: "India",
      },
    },
    {
      "@type": "Place",
      name: "Tadoba-Andhari Tiger Reserve",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Maharashtra",
        addressCountry: "India",
      },
    },
  ],
  organizer: {
    "@type": "Organization",
    name: "Stars, Stripes & Wild India",
    url: "https://www.starsnstripesindia.com",
  },
  performer: [
    {
      "@type": "Person",
      name: "Himanshu Bagde",
      jobTitle: "Wildlife Photography Guide",
    },
    {
      "@type": "Person",
      name: "P S Srinivas (Srini)",
      jobTitle: "Astrophotography & Post-Processing Guide",
    },
    {
      "@type": "Person",
      name: "Abhishek Pawse",
      jobTitle: "Dark Sky & Astro Expert",
    },
  ],
  offers: {
    "@type": "Offer",
    url: "https://www.starsnstripesindia.com/pricing",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validFrom: "2026-01-01",
  },
  keywords: KEYWORDS_STRING,
}

/**
 * Dynamically updates meta tags, canonical link, and JSON-LD structured data in document head
 * @param {string} pathname Current route path (e.g. '/' or '/itinerary')
 */
export function applySEO(pathname = window.location.pathname) {
  if (typeof document === "undefined") return

  const normalizedPath =
    pathname.endsWith("/") && pathname.length > 1
      ? pathname.slice(0, -1)
      : pathname
  const seoData = PAGE_SEO[normalizedPath] ||
    PAGE_SEO["/"] || {
      title: SITE_CONFIG.defaultTitle,
      description: SITE_CONFIG.defaultDescription,
      keywords: KEYWORDS_STRING,
      canonical: `${SITE_CONFIG.siteUrl}${pathname}`,
      ogImage: SITE_CONFIG.defaultImage,
    }

  // 1. Update Title
  document.title = seoData.title

  // 2. Helper to set or create meta tag
  const setMeta = (nameAttr, nameVal, contentVal) => {
    let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`)
    if (!el) {
      el = document.createElement("meta")
      el.setAttribute(nameAttr, nameVal)
      document.head.appendChild(el)
    }
    el.setAttribute("content", contentVal)
  }

  // 3. Update Standard Meta
  setMeta("name", "description", seoData.description)
  setMeta("name", "keywords", seoData.keywords || KEYWORDS_STRING)

  // 4. Update OpenGraph Tags
  setMeta("property", "og:title", seoData.title)
  setMeta("property", "og:description", seoData.description)
  setMeta(
    "property",
    "og:url",
    seoData.canonical || `${SITE_CONFIG.siteUrl}${pathname}`,
  )
  setMeta("property", "og:image", seoData.ogImage || SITE_CONFIG.defaultImage)

  // 5. Update Twitter Card Tags
  setMeta("name", "twitter:title", seoData.title)
  setMeta("name", "twitter:description", seoData.description)
  setMeta("name", "twitter:image", seoData.ogImage || SITE_CONFIG.defaultImage)

  // 6. Update Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (!canonicalLink) {
    canonicalLink = document.createElement("link")
    canonicalLink.setAttribute("rel", "canonical")
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.setAttribute(
    "href",
    seoData.canonical || `${SITE_CONFIG.siteUrl}${pathname}`,
  )

  // 7. Inject JSON-LD Structured Data Schema if not already present
  let schemaScript = document.getElementById("seo-schema-jsonld")
  if (!schemaScript) {
    schemaScript = document.createElement("script")
    schemaScript.id = "seo-schema-jsonld"
    schemaScript.type = "application/ld+json"
    document.head.appendChild(schemaScript)
  }

  schemaScript.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      SCHEMA_ORGANIZATION,
      SCHEMA_TOUR_EVENT,
      {
        "@type": "WebPage",
        "@id": seoData.canonical,
        url: seoData.canonical,
        name: seoData.title,
        description: seoData.description,
      },
    ],
  })
}

export default {
  SEO_KEYWORDS,
  ALL_KEYWORDS,
  KEYWORDS_STRING,
  SITE_CONFIG,
  PAGE_SEO,
  SCHEMA_ORGANIZATION,
  SCHEMA_TOUR_EVENT,
  applySEO,
}
