const BASE_URL = "https://jaksmetallab.in";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${BASE_URL}/#business`,
  name: "JAKS Metal Lab LLP",
  alternateName: ["JAKS Metal Lab", "Jaks Metallab", "JAKS Metal Testing Laboratory"],
  url: BASE_URL,
  logo: `${BASE_URL}/logo.jpeg`,
  image: `${BASE_URL}/logo.jpeg`,
  description:
    "JAKS Metal Lab LLP is an ISO/IEC 17025 aligned chemical metal testing laboratory in Ahmedabad, Gujarat. We provide OES spectrometric analysis, wet chemical analysis, carbon & sulphur analysis, material grade identification, and alloy composition testing for manufacturers and foundries across India.",
  telephone: "+918128123881",
  email: "jacksmetallab@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14, Fortune Industrial Park, Kathwada-Singarva Road, Near ISKCON Temple, Daskroi",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382430",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.043,
    longitude: 72.661,
  },
  hasMap: "https://www.google.com/maps/search/Fortune+Industrial+Park+Kathwada+Singarva+Ahmedabad",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+918128123881",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Gujarati"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Chemical Metal Testing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Spectrometric Analysis (OES)",
          description:
            "High-precision Optical Emission Spectrometry for rapid multi-element analysis of metals and alloys. Simultaneous detection of 20+ elements in under 60 seconds.",
          provider: { "@id": `${BASE_URL}/#business` },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wet Chemical Analysis",
          description:
            "Classical analytical chemistry for precise elemental determination using gravimetric, volumetric, and colorimetric techniques.",
          provider: { "@id": `${BASE_URL}/#business` },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carbon & Sulphur Analysis",
          description:
            "Combustion-based infrared detection for accurate C/S content determination in steel, cast iron, and non-ferrous metals.",
          provider: { "@id": `${BASE_URL}/#business` },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Material Grade Identification",
          description:
            "Comprehensive grade verification against IS, ASTM, EN, and JIS standards for incoming material quality assurance.",
          provider: { "@id": `${BASE_URL}/#business` },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Alloy Composition Testing",
          description:
            "Detailed compositional analysis of ferrous and non-ferrous alloys including stainless steel, aluminium, copper, and brass.",
          provider: { "@id": `${BASE_URL}/#business` },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Detailed Test Reporting",
          description:
            "Comprehensive test reports with full elemental breakdown, analytical data, and traceability documentation.",
          provider: { "@id": `${BASE_URL}/#business` },
        },
      },
    ],
  },
  areaServed: [
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "City", "name": "Surat" },
    { "@type": "City", "name": "Vadodara" },
    { "@type": "City", "name": "Rajkot" },
    { "@type": "State", "name": "Gujarat" },
    { "@type": "State", "name": "Maharashtra" },
    { "@type": "State", "name": "Rajasthan" },
    { "@type": "Country", "name": "India" },
  ],
  knowsAbout: [
    "Metal Testing",
    "Optical Emission Spectrometry",
    "Chemical Analysis",
    "Metallurgy",
    "Alloy Testing",
    "Material Science",
    "Steel Testing",
    "Non-Ferrous Metal Testing",
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, UPI",
  sameAs: ["https://wa.me/918128123881"],
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Optical Emission Spectrometry (OES) testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optical Emission Spectrometry (OES) is a high-precision analytical technique used to determine the elemental composition of metals and alloys in seconds. It can simultaneously detect 20+ elements including iron, manganese, carbon, silicon, chromium, nickel and more — making it the gold standard for rapid material grade verification in Ahmedabad and across India.",
      },
    },
    {
      "@type": "Question",
      name: "What metals does JAKS Metal Lab test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JAKS Metal Lab tests a comprehensive range of ferrous and non-ferrous metals including mild steel, alloy steel, stainless steel, cast iron, aluminium alloys, copper alloys, brass, bronze, and other industrial metals and alloys used by manufacturers and foundries.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a metal composition test take at JAKS Metal Lab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spectrometric analysis delivers results in under 60 seconds per sample. Full laboratory reports are typically issued on the same day. For bulk testing requirements, contact us at +91 81281 23881 to discuss turnaround timelines.",
      },
    },
    {
      "@type": "Question",
      name: "Where is JAKS Metal Lab located in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JAKS Metal Lab LLP is located at 14, Fortune Industrial Park, Kathwada-Singarva Road, Near ISKCON Temple, Daskroi, Ahmedabad – 382430, Gujarat. We are open Monday to Saturday, 9:00 AM to 7:00 PM.",
      },
    },
    {
      "@type": "Question",
      name: "Which international standards does JAKS Metal Lab follow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JAKS Metal Lab operates under quality management systems aligned with ISO/IEC 17025 standards and verifies materials against IS (Indian Standards), ASTM, EN (European), and JIS (Japanese) international standards.",
      },
    },
    {
      "@type": "Question",
      name: "Does JAKS Metal Lab serve clients outside Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. JAKS Metal Lab serves manufacturers, foundries, and quality-conscious industries across Gujarat (Surat, Vadodara, Rajkot), Maharashtra, Rajasthan, and pan-India. Contact us at +91 81281 23881 to discuss sample pickup and courier arrangements.",
      },
    },
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "JAKS Metal Lab LLP",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${BASE_URL}/#about` },
    { "@type": "ListItem", position: 3, name: "Services", item: `${BASE_URL}/#services` },
    { "@type": "ListItem", position: 4, name: "Contact", item: `${BASE_URL}/#contact` },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
