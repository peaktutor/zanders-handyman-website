'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import { useScrollAnimation } from '@/hooks/useIntersectionObserver'
import { 
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Heart
} from 'lucide-react'

const CTASection: React.FC = () => {
  const { ref: sectionRef, animationClasses } = useScrollAnimation()

  const guarantees = [
    {
      icon: CheckCircle,
      text: '100% Satisfaction Guarantee'
    },
    {
      icon: Clock,
      text: 'Free 30-Day Support'
    },
    {
      icon: Shield,
      text: 'No Hidden Fees'
    },
    {
      icon: Star,
      text: '5-Star Rated Service'
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container-custom relative z-10">
        <div className={cn("text-center max-w-4xl mx-auto", animationClasses.fadeIn)}>
          {/* Main Headline */}
          <h2 className="heading-xl text-white mb-6 leading-tight">
            Ready to Transform Your 
            <span className="block text-gradient font-accent">Online Presence?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join the growing number of Montana businesses that trust Cornerstone Developing 
            for modern, high-performance websites that drive real results.
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-success-400 flex-shrink-0" />
              <span className="text-neutral-200">Custom Next.js development</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-success-400 flex-shrink-0" />
              <span className="text-neutral-200">Lightning-fast AWS hosting</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-success-400 flex-shrink-0" />
              <span className="text-neutral-200">40% less than competitors</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-success-400 flex-shrink-0" />
              <span className="text-neutral-200">Personal Montana service</span>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              href="/contact"
              size="xl"
              className="group font-accent text-lg tracking-wide shadow-2xl"
              icon={<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
              iconPosition="right"
            >
              Get Your Free Quote
            </Button>
            
            <Button
              href="tel:+15618703273"
              variant="outline"
              size="xl"
              className="text-white border-white/30 hover:bg-white/10 font-accent text-lg tracking-wide"
              icon={<Phone className="w-6 h-6" />}
            >
              (561) 870-3273
            </Button>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <guarantee.icon className="w-5 h-5 text-accent-400" />
                </div>
                <span className="text-sm text-neutral-300">{guarantee.text}</span>
              </div>
            ))}
          </div>

          {/* Contact Options */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-neutral-300 mb-6">
              Prefer to discuss your project first? We're here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:cornerstonedvlpr@gmail.com"
                className="flex items-center space-x-3 text-neutral-200 hover:text-accent-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>cornerstonedvlpr@gmail.com</span>
              </a>
              
              <a
                href="tel:+15618703273"
                className="flex items-center space-x-3 text-neutral-200 hover:text-accent-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(561) 870-3273</span>
              </a>
            </div>
          </div>

          {/* Faith Integration */}
          <div className="mt-12 text-center">
            <div className="flex justify-center mb-4">
              <Heart className="w-8 h-8 text-success-400" />
            </div>
            <p className="text-success-400 font-medium italic text-lg">
              "Built on solid foundations, faithful to your vision"
            </p>
            <p className="text-neutral-400 text-sm mt-2">
              Your success is our foundation - let's build something amazing together
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500" />
    </section>
  )
}

export default CTASection