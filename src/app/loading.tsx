'use client'

import Image from 'next/image'

export default function LoadingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      
      {/* Loading Animation CSS */}
      <style jsx global>{`
        @keyframes gentle-bounce {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-20px) scale(1.05);
          }
        }
        
        .animate-gentle-bounce { 
          animation: gentle-bounce 2s ease-in-out infinite;
        }
      `}</style>

      {/* Centered Loading Content */}
      <div className="text-center">
        
        {/* Bouncing Logo */}
        <div className="relative w-32 h-32 mx-auto mb-8 animate-gentle-bounce">
          <div className="relative w-full h-full p-3 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-white via-gray-50 to-slate-100 rounded-xl shadow-inner">
              <div className="relative w-full h-full p-3">
                <Image
                  src="/images/3x2logo.png"
                  alt="Zanders Handyman Logo"
                  fill
                  className="object-contain"
                  sizes="128px"
                  priority
                />
              </div>
            </div>
            {/* Elegant accent elements */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-slate-500 to-slate-700 rounded-full shadow-lg animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Loading...</h2>
          <p className="text-lg text-slate-600">Montana's Trusted Handyman</p>
          
          {/* Loading Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-slate-600 rounded-full animate-pulse delay-200"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-slate-600/5 rounded-full blur-3xl"></div>
    </main>
  )
}