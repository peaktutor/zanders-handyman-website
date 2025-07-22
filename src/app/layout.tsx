import type { Metadata } from 'next'
import './globals.css'

// Configure your domain here when finalized
// Add this to your .env.local file: NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'

export const metadata: Metadata = {
  title: 'Professional Handyman Services Bozeman MT | Zanders Handyman LLC | 10+ Years Experience',
  description: 'Montana\'s trusted handyman serving Bozeman, Big Sky & Gallatin Valley. Painting, drywall, electrical, moving, repairs. 10+ years experience. Free estimates. Call (406) 231-5697 today!',
  keywords: 'handyman Bozeman MT, handyman services Montana, Bozeman home repair, painting contractor Bozeman, drywall repair Montana, electrical work Gallatin Valley, emergency handyman Big Sky, property maintenance Bozeman, home improvement Montana, trusted handyman services, professional handyman Bozeman, Montana handyman contractor, Gallatin Valley home repair, Big Sky property maintenance, Bozeman painting services, Montana electrical contractor, handyman near me Bozeman, reliable handyman Montana, experienced handyman services',
  authors: [{ name: 'Joe Zander' }],
  creator: 'Zanders Handyman LLC',
  publisher: 'Zanders Handyman LLC',
  metadataBase: new URL(SITE_DOMAIN),
  alternates: {
    canonical: SITE_DOMAIN,
  },
  openGraph: {
    title: 'Zanders Handyman LLC - Montana\'s Premier Handyman Services | Bozeman, Big Sky, Gallatin Valley',
    description: 'Any job, any size! Over 10 years of reliable handyman services in Bozeman and surrounding Montana areas. Trusted by Yellowstone Club. Free estimates offered.',
    url: SITE_DOMAIN,
    siteName: 'Zanders Handyman LLC',
    images: [
      {
        url: '/images/banners/Banner1.webp',
        width: 1200,
        height: 800,
        alt: 'Professional Handyman Services in Bozeman Montana - Zanders Handyman LLC',
      },
      {
        url: '/images/3x2logo.png',
        width: 1200,
        height: 800,
        alt: 'Zanders Handyman LLC Logo - Montana Professional Handyman Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zanders Handyman - Professional Montana Handyman Services | Bozeman, Big Sky',
    description: 'Any job, any size! 10+ years serving Montana. Painting, repairs, electrical, moving. Free estimates. Call (406) 231-5697',
    images: ['/images/banners/Banner1.webp'],
    creator: '@zandershandyman',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
  category: 'Home Services',
  classification: 'Professional Services',
  other: {
    'geo.region': 'US-MT',
    'geo.placename': 'Bozeman',
    'geo.position': '45.6770;-111.0429',
    'ICBM': '45.6770, -111.0429',
    'DC.title': 'Zanders Handyman LLC - Professional Handyman Services Bozeman Montana',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Enhanced Viewport and Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Local Business Information */}
        <meta name="geo.region" content="US-MT" />
        <meta name="geo.placename" content="Bozeman, Montana" />
        <meta name="geo.position" content="45.6770;-111.0429" />
        <meta name="ICBM" content="45.6770, -111.0429" />
        
        {/* Enhanced Favicon and Apple Touch Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Comprehensive Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${SITE_DOMAIN}/#business`,
              "name": "Zanders Handyman LLC",
              "alternateName": "Zanders Handyman",
              "description": "Professional handyman services in Bozeman, Montana and surrounding areas. Over 10 years of experience providing quality home repairs, painting, electrical work, and property maintenance.",
              "image": [
                `${SITE_DOMAIN}/images/3x2logo.png`,
                `${SITE_DOMAIN}/images/banners/Banner1.webp`,
                `${SITE_DOMAIN}/images/portraits/Joe_Zander1.webp`,
                `${SITE_DOMAIN}/images/projects/BathroomAppliance.webp`,
                `${SITE_DOMAIN}/images/projects/Staircase.webp`,
                `${SITE_DOMAIN}/images/projects/Patio.webp`
              ],
              "logo": {
                "@type": "ImageObject",
                "url": `${SITE_DOMAIN}/images/3x2logo.png`,
                "width": 300,
                "height": 200
              },
              "telephone": "+14062315697",
              "email": "joeisoutside@gmail.com",
              "founder": {
                "@type": "Person",
                "name": "Joe Zander",
                "jobTitle": "Owner & Operator",
                "image": `${SITE_DOMAIN}/images/portraits/Joe_Zander1.webp`
              },
              "foundingDate": "2016",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bozeman",
                "addressRegion": "MT",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.6770,
                "longitude": -111.0429
              },
              "url": SITE_DOMAIN,
              "sameAs": [
                "https://www.facebook.com/zandershandyman",
                "https://www.instagram.com/zandershandyman",
                "https://www.linkedin.com/company/zanders-handyman-llc"
              ],
              "priceRange": "$$",
              "currenciesAccepted": "USD",
              "paymentAccepted": "Cash, Check, Credit Card",
              "openingHours": [
                "Mo-Fr 08:00-17:00",
                "Sa 09:00-15:00"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "15:00"
                }
              ],
              "serviceArea": [
                {
                  "@type": "City",
                  "name": "Bozeman",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Montana"
                  }
                },
                {
                  "@type": "City",
                  "name": "Big Sky",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Montana"
                  }
                },
                {
                  "@type": "City",
                  "name": "Belgrade",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Montana"
                  }
                },
                {
                  "@type": "City",
                  "name": "Livingston",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Montana"
                  }
                },
                {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 45.6770,
                    "longitude": -111.0429
                  },
                  "geoRadius": "160934"
                }
              ],
              "areaServed": {
                "@type": "State",
                "name": "Montana",
                "containsPlace": [
                  "Bozeman",
                  "Big Sky",
                  "Belgrade",
                  "Livingston",
                  "Gallatin Valley"
                ]
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Professional Handyman Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Painting & Staining Services",
                      "description": "Premium interior & exterior painting with Montana-quality preparation and weather-resistant finishes",
                      "serviceType": "Painting",
                      "areaServed": "Montana"
                    },
                    "eligibleRegion": {
                      "@type": "State",
                      "name": "Montana"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Drywall Installation & Repair",
                      "description": "Expert drywall installation and seamless repair work with precision craftsmanship",
                      "serviceType": "Drywall",
                      "areaServed": "Montana"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Electrical Services",
                      "description": "Safe electrical installations including fixtures, outlets, and basic wiring systems",
                      "serviceType": "Electrical",
                      "areaServed": "Montana"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cleaning Services",
                      "description": "Comprehensive property maintenance including gutter cleaning and move-out services",
                      "serviceType": "Cleaning",
                      "areaServed": "Montana"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Moving Services",
                      "description": "Reliable moving and transport services with careful handling for Montana residents",
                      "serviceType": "Moving",
                      "areaServed": "Montana"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "General Maintenance & Repairs",
                      "description": "Complete property care with preventive maintenance and professional improvements",
                      "serviceType": "Maintenance",
                      "areaServed": "Montana"
                    }
                  }
                ]
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "name": "Free Estimates",
                  "description": "Complimentary project estimates for all Montana handyman services"
                },
                {
                  "@type": "Offer",
                  "name": "Emergency Services",
                  "description": "Available for urgent repairs and maintenance needs"
                }
              ],
              "slogan": "Taking Care of the Jobs You Don't Want — With Care and Cleanliness",
              "award": "Trusted by Yellowstone Club and Blasting Technologies",
              "knowsAbout": [
                "Home Repair",
                "Painting",
                "Drywall",
                "Electrical Work",
                "Property Maintenance",
                "Montana Home Care",
                "Residential Repairs"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${SITE_DOMAIN}/#organization`,
              "name": "Zanders Handyman LLC",
              "url": SITE_DOMAIN,
              "logo": {
                "@type": "ImageObject",
                "url": `${SITE_DOMAIN}/images/3x2logo.png`,
                "width": 300,
                "height": 200
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+14062315697",
                "contactType": "customer service",
                "areaServed": "Montana",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bozeman",
                "addressRegion": "MT",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.facebook.com/zandershandyman",
                "https://www.instagram.com/zandershandyman"
              ]
            })
          }}
        />

        {/* Person Schema for Joe Zander */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `${SITE_DOMAIN}/#person`,
              "name": "Joe Zander",
              "jobTitle": "Owner & Operator",
              "worksFor": {
                "@type": "LocalBusiness",
                "name": "Zanders Handyman LLC"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bozeman",
                "addressRegion": "Montana",
                "addressCountry": "US"
              },
              "telephone": "+14062315697",
              "email": "joeisoutside@gmail.com",
              "image": `${SITE_DOMAIN}/images/portraits/Joe_Zander1.webp`,
              "knowsAbout": [
                "Handyman Services",
                "Home Repair",
                "Montana Construction",
                "Property Maintenance"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Professional Handyman",
                "occupationLocation": {
                  "@type": "State",
                  "name": "Montana"
                }
              }
            })
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://cornerstonedeveloping.com/#website",
              "url": "https://cornerstonedeveloping.com",
              "name": "Zanders Handyman LLC",
              "description": "Professional handyman services in Bozeman, Montana and surrounding areas",
              "publisher": {
                "@id": `${SITE_DOMAIN}/#organization`
              },
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": `${SITE_DOMAIN}/?s={search_term_string}`
                  },
                  "query-input": "required name=search_term_string"
                }
              ],
              "inLanguage": "en-US"
            })
          }}
        />

        {/* Service Area Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Professional Handyman Services",
              "provider": {
                "@id": `${SITE_DOMAIN}/#business`
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Bozeman",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Montana"
                  }
                },
                {
                  "@type": "City", 
                  "name": "Big Sky",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Montana"
                  }
                },
                {
                  "@type": "City",
                  "name": "Belgrade", 
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Montana"
                  }
                },
                {
                  "@type": "City",
                  "name": "Livingston",
                  "containedInPlace": {
                    "@type": "State", 
                    "name": "Montana"
                  }
                }
              ],
              "serviceType": "Handyman Services",
              "description": "Comprehensive handyman services including painting, drywall, electrical work, moving, and general repairs for residential and commercial properties in Montana.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "USD"
              }
            })
          }}
        />

        {/* FAQ Schema for Common Questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What areas does Zanders Handyman serve in Montana?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zanders Handyman LLC serves Bozeman, Big Sky, Belgrade, Livingston, and the greater Gallatin Valley area. We travel up to 100 miles for larger projects throughout Montana."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer free estimates for handyman services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer free estimates for all handyman projects in the Bozeman and surrounding Montana areas. Call (406) 231-5697 to schedule your free estimate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of handyman services do you provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide comprehensive handyman services including painting & staining, drywall repair, electrical work, cleaning services, moving assistance, and general maintenance and repairs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long has Zanders Handyman been in business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zanders Handyman LLC has been serving Montana since 2016, with over 10 years of experience in professional handyman services. We're trusted by notable clients including Yellowstone Club."
                  }
                }
              ]
            })
          }}
        />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Additional Performance Optimizations */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body className="bg-zanders-platinum text-zanders-charcoal antialiased">
        {children}
      </body>
    </html>
  )
}