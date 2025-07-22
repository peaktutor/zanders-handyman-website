import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

// Optimize font loading with Next.js
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Handyman Services Bozeman MT | Zanders Handyman LLC | Any Job',
  description: 'Professional handyman services in Bozeman, MT. Painting, drywall, electrical, moving, repairs. 10+ years experience. Free estimates. Call (406) 231-5697',
  keywords: 'handyman Bozeman, home repair Montana, painting contractor, emergency handyman',
  authors: [{ name: 'Zanders Handyman LLC' }],
  creator: 'Zanders Handyman LLC',
  publisher: 'Zanders Handyman LLC',
  openGraph: {
    title: 'Zanders Handyman - Professional Services in Bozeman, MT',
    description: 'Any job, any size. Over 10 years of reliable handyman services in Bozeman and surrounding areas.',
    url: 'https://zandershandyman.com',
    siteName: 'Zanders Handyman LLC',
    images: [
      {
        url: '/images/banners/Banner1.webp',
        width: 1200,
        height: 800,
        alt: 'Zanders Handyman Services Bozeman MT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zanders Handyman - Bozeman MT Professional Services',
    description: 'Any job, any size. Professional handyman services in Bozeman, MT.',
    images: ['/images/banners/Banner1.webp'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${orbitron.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Zanders Handyman LLC",
              "image": "/images/3x2logo.png",
              "telephone": "406-231-5697",
              "email": "joeisoutside@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bozeman",
                "addressRegion": "MT",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.6770",
                "longitude": "-111.0429"
              },
              "url": "https://zandershandyman.com",
              "priceRange": "$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "45.6770",
                  "longitude": "-111.0429"
                },
                "geoRadius": "160934"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Handyman Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Painting Services",
                      "description": "Interior and exterior painting services"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Drywall Repair",
                      "description": "Professional drywall installation and repair"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Electrical Work",
                      "description": "Light fixture installation and basic electrical services"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Moving Services",
                      "description": "Residential and commercial moving assistance"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`bg-white text-slate-800 antialiased font-primary ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}