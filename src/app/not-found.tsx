'use client'

import Image from 'next/image'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFoundPage() {
  const goHome = () => {
    // In a real Next.js app, you'd use router.push('/') or window.location.href = '/'
    window.location.href = '/'
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      
      {/* 404 Animation CSS */}
      <style jsx global>{`
        @keyframes subtle-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          33% { 
            transform: translateY(-8px) rotate(0.5deg);
          }
          66% { 
            transform: translateY(-4px) rotate(-0.5deg);
          }
        }
        
        .animate-subtle-float { 
          animation: subtle-float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Centered 404 Content */}
      <div className="text-center max-w-2xl mx-auto px-6">
        
        {/* Logo */}
        <div className="relative w-40 h-40 mx-auto mb-8 animate-subtle-float">
          <div className="relative w-full h-full p-4 rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            <div className="absolute inset-3 bg-gradient-to-br from-white via-gray-50 to-slate-100 rounded-2xl shadow-inner">
              <div className="relative w-full h-full p-4">
                <Image
                  src="/images/3x2logo.png"
                  alt="Zanders Handyman Logo"
                  fill
                  className="object-contain"
                  sizes="160px"
                  priority
                />
              </div>
            </div>
            {/* Elegant accent elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-slate-500 to-slate-700 rounded-full shadow-lg animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* 404 Message */}
        <div className="space-y-6 mb-10">
          <div className="space-y-3">
            <h1 className="text-8xl font-black text-slate-300">404</h1>
            <h2 className="text-3xl font-bold text-slate-800">Page Not Found</h2>
          </div>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            Sorry, this page wasn't found.<br />
            Let's get you back to Montana's most trusted handyman services.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goHome}
            className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-slate-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Home className="w-6 h-6 mr-3 relative z-10" />
            <span className="relative z-10">Back to Home</span>
          </button>
          
          <a
            href="tel:4062315697"
            className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500"
          >
            <span className="mr-3">📞</span>
            Call (406) 231-5697
          </a>
        </div>

        {/* Montana Badge */}
        <div className="mt-12 inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-lg rounded-full border border-gray-200 shadow-lg">
          <div className="w-8 h-8 bg-gradient-to-br from-slate-700 via-blue-800 to-slate-900 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">MT</span>
          </div>
          <span className="text-slate-700 font-semibold">Montana Born & Raised</span>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-slate-600/5 rounded-full blur-3xl"></div>
      <div className="absolute top-3/4 left-3/4 w-32 h-32 bg-slate-600/5 rounded-full blur-2xl"></div>
    </main>
  )
}