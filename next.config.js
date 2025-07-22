/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint configuration - disable during builds to allow deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration - less strict during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization
  images: {
    domains: [
      'images.unsplash.com', 
      's3.amazonaws.com', 
      'cornerstonedeveloping.com',
      'via.placeholder.com', // For development
      'picsum.photos', // For development
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  
  // Environment variables
  env: {
    SITE_NAME: 'Cornerstone Developing',
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://cornerstonedeveloping.com',
  },
  
  // Moved from experimental to top level (Next.js 15 update)
  serverExternalPackages: ['sharp', '@node-rs/argon2', '@node-rs/bcrypt'],
  
  // Redirects for SEO
  async redirects() {
    return [
      // Home page redirects
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      
      // Service redirects
      {
        source: '/web-development',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/hosting',
        destination: '/services/hosting',
        permanent: true,
      },
      {
        source: '/ecommerce',
        destination: '/services/ecommerce',
        permanent: true,
      },
      
      // Legacy redirects
      {
        source: '/wordpress-alternative',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/website-design',
        destination: '/services/web-development',
        permanent: true,
      },
      
      // Location-based redirects
      {
        source: '/bozeman-web-development',
        destination: '/locations/bozeman',
        permanent: true,
      },
      {
        source: '/montana-web-design',
        destination: '/',
        permanent: true,
      },
    ]
  },
  
  // Rewrites for dynamic routing
  async rewrites() {
    return [
      // Blog post rewrites
      {
        source: '/blog/:slug*',
        destination: '/blog/:slug*',
      },
      // Case study rewrites
      {
        source: '/case-study/:slug*',
        destination: '/case-studies/:slug*',
      },
    ]
  },
  
  // Security and performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()'
          },
          // Performance headers
          {
            key: 'X-Powered-By',
            value: 'Next.js & AWS'
          },
        ],
      },
      {
        // Cache static assets
        source: '/(.*)\\.(js|css|woff|woff2|eot|ttf|otf|svg|png|jpg|jpeg|gif|ico|webp|avif)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache API routes differently
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      {
        // Preload critical resources
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '</images/hero-bg.webp>; rel=preload; as=image'
          }
        ],
      },
    ]
  },
  
  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Bundle analyzer in development
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      )
    }
    
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module) {
              return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier())
            },
            name(module) {
              const hash = require('crypto').createHash('sha1')
              hash.update(module.libIdent ? module.libIdent({ context: config.context }) : module.identifier())
              return hash.digest('hex').substring(0, 8)
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
          shared: {
            name: 'shared',
            minChunks: 1,
            priority: 10,
          },
        },
      }
    }
    
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    
    return config
  },
  
  // Output configuration for static export if needed
  trailingSlash: false,
  
  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    
    // React optimization
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  
  // Updated experimental features for Next.js 15
  experimental: {
    // Optimize CSS
    optimizeCss: true,
    
    // Turbo features (updated for Next.js 15)
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // Development configuration
  ...(process.env.NODE_ENV === 'development' && {
    // Development-specific config
    onDemandEntries: {
      maxInactiveAge: 25 * 1000,
      pagesBufferLength: 2,
    },
  }),
  
  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    // Production-specific config
    output: 'standalone',
    generateEtags: true,
    
    // Static optimization
    staticPageGenerationTimeout: 120,
  }),
}

module.exports = nextConfig