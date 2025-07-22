/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Amplify static hosting
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // SKIP ESLINT AND TYPESCRIPT CHECKS DURING BUILD
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    unoptimized: true, // Required for static export
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig