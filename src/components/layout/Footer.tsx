'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Award,
  Linkedin,
  Building,
  Shield,
  Star,
  CheckCircle
} from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Simple, Clean Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes subtleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
          }
          
          @keyframes gentleGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
            50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.2); }
          }
          
          .animate-subtle-float {
            animation: subtleFloat 4s ease-in-out infinite;
          }
          
          .animate-gentle-glow {
            animation: gentleGlow 3s ease-in-out infinite;
          }
          
          .clean-glass {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .clean-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
          }
        `
      }} />

      <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        {/* Simple background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-500 rounded-full blur-3xl"></div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 animate-subtle-float">
                  <Image
                    src="/images/nccs_logo.png"
                    alt="NCCS Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    NCCS
                  </div>
                  <div className="text-sm text-slate-300">
                    Commercial Construction
                  </div>
                </div>
              </Link>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Building excellence in commercial construction with 25+ years of proven integrity and craftsmanship.
              </p>

              {/* Simple credentials */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">LEED Green Associate</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">BuildZoom 92/100</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Licensed DE & CA</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <div>
                    <a 
                      href="tel:+13022583133"
                      className="text-white hover:text-blue-300 transition-colors font-medium"
                    >
                      (302) 258-3133
                    </a>
                    <div className="text-slate-400 text-xs">Delaware Office</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <div>
                    <a 
                      href="mailto:info@nccsus.com"
                      className="text-white hover:text-blue-300 transition-colors font-medium"
                    >
                      info@nccsus.com
                    </a>
                    <div className="text-slate-400 text-xs">Project Inquiries</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-white font-medium">Milton, Delaware</div>
                    <div className="text-slate-400 text-xs">301 Union Street, 19968</div>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="mt-6">
                <a
                  href="https://www.linkedin.com/in/matthew-riehle-75a492132/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 clean-glass rounded-lg hover:bg-white/10 transition-all duration-300 clean-hover"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-slate-300">Connect with Matthew</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Financial Institutions', href: '/services/financial-institutions' },
                  { label: 'Multi-Site Projects', href: '/services/multi-site' },
                  { label: 'Federal Contracting', href: '/services/federal' },
                  { label: 'Commercial Construction', href: '/services/commercial' },
                  { label: 'Design-Build', href: '/services/design-build' },
                  { label: 'Historic Restoration', href: '/services/historic' },
                ].map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-slate-300 hover:text-blue-300 transition-colors text-sm"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Get Started</h3>
              
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Ready to discuss your commercial construction project? Let's build something exceptional together.
              </p>

              <Button
                href="/contact"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-6"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Building className="w-4 h-4" />
                  <span>Start Your Project</span>
                </div>
              </Button>
              
              {/* Simple stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="clean-glass rounded-lg p-3">
                  <div className="text-lg font-bold text-blue-300">500+</div>
                  <div className="text-xs text-slate-400">Projects</div>
                </div>
                <div className="clean-glass rounded-lg p-3">
                  <div className="text-lg font-bold text-emerald-300">25+</div>
                  <div className="text-xs text-slate-400">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Bottom Bar */}
        <div className="relative z-10 border-t border-slate-700/50 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              <div className="text-slate-400 text-sm text-center md:text-left">
                © {currentYear} Nationwide Commercial Contracting Solutions, LLC. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-4 text-slate-400 text-sm">
                <span>Professional. Reliable. Exceptional.</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>Ready to Build</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer