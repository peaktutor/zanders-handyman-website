'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { 
  Menu,
  X,
  Hammer, 
  Paintbrush, 
  Lightbulb, 
  Home, 
  Truck, 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Award,
  Clock,
  Shield,
  ChevronDown,
  Wrench,
  Zap,
  Quote,
  Users,
  TrendingUp,
  Sparkles,
  Diamond
} from 'lucide-react'

export default function ZandersHandymanHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentPortfolioImage, setCurrentPortfolioImage] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Using your actual banner images for the hero carousel
  const heroImages = [
    '/images/banners/Banner1.webp',
    '/images/banners/Banner2.webp', 
    '/images/banners/Banner3.webp',
    '/images/banners/Banner4.webp',
    '/images/banners/Banner5.webp'
  ]

  // Navigation items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ]

  // Services data with professional colors - Updated Electrical Work
  const services = [
    {
      title: "Painting & Staining",
      description: "Premium interior & exterior painting with Montana-quality preparation and weather-resistant finishes.",
      icon: Paintbrush,
      gradient: "from-custom-blue to-custom-blue-dark",
      accentColor: "custom-blue",
      features: ["Custom Interior Painting", "Weather-Resistant Exterior", "Wood Staining & Sealing"],
      badge: "FEATURED"
    },
    {
      title: "Drywall & Repairs",
      description: "Expert drywall installation and seamless repair work with precision craftsmanship.",
      icon: Home,
      gradient: "from-slate-600 to-slate-800",
      accentColor: "slate-600",
      features: ["Hole Repair & Patching", "Complete Installation", "Texture Matching"]
    },
    {
      title: "Electrical Work",
      description: "Safe electrical installations including fixtures, outlets, and basic wiring systems.",
      icon: Zap,
      gradient: "from-custom-blue to-custom-blue-dark",
      accentColor: "custom-blue",
      features: ["Light Fixture Installation", "Outlet & Switch Repair", "Ceiling Fan Installation"]
    },
    {
      title: "Cleaning Services",
      description: "Comprehensive property maintenance including gutter cleaning and move-out services.",
      icon: Shield,
      gradient: "from-gray-600 to-gray-800",
      accentColor: "gray-600",
      features: ["Gutter Cleaning & Repair", "Tenant Move-Out Cleaning", "General Maintenance"]
    },
    {
      title: "Moving Services",
      description: "Reliable moving and transport services with careful handling for Montana residents.",
      icon: Truck,
      gradient: "from-custom-blue to-custom-blue-dark",
      accentColor: "custom-blue",
      features: ["Residential Moving", "Furniture Transport", "Appliance Moving"]
    },
    {
      title: "General Maintenance",
      description: "Complete property care with preventive maintenance and professional improvements.",
      icon: Wrench,
      gradient: "from-slate-700 to-slate-900",
      accentColor: "slate-700",
      features: ["Preventive Maintenance", "Small Repairs", "Property Improvements"]
    }
  ]

  // Portfolio images for cycling display
  const portfolioImages = [
    "/images/projects/BathroomAppliance.webp",
    "/images/projects/Staircase.webp", 
    "/images/projects/Patio.webp",
    "/images/projects/Staircase2.webp"
  ]

  useEffect(() => {
    setMounted(true)
    
    // Auto-advance hero slides every 6 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    // Auto-advance portfolio images every 4 seconds
    const portfolioInterval = setInterval(() => {
      setCurrentPortfolioImage((prev) => (prev + 1) % portfolioImages.length)
    }, 4000)

    // Enhanced scroll logic for smart header
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine if we should show the header
      if (currentScrollY === 0) {
        // At the very top - hide header
        setHeaderVisible(false)
        setScrolled(false)
      } else if (currentScrollY > 50) {
        // Scrolled down enough - show header with background
        setHeaderVisible(true)
        setScrolled(true)
      } else {
        // Scrolled a little but not much - show header without background
        setHeaderVisible(true)
        setScrolled(false)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    // Mouse position for parallax
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(slideInterval)
      clearInterval(portfolioInterval)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [heroImages.length, portfolioImages.length])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  if (!mounted) return null

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      
      {/* Professional Luxury CSS */}
      <style jsx global>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(0.5deg); }
          66% { transform: translateY(-4px) rotate(-0.5deg); }
        }
        
        @keyframes elegant-glow {
          0%, 100% { 
            box-shadow: 
              0 0 20px rgba(59, 130, 246, 0.15),
              0 10px 40px rgba(0, 0, 0, 0.1);
          }
          50% { 
            box-shadow: 
              0 0 30px rgba(59, 130, 246, 0.25),
              0 15px 50px rgba(0, 0, 0, 0.15);
          }
        }
        
        @keyframes professional-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes luxury-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
        
        .animate-subtle-float { animation: subtle-float 6s ease-in-out infinite; }
        .animate-elegant-glow { animation: elegant-glow 4s ease-in-out infinite; }
        .animate-professional-gradient { 
          background-size: 200% 200%;
          animation: professional-gradient 8s ease infinite;
        }
        .animate-luxury-pulse { animation: luxury-pulse 3s ease-in-out infinite; }
        
        .text-gradient-luxury {
          background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .text-gradient-blue-luxury {
          background: linear-gradient(135deg, #156a89 0%, #1a7ca3 50%, #2095c4 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .text-gradient-steel {
          background: linear-gradient(135deg, #475569 0%, #64748b 50%, #94a3b8 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .text-gradient-white-luxury {
          background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #e2e8f0 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        .glass-luxury {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .glass-dark-luxury {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(148, 163, 184, 0.2);
        }
        
        .shadow-luxury {
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .shadow-luxury-xl {
          box-shadow: 
            0 35px 70px -15px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 2px 0 rgba(255, 255, 255, 0.1);
        }
        
        .shadow-blue-elegant {
          box-shadow: 
            0 20px 40px rgba(21, 106, 137, 0.15),
            0 0 0 1px rgba(21, 106, 137, 0.1);
        }
        
        .border-luxury {
          border: 2px solid transparent;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)) padding-box,
                      linear-gradient(135deg, #156a89, #0f4f6b, #0a3d52) border-box;
        }
        
        .text-shadow-luxury { 
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1); 
        }
        
        /* Custom Blue Color Classes */
        .bg-custom-blue { background-color: #156a89; }
        .text-custom-blue { color: #156a89; }
        .border-custom-blue { border-color: #156a89; }
        .bg-custom-blue-light { background-color: rgba(21, 106, 137, 0.1); }
        .bg-custom-blue-dark { background-color: #0f4f6b; }
        .text-custom-blue-light { color: #2095c4; }
        .border-custom-blue-light { border-color: rgba(21, 106, 137, 0.2); }
        .from-custom-blue { --tw-gradient-from: #156a89; }
        .to-custom-blue { --tw-gradient-to: #156a89; }
        .via-custom-blue { --tw-gradient-via: #156a89; }
        .to-custom-blue-dark { --tw-gradient-to: #0f4f6b; }
      `}</style>

      {/* Ultra-Professional Navigation Header with Smart Visibility */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        !headerVisible ? 'transform -translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'
      } ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-luxury-xl border-b border-gray-200/50' 
          : 'bg-gradient-to-r from-white/90 via-gray-50/80 to-white/90 backdrop-blur-lg'
      }`}>
        
        {/* Subtle professional overlay */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(21, 106, 137, 0.05), rgba(100, 116, 139, 0.05), rgba(21, 106, 137, 0.05))'}}></div>
        
        <div className="relative max-w-5xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between py-3">
            
            {/* Simplified Logo Section - No Border */}
            <div className="flex items-center space-x-6 group">
              <div className="relative transition-all duration-700 group-hover:scale-105">
                <div className="relative w-40 h-28 p-2">
                  <Image
                    src="/images/3x2Logo.png"
                    alt="Zander's Handyman Logo"
                    fill
                    className="object-contain"
                    sizes="160px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Professional Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-6 py-3 text-slate-700 hover:text-custom-blue font-semibold text-sm uppercase tracking-wide transition-all duration-500 group rounded-lg hover:bg-white/80 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-custom-blue to-slate-600 transition-all duration-500 group-hover:w-8 rounded-full"></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-custom-blue/5 to-slate-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                </button>
              ))}
            </nav>

            {/* Single Contact Section */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:4062315697"
                className="hidden md:flex items-center px-6 py-3 text-white font-bold rounded-xl shadow-luxury hover:shadow-luxury-xl hover:scale-105 transition-all duration-500 group relative overflow-hidden"
                style={{background: 'linear-gradient(to right, #156a89, #1a7ca3, #64748b)'}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Phone className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10 text-base tracking-wide">Call Joe Now</span>
              </a>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-3 text-slate-600 hover:text-custom-blue transition-all duration-300 rounded-xl hover:bg-white/80 hover:shadow-lg"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {/* Improved Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-4 right-4 bg-white backdrop-blur-xl border border-gray-200/50 rounded-b-3xl shadow-luxury-xl animate-in slide-in-from-top-5 duration-500 z-50">
              <div className="p-6 space-y-4">
                <div className="text-center pb-4 border-b border-gray-200">
                  <div className="text-xl font-black text-slate-800 mb-1">ZANDER'S HANDYMAN LLC</div>
                  <div className="text-sm text-slate-600 tracking-wider">Montana's Trusted Professional</div>
                </div>
                
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-center text-slate-700 hover:text-custom-blue font-semibold text-lg py-3 px-4 rounded-xl hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                  </button>
                ))}
                
                <a 
                  href="tel:4062315697"
                  className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-black text-lg rounded-2xl shadow-luxury transition-all duration-500 mt-6 group"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  CALL JOE NOW
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Updated Montana Badge - Changed Background to #156a89 */}
      <div 
        className="fixed bottom-6 right-6 z-40"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
        }}
      >
        <div className="relative w-20 h-20 transition-all duration-700 cursor-pointer animate-subtle-float">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center shadow-luxury border-2 border-white/20 overflow-hidden"
            style={{background: '#156a89'}}
          >
            <div className="relative w-14 h-14">
              <Image
                src="/images/icons/seal.png"
                alt="Montana State Seal"
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>
          </div>
          <div 
            className="absolute -top-1 -right-1 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg animate-luxury-pulse"
            style={{background: '#156a89'}}
          >
            LOCAL
          </div>
        </div>
      </div>

      {/* Hero Section with Professional Elegance */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Professional Background System */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-2000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
              }}
            >
              <Image
                src={image}
                alt={`Premium Montana Handyman Project ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
          
          {/* Professional Overlay System - Reduced Opacity */}
          <div className="absolute inset-0 bg-slate-900/35" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/30 to-slate-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-slate-900/15" />
          
          {/* Subtle floating elements */}
          <div 
            className="absolute top-1/4 left-1/12 w-32 h-32 bg-custom-blue/20 rounded-full blur-xl animate-subtle-float"
            style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
          />
          <div 
            className="absolute bottom-1/3 right-1/6 w-24 h-24 bg-slate-600/20 rounded-full blur-xl animate-subtle-float delay-1000"
            style={{ transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)` }}
          />
        </div>

        {/* Professional Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-12">
          <div className="space-y-8">
            
            {/* Professional Business Identity */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-black text-white tracking-tight leading-none text-shadow-luxury">
                ZANDER'S
              </h1>
              <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-white tracking-wide text-shadow-luxury">
                HANDYMAN LLC
              </div>
              <div className="flex justify-center items-center space-x-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-custom-blue-light to-transparent rounded-full"></div>
                <Diamond className="w-8 h-8 text-custom-blue-light" />
                <div className="text-white font-semibold tracking-widest text-lg text-shadow-luxury">EST. 2016</div>
                <Diamond className="w-8 h-8 text-custom-blue-light" />
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-custom-blue-light to-transparent rounded-full"></div>
              </div>
            </div>
            
            {/* Professional Tagline */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl xl:text-3xl text-white font-light leading-relaxed text-shadow-luxury">
                Montana's Most 
                <span className="text-custom-blue-light font-bold"> TRUSTED </span>
                Handyman
              </h2>
              <p className="text-lg md:text-xl text-gray-300 font-medium">
                Serving Bozeman & The Gallatin Valley with Professional Excellence
              </p>
            </div>
            
            {/* Improved Professional Stats Grid for Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto my-16">
              {[
                { number: "10+", label: "Years Strong", sublabel: "Montana Experience", color: "text-custom-blue-light" },
                { number: "100", label: "Mile Range", sublabel: "Service Area", color: "text-white" },
                { number: "FREE", label: "Estimates", sublabel: "Offered", color: "text-gray-200" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-slate-900/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-all duration-700 shadow-luxury-xl border-2 border-white/30 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`text-3xl md:text-4xl xl:text-5xl font-black ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg`}>
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
                  <div className="text-gray-300 font-medium text-sm">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            {/* CTA Section with Call and Get Free Estimate - Removed Text Option */}
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:4062315697" 
                  className="group relative px-12 py-6 text-white font-bold text-xl rounded-2xl shadow-luxury-xl hover:scale-105 transition-all duration-500 overflow-hidden"
                  style={{background: 'linear-gradient(to right, #156a89, #1a7ca3, #64748b)'}}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex items-center justify-center">
                    <Phone className="w-6 h-6 mr-3" />
                    Call Joe Now
                  </div>
                  <Sparkles className="absolute top-2 right-2 w-5 h-5 text-white/60 group-hover:text-white transition-all duration-300" />
                </a>
                <button 
                  onClick={() => scrollToSection('#portfolio')}
                  className="group px-12 py-6 glass-luxury border-2 border-white/30 text-white font-bold text-xl rounded-2xl hover:bg-white/20 hover:scale-105 transition-all duration-500"
                >
                  <div className="flex items-center justify-center">
                    Get Free Estimate
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
              </div>
              
              {/* Owner's Slogan */}
              <div className="mt-16 space-y-4">
                <div className="text-center">
                  <p className="text-lg md:text-xl text-white font-semibold leading-relaxed text-shadow-luxury">
                    "Taking Care of the Jobs You Don't Want — With Care and Cleanliness"
                  </p>
                  <div className="flex justify-center items-center space-x-4 mt-4">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-custom-blue-light to-transparent rounded-full"></div>
                    <Star className="w-5 h-5 text-custom-blue-light" />
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-custom-blue-light to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Scroll Indicator - Hidden on Mobile */}
        <div className="hidden md:block absolute bottom-8 right-8 text-white/80 text-center animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto mb-2" />
          <div className="text-sm font-medium tracking-wide">EXPLORE</div>
        </div>
      </section>

      {/* Professional Services Section with Custom Tool Pattern Background */}
      <section id="services" className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
        
        {/* Custom Tool Tiling Pattern Background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/patterns/tile.png")',
            backgroundSize: '300px 300px',
            backgroundRepeat: 'repeat',
            opacity: 0.25
          }}
        />
        <div className="absolute inset-0 bg-custom-blue/10"></div>
        
        {/* Subtle professional patterns */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-custom-blue rounded-full blur-3xl"
            style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl"
            style={{ transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)` }}
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-6">
          
          {/* Professional Section Header */}
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center px-4 py-1.5 bg-custom-blue-light text-custom-blue font-bold text-xs uppercase tracking-wide rounded-full border border-custom-blue-light">
              <Award className="w-3 h-3 mr-1" />
              Professional Montana Services
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-black text-slate-800 leading-tight">
              Any Job, Any Size
              <br />
              <span className="text-gradient-blue-luxury">
                We Handle It All
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From the Gallatin Valley to Big Sky Country, <strong className="text-custom-blue">Zander's Handyman</strong> brings 
              Montana work ethic and 10+ years of experience to every project.
            </p>
          </div>

          {/* Professional Services Grid - Icons Only with Card Tilt Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-luxury hover:shadow-luxury-xl transition-all duration-700 overflow-hidden border border-gray-100 hover:scale-105"
                style={{ 
                  animationDelay: `${index * 150}ms`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `scale(1.05) rotate(${index % 2 === 0 ? '6deg' : '-6deg'})`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                }}
              >
                {/* Professional Service Icon Display */}
                <div className="relative h-40 overflow-hidden">
                  <div 
                    className={`w-full h-full flex items-center justify-center relative`}
                    style={{
                      background: service.title === "Painting & Staining" || service.title === "Moving Services" || service.title === "Electrical Work"
                        ? `linear-gradient(to bottom right, #156a89, #0f4f6b)`
                        : service.title === "Drywall & Repairs" || service.title === "General Maintenance"
                        ? `linear-gradient(to bottom right, #475569, #1e293b)`
                        : `linear-gradient(to bottom right, #4b5563, #1f2937)`
                    }}
                  >
                    <service.icon className="w-12 h-12 text-white/90 group-hover:scale-125 transition-transform duration-500 relative z-10" />
                    
                    {/* Enhanced pattern overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <Image
                        src="/images/patterns/montana-blueprint-pattern.png"
                        alt=""
                        fill
                        className="object-cover object-center filter sepia contrast-150 hue-rotate-180 brightness-75 saturate-150"
                        sizes="100%"
                      />
                    </div>
                    <div className="absolute inset-0 bg-custom-blue/10"></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-2 border-white/30 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-2 border-white/20 rounded-full"></div>
                  </div>
                  
                  {/* Professional Badge */}
                  {service.badge && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                      {service.badge}
                    </div>
                  )}
                </div>
                
                {/* Professional Content */}
                <div className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-custom-blue transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Professional Feature List */}
                  <div className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle 
                          className={`w-3 h-3 mr-2 ${
                            service.title === "Painting & Staining" || service.title === "Moving Services" || service.title === "Electrical Work"
                              ? 'text-custom-blue'
                              : 'text-slate-600'
                          }`} 
                        />
                        <span className="text-slate-700 font-medium text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Simplified CTA Section */}
          <div className="text-center mt-16 space-y-6">
            <p className="text-xl text-slate-600">
              Don't see your project listed? <strong className="text-custom-blue">We handle all types of Montana handyman work!</strong>
            </p>
            <div className="flex justify-center">
              <a 
                href="tel:4062315697" 
                className="px-10 py-4 text-white font-bold text-base rounded-2xl shadow-luxury hover:shadow-luxury-xl hover:scale-105 transition-all duration-500"
                style={{background: 'linear-gradient(to right, #156a89, #64748b)'}}
              >
                Call Joe Now for Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional About Section with Montana Patterns */}
      <section id="about" className="relative py-16 bg-gradient-to-br from-slate-100 via-gray-100 to-blue-100">
        
        {/* Montana Blueprint Pattern Background - Enhanced Visibility */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/patterns/montana-blueprint-pattern.png"
            alt=""
            fill
            className="object-cover object-center filter sepia contrast-125 hue-rotate-180 brightness-90 saturate-125"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-custom-blue/8"></div>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            
            {/* Professional Content Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-custom-blue-light text-custom-blue font-bold text-sm uppercase tracking-wide rounded-full border border-custom-blue-light">
                  <Star className="w-4 h-4 mr-2" />
                  Montana Born & Raised
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-800 leading-tight">
                  Why Bozeman Chooses
                  <br />
                  <span className="text-gradient-blue-luxury">
                    Joe Zander
                  </span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  <strong>Over 10 years serving Montana</strong> with trusted experience at notable clients like 
                  <span className="text-custom-blue font-semibold"> Yellowstone Club</span> and 
                  <span className="text-slate-700 font-semibold"> Blasting Technologies</span>.
                </p>
              </div>
              
              {/* Professional Feature Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "10+ Years Montana Strong",
                    description: "Established 2016 with over a decade of handyman expertise serving the Gallatin Valley and beyond.",
                    gradient: "#156a89"
                  },
                  {
                    icon: Award,
                    title: "Trusted by Montana's Best",
                    description: "Yellowstone Club & Blasting Technologies trust our Montana work ethic and quality craftsmanship.",
                    gradient: "#475569"
                  },
                  {
                    icon: MapPin,
                    title: "100-Mile Montana Range",
                    description: "Bozeman to Big Sky and beyond - up to 100 miles depending on the job size and scope.",
                    gradient: "#4b5563"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-luxury transition-all duration-500 border border-gray-200 hover:scale-105"
                  >
                    <div className="flex items-start space-x-6">
                      <div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                        style={{
                          background: feature.title === "10+ Years Montana Strong" 
                            ? `linear-gradient(to bottom right, #156a89, #0f4f6b)`
                            : feature.title === "Trusted by Montana's Best"
                            ? `linear-gradient(to bottom right, #475569, #1e293b)`
                            : `linear-gradient(to bottom right, #4b5563, #1f2937)`
                        }}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Professional Guarantee */}
              <div 
                className="rounded-3xl p-8 text-white shadow-luxury"
                style={{background: 'linear-gradient(to bottom right, #1e293b, #156a89)'}}
              >
                <h4 className="text-2xl font-bold mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3" />
                  Montana Work Ethic Guarantee
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Free Estimates Offered",
                    "Montana Professional & Reliable", 
                    "Quality Craftsmanship",
                    "Can't Do It? We'll Find Who Can"
                  ].map((guarantee, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0" />
                      <span className="font-medium">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Professional Image Column */}
            <div className="relative">
              <div className="w-full aspect-[2/3] rounded-3xl overflow-hidden shadow-luxury-xl hover:scale-105 transition-all duration-700 relative">
                <Image
                  src="/images/Joe.png"
                  alt="Joe Zander - Professional Handyman"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-8 left-8 text-white space-y-2 z-10">
                  <h4 className="text-3xl font-bold">Joe Zander</h4>
                  <p className="text-blue-200 font-semibold text-xl">Montana Handyman Professional</p>
                  <p className="text-gray-300">Owner & Operator</p>
                </div>
              </div>
              
              {/* Updated Professional Floating Stats - Hidden on Mobile */}
              <div 
                className="hidden md:block absolute -bottom-8 -right-8 rounded-3xl p-8 shadow-luxury-xl border-4 border-white hover:scale-105 transition-all duration-500 animate-subtle-float z-30"
                style={{background: 'linear-gradient(to bottom right, #156a89, #0f4f6b)'}}
              >
                <div className="text-4xl font-black text-white">100</div>
                <div className="text-blue-100 font-semibold">Mile Range</div>
                <div className="text-xs text-blue-200">Service Area</div>
              </div>
              
              <div 
                className="hidden md:block absolute -top-8 -left-8 rounded-3xl p-8 shadow-luxury-xl border-4 border-white hover:scale-105 transition-all duration-500 animate-subtle-float delay-1000 z-30"
                style={{background: 'linear-gradient(to bottom right, #156a89, #134e73)'}}
              >
                <div className="text-4xl font-black text-white">10+</div>
                <div className="text-blue-100 font-semibold">Years</div>
                <div className="text-xs text-blue-200">Montana Strong</div>
              </div>

              <div 
                className="hidden md:block absolute top-1/2 -right-12 rounded-3xl p-6 shadow-luxury-xl border-4 border-white hover:scale-105 transition-all duration-500 animate-subtle-float delay-2000 z-30"
                style={{background: 'linear-gradient(to bottom right, #156a89, #103d5c)'}}
              >
                <div className="text-3xl font-black text-white">FREE</div>
                <div className="text-blue-100 font-semibold">Estimates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section with EmailJS Form and Photo Carousel */}
      <section id="portfolio" className="relative py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
        
        {/* Montana Mountains Background */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/backgrounds/montana-mountains-silhouette.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        
        {/* Subtle professional patterns */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-custom-blue rounded-full blur-3xl"
            style={{ transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600 rounded-full blur-3xl"
            style={{ transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)` }}
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-6">
          
          {/* Portfolio Section Header */}
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-custom-blue-light text-custom-blue font-bold text-sm uppercase tracking-wide rounded-full border border-custom-blue-light">
              <Sparkles className="w-4 h-4 mr-2" />
              Project Portfolio & Contact
            </div>
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-black text-slate-800 leading-tight">
              See Our Work
              <br />
              <span className="text-gradient-blue-luxury">
                Start Your Project
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Explore our <strong className="text-custom-blue">Montana craftsmanship</strong> and get your 
              <strong className="text-slate-700"> free estimate</strong> today.
            </p>
          </div>

          {/* Split Layout: Form + Photo Carousel */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
            
            {/* EmailJS Contact Form with Pattern Background */}
            <div className="space-y-8">
              <div className="relative bg-white rounded-3xl shadow-luxury p-10 border border-gray-100 overflow-hidden">
                {/* Enhanced pattern overlay */}
                <div className="absolute inset-0 opacity-15">
                  <Image
                    src="/images/patterns/montana-blueprint-pattern.png"
                    alt=""
                    fill
                    className="object-cover object-center filter sepia contrast-125 hue-rotate-180 brightness-90 saturate-125"
                    sizes="100%"
                  />
                </div>
                <div className="absolute inset-0 bg-custom-blue/5"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
                    <Mail className="w-8 h-8 mr-3 text-custom-blue" />
                    Get Your Free Estimate
                    <div className="flex-1 ml-4 h-px bg-gradient-to-r from-custom-blue to-transparent"></div>
                  </h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all duration-300"
                      placeholder="(406) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Project Type</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all duration-300">
                      <option>Select a service...</option>
                      <option>Painting & Staining</option>
                      <option>Drywall & Repairs</option>
                      <option>Electrical Work</option>
                      <option>Cleaning Services</option>
                      <option>Moving Services</option>
                      <option>General Maintenance</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Project Details *</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-custom-blue focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Please describe your project, timeline, and any specific requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="button"
                    className="w-full px-8 py-4 text-white font-bold text-lg rounded-xl shadow-luxury hover:shadow-luxury-xl hover:scale-105 transition-all duration-500 group"
                    style={{background: 'linear-gradient(to right, #156a89, #64748b)'}}
                  >
                    <div className="flex items-center justify-center">
                      Send My Project Details
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                </div>
                
                {/* Simplified Contact Options */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-center text-slate-600 mb-4 text-lg font-semibold">Prefer to call? Get instant response:</p>
                  <div className="flex flex-col gap-3 justify-center">
                    <a 
                      href="tel:4062315697"
                      className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-black rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Phone className="w-6 h-6 mr-3 animate-pulse" />
                      CALL JOE NOW
                    </a>
                    <a 
                      href="sms:4062315697"
                      className="flex items-center justify-center px-6 py-3 bg-custom-blue-light hover:bg-custom-blue text-custom-blue hover:text-white font-semibold rounded-xl transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Text Joe
                    </a>
                  </div>
                </div>
                </div>
              </div>
            </div>
            
            {/* Photo Carousel */}
            <div className="space-y-8">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-luxury-xl">
                  {portfolioImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentPortfolioImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Montana Handyman Project ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                  
                  {/* Project Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="bg-custom-blue text-white text-sm font-bold px-3 py-1 rounded-full mb-3 inline-block">
                      PROJECT {currentPortfolioImage + 1} OF {portfolioImages.length}
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Professional Montana Craftsmanship</h4>
                    <p className="text-gray-200">Quality work that speaks for itself</p>
                  </div>
                </div>
                
                {/* Portfolio Navigation */}
                <div className="flex justify-center items-center space-x-4 mt-6">
                  <button
                    onClick={() => setCurrentPortfolioImage(currentPortfolioImage === 0 ? portfolioImages.length - 1 : currentPortfolioImage - 1)}
                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                  >
                    <ChevronDown className="w-5 h-5 text-slate-600 rotate-90" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {portfolioImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPortfolioImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentPortfolioImage 
                            ? 'bg-custom-blue scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setCurrentPortfolioImage((currentPortfolioImage + 1) % portfolioImages.length)}
                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                  >
                    <ChevronDown className="w-5 h-5 text-slate-600 -rotate-90" />
                  </button>
                </div>
              </div>
              
              {/* Project Stats with Enhanced Design */}
              <div className="grid grid-cols-3 gap-4">
                <div className="relative bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 opacity-15">
                    <Image
                      src="/images/patterns/montana-blueprint-pattern.png"
                      alt=""
                      fill
                      className="object-cover object-center filter sepia contrast-125 hue-rotate-180 brightness-90 saturate-125"
                      sizes="100%"
                    />
                  </div>
                  <div className="absolute inset-0 bg-custom-blue/5"></div>
                  <div className="relative z-10">
                    <div className="text-2xl font-black text-custom-blue mb-2">500+</div>
                    <div className="text-sm font-semibold text-slate-600">Projects Complete</div>
                  </div>
                  <div className="absolute top-2 right-2 w-4 h-4 border border-custom-blue/20 rounded-full"></div>
                </div>
                <div className="relative bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 opacity-15">
                    <Image
                      src="/images/patterns/montana-blueprint-pattern.png"
                      alt=""
                      fill
                      className="object-cover object-center filter sepia contrast-125 hue-rotate-180 brightness-90 saturate-125"
                      sizes="100%"
                    />
                  </div>
                  <div className="absolute inset-0 bg-custom-blue/5"></div>
                  <div className="relative z-10">
                    <div className="text-2xl font-black text-slate-700 mb-2">100%</div>
                    <div className="text-sm font-semibold text-slate-600">Satisfaction Rate</div>
                  </div>
                  <div className="absolute top-2 right-2 w-4 h-4 border border-slate-600/20 rounded-full"></div>
                </div>
                <div className="relative bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 opacity-15">
                    <Image
                      src="/images/patterns/montana-blueprint-pattern.png"
                      alt=""
                      fill
                      className="object-cover object-center filter sepia contrast-125 hue-rotate-180 brightness-90 saturate-125"
                      sizes="100%"
                    />
                  </div>
                  <div className="absolute inset-0 bg-blue-600/5"></div>
                  <div className="relative z-10">
                    <div className="text-2xl font-black text-gray-600 mb-2">10+</div>
                    <div className="text-sm font-semibold text-slate-600">Years Experience</div>
                  </div>
                  <div className="absolute top-2 right-2 w-4 h-4 border border-gray-600/20 rounded-full"></div>
                </div>
              </div>
              
              {/* Montana Guarantee Badge with Pattern */}
              <div 
                className="relative rounded-3xl p-8 text-white text-center shadow-luxury overflow-hidden"
                style={{background: 'linear-gradient(to bottom right, #1e293b, #156a89)'}}
              >
                <div className="absolute inset-0 opacity-10">
                  <Image
                    src="/images/backgrounds/montana-mountains-silhouette.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="100%"
                  />
                </div>
                <div className="relative z-10">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                  <h4 className="text-xl font-bold mb-2">Montana Work Ethic Guarantee</h4>
                  <p className="text-blue-100">Professional, reliable, and trusted by Montana's best</p>
                </div>
                <div className="absolute top-4 right-4 w-6 h-6 border border-blue-200/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border border-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Contact Section */}
      <section id="contact" className="relative py-24 text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0f4f6b 0%, #156a89 25%, #1a7ca3 50%, #156a89 75%, #134e73 100%)'
        }}>
        
        {/* Montana Mountains Background */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/backgrounds/montana-mountains-silhouette.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        
        {/* Enhanced Blue Gradient Overlays */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(45deg, rgba(21, 106, 137, 0.1) 0%, transparent 50%, rgba(26, 124, 163, 0.08) 100%)'}}></div>
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, rgba(32, 149, 196, 0.05) 0%, transparent 70%)'}}></div>
        
        {/* Professional Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/2 w-96 h-96 blur-3xl rounded-full animate-subtle-float"
            style={{ 
              background: 'radial-gradient(circle, rgba(26, 124, 163, 0.2) 0%, rgba(21, 106, 137, 0.1) 50%, transparent 100%)',
              transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` 
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 blur-3xl rounded-full animate-subtle-float delay-1500"
            style={{ 
              background: 'radial-gradient(circle, rgba(15, 79, 107, 0.25) 0%, rgba(19, 78, 115, 0.15) 50%, transparent 100%)',
              transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)` 
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-6">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div 
              className="inline-flex items-center px-4 py-2 font-black text-sm uppercase tracking-wide rounded-full shadow-luxury backdrop-blur-lg border"
              style={{
                background: 'linear-gradient(135deg, rgba(32, 149, 196, 0.2) 0%, rgba(26, 124, 163, 0.3) 100%)',
                borderColor: 'rgba(32, 149, 196, 0.4)',
                color: '#e0f2fe'
              }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Ready for Montana Craftsmanship?
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-black leading-tight text-shadow-luxury">
              Call Montana's
              <br />
              <span className="text-gradient-white-luxury">
                TRUSTED Handyman
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              From the Gallatin Valley to Big Sky Country, 
              <span className="text-white font-bold"> Zander's Handyman</span> delivers
              <span className="text-blue-50 font-bold"> Montana work ethic</span> with
              <span className="text-blue-100 font-bold"> 10+ years of trusted excellence</span>.
            </p>
          </div>
          
          {/* Main Contact Card */}
          <div className="max-w-3xl mx-auto">
            <div 
              className="backdrop-blur-xl rounded-3xl p-12 shadow-luxury-xl border text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(21, 106, 137, 0.3) 0%, rgba(15, 79, 107, 0.4) 50%, rgba(26, 124, 163, 0.3) 100%)',
                borderColor: 'rgba(32, 149, 196, 0.4)'
              }}
            >
              <div className="space-y-8">
                {/* Phone Section */}
                <div>
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <Phone className="w-8 h-8 text-blue-100" />
                    <div className="text-4xl md:text-5xl font-black text-white tracking-wide">
                      (406) 231-5697
                    </div>
                    <Phone className="w-8 h-8 text-blue-100" />
                  </div>
                  <p className="text-blue-100 font-semibold text-lg mb-6">
                    Available 7 Days a Week • Free Estimates • 100-Mile Range
                  </p>
                  <a 
                    href="tel:4062315697" 
                    className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-black text-xl rounded-2xl shadow-luxury-xl hover:scale-105 transition-all duration-500 group"
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    CALL JOE NOW
                  </a>
                </div>

                {/* Divider */}
                <div className="flex items-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <span className="px-4 text-blue-100 font-medium">OR</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>

                {/* Email Section */}
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-blue-100 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Email for Estimates</h3>
                  </div>
                  <p className="text-xl font-bold text-blue-100 mb-4">
                    joeisoutside@gmail.com
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="mailto:joeisoutside@gmail.com"
                      className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
                      style={{background: 'linear-gradient(135deg, #0f4f6b 0%, #134e73 100%)'}}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                    <a 
                      href="sms:4062315697"
                      className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-500"
                      style={{background: 'linear-gradient(to right, #134e73, #156a89)'}}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Text Joe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Guarantee */}
          <div 
            className="rounded-2xl p-8 max-w-4xl mx-auto mt-12 shadow-luxury-xl backdrop-blur-xl border text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 79, 107, 0.7) 0%, rgba(21, 106, 137, 0.6) 50%, rgba(19, 78, 115, 0.7) 100%)',
              borderColor: 'rgba(32, 149, 196, 0.4)'
            }}
          >
            <Quote className="w-8 h-8 mx-auto mb-4 text-blue-100" />
            <p className="text-xl font-bold text-white mb-6 leading-relaxed">
              "Montana professional, reliable, experienced. If there's something we can't do, we'll point you in the right direction."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: CheckCircle, text: "Trusted by Yellowstone Club" },
                { icon: CheckCircle, text: "Montana Est. 2016" },
                { icon: CheckCircle, text: "Free Estimates" },
                { icon: CheckCircle, text: "Local Bozeman Pro" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center text-blue-100 font-semibold text-sm">
                  <item.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}