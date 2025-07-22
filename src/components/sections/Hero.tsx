'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import { useScrollAnimation } from '@/hooks/useIntersectionObserver'
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Play, 
  Shield,
  Zap,
  Heart,
  MapPin,
  Phone
} from 'lucide-react'

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref: heroRef, animationClasses } = useScrollAnimation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const keyBenefits = [
    '3x Faster than Wix & WordPress',
    '40% Less Expensive Than Competition',
    'Full Website Ownership',
    'Personal Montana Service'
  ]

  const trustIndicators = [
    { icon: Star, text: '5.0 Rating', subtext: '12+ Reviews' },
    { icon: Shield, text: 'Montana Licensed', subtext: 'Fully Insured' },
    { icon: Heart, text: '100% Satisfaction', subtext: 'Guaranteed' }
  ]

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent-400 rounded transform rotate-45 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-success-400 rounded animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className={cn("text-white", animationClasses.fadeIn)}>
            {/* Location Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm">
              <MapPin className="w-4 h-4 text-accent-400" />
              <span>Proudly Serving Bozeman & All of Montana</span>
            </div>

            {/* Main Headline */}
            <h1 className="heading-xl mb-6 leading-tight">
              <span className="block">Building Tomorrow's</span>
              <span className="block text-gradient font-accent">Web, Today</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed max-w-xl">
              Professional web development and hosting services in Montana. 
              Custom Next.js websites with AWS hosting - 
              <span className="text-accent-400 font-semibold"> faster and more affordable</span> than 
              Wix, Squarespace, or WordPress.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {keyBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-success-400 flex-shrink-0" />
                  <span className="text-neutral-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                href="/contact"
                size="xl"
                className="group font-accent text-base tracking-wide"
                icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                iconPosition="right"
              >
                Get Free Quote
              </Button>
              
              <Button
                href="tel:+15618703273"
                variant="outline"
                size="xl"
                className="text-white border-white/30 hover:bg-white/10 font-accent text-base tracking-wide"
                icon={<Phone className="w-5 h-5" />}
              >
                (561) 870-3273
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <indicator.icon className="w-4 h-4 text-accent-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{indicator.text}</div>
                    <div className="text-xs text-neutral-300">{indicator.subtext}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Faith Integration */}
            <div className="mt-8 text-center sm:text-left">
              <p className="text-success-400 font-medium italic text-lg">
                "Built on solid foundations, faithful to your vision"
              </p>
            </div>
          </div>

          {/* Visual Column */}
          <div className={cn("relative", animationClasses.slideInRight)}>
            {/* Main Hero Image/Graphic */}
            <div className="relative">
              {/* Browser Mockup */}
              <div className="bg-white rounded-lg shadow-2xl p-3 transform hover:scale-105 transition-transform duration-500">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-neutral-100 rounded px-3 py-1 text-xs text-neutral-600">
                    https://your-awesome-website.com
                  </div>
                </div>
                
                {/* Website Preview */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-800 mb-2">Lightning Fast</h3>
                    <p className="text-neutral-600 text-sm">Your website loading in under 2 seconds</p>
                    
                    {/* Performance Indicators */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="bg-white rounded p-2">
                        <div className="text-xs font-semibold text-green-600">95+</div>
                        <div className="text-xs text-neutral-500">Speed</div>
                      </div>
                      <div className="bg-white rounded p-2">
                        <div className="text-xs font-semibold text-green-600">100</div>
                        <div className="text-xs text-neutral-500">SEO</div>
                      </div>
                      <div className="bg-white rounded p-2">
                        <div className="text-xs font-semibold text-green-600">99.9%</div>
                        <div className="text-xs text-neutral-500">Uptime</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-success-400 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-float">
                <div className="text-sm font-semibold text-neutral-800">Page Load</div>
                <div className="text-2xl font-bold text-success-500">1.3s</div>
                <div className="text-xs text-neutral-500">vs 4.2s average</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-sm font-semibold text-neutral-800">Monthly Cost</div>
                <div className="text-2xl font-bold text-primary-500">$29</div>
                <div className="text-xs text-neutral-500">vs $59 Wix Premium</div>
              </div>

              <div className="absolute top-1/2 -left-8 bg-white rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">5.0</span>
                </div>
                <div className="text-xs text-neutral-500">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Social Proof Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="container-custom py-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-success-400" />
              <span>12+ Successful Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>5.0 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-accent-400" />
              <span>Montana Chamber Member</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-primary-400" />
              <span>Fully Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection