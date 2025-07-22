'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import { Menu, X, Phone, Mail, Award, Building, Shield } from 'lucide-react'

interface NavigationItem {
  label: string
  href: string
}

const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },      // ← SINGLE LINK (no dropdown)
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isActiveRoute = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Premium Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes premiumFloat {
            0%, 100% { 
              transform: translateY(0px) scale(1);
            }
            50% { 
              transform: translateY(-4px) scale(1.02);
            }
          }
          
          @keyframes subtleGlow {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
            }
            50% { 
              box-shadow: 0 0 30px rgba(59, 130, 246, 0.25);
            }
          }
          
          @keyframes elegantSlide {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }
          
          .animate-premium-float {
            animation: premiumFloat 6s ease-in-out infinite;
          }
          
          .animate-subtle-glow {
            animation: subtleGlow 3s ease-in-out infinite;
          }
          
          .animate-elegant-slide {
            animation: elegantSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .premium-gradient {
            background: linear-gradient(135deg, 
              rgba(15, 23, 42, 0.98) 0%, 
              rgba(30, 41, 59, 0.98) 50%, 
              rgba(51, 65, 85, 0.98) 100%);
          }
          
          .nav-glass {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.12);
          }
          
          .elegant-curve {
            border-radius: 12px;
          }
          
          .luxury-curve {
            border-radius: 16px;
          }
          
          .premium-curve {
            border-radius: 20px;
          }
        `
      }} />

      {/* Sophisticated Top Bar */}
      <div className="premium-gradient text-white py-3 hidden lg:block relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-16 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/3 w-24 h-12 bg-slate-300 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-between items-center">
            {/* Contact Information */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
                  <Phone className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <a 
                    href="tel:+13022583133" 
                    className="font-semibold hover:text-blue-300 transition-colors"
                  >
                    (302) 258-3133
                  </a>
                  <div className="text-xs text-slate-300">Montana Office</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-slate-600/20 rounded-lg flex items-center justify-center group-hover:bg-slate-600/30 transition-all duration-300">
                  <Mail className="w-4 h-4 text-slate-300" />
                </div>
                <div>
                  <a 
                    href="mailto:info@nccsus.com" 
                    className="font-semibold hover:text-blue-300 transition-colors"
                  >
                    info@nccsus.com
                  </a>
                  <div className="text-xs text-slate-300">Project Inquiries</div>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 px-4 py-2 nav-glass elegant-curve">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">LEED Green Associate</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 nav-glass elegant-curve">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">BuildZoom 92/100</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 nav-glass elegant-curve">
                <Building className="w-4 h-4 text-slate-300" />
                <span className="text-sm font-medium text-slate-200">Licensed DE & CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-500',
          isScrolled
            ? 'glass-effect shadow-xl'
            : 'bg-white/90 backdrop-blur-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Clean Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-4 group relative"
            >
              <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="/images/nccs_logo.png"
                  alt="NCCS Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Company name */}
              <div className="hidden sm:block">
                <div className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                  NCCS
                </div>
                <div className="text-sm text-slate-600 font-medium -mt-1">
                  Commercial Construction Excellence
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - SIMPLIFIED */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'px-5 py-3 elegant-curve text-sm font-semibold transition-all duration-300',
                    isActiveRoute(item.href)
                      ? 'text-white bg-gradient-to-r from-blue-600 to-slate-600 shadow-lg'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Beautiful CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                href="/contact"
                className="hidden lg:flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-slate-700 hover:from-blue-700 hover:via-blue-800 hover:to-slate-800 text-white font-bold text-sm tracking-wide luxury-curve shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 border border-blue-800/50 relative overflow-hidden group"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10">Start Your Project</span>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-3 elegant-curve text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - SIMPLIFIED */}
        <div
          className={cn(
            'lg:hidden border-t border-slate-200 glass-effect overflow-hidden transition-all duration-500',
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-6 py-6">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 font-semibold elegant-curve transition-all duration-300',
                    isActiveRoute(item.href)
                      ? 'text-white bg-gradient-to-r from-blue-600 to-slate-600'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Beautiful Mobile CTA */}
              <div className="pt-4 border-t border-slate-200">
                <Button
                  href="/contact"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-slate-700 hover:from-blue-700 hover:via-blue-800 hover:to-slate-800 text-white font-bold text-base tracking-wide luxury-curve shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-blue-800/50 relative overflow-hidden group"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">Start Your Project</span>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header