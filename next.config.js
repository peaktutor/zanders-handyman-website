/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Amplify static hosting (recommended)
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Skip ESLint during build (for faster deployment)
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Skip TypeScript checking during build (optional)
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    // For static export, use unoptimized images
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Optimize for static export
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Ensure all pages are statically generated
  generateBuildId: async () => {
    return 'zanders-handyman-build'
  },
}

