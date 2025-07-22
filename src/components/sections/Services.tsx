'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Card, { FeatureCard } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useScrollAnimation } from '@/hooks/useIntersectionObserver'
import { 
  Code2, 
  Cloud, 
  ShoppingCart, 
  Wrench,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Smartphone
} from 'lucide-react'

const services = [
  {
    id: 'web-development',
    name: 'Website Development',
    description: 'Custom Next.js websites that are fast, modern, and built to convert visitors into customers.',
    icon: Code2,
    features: [
      'Next.js & React development',
      'Mobile-first responsive design',
      'Lightning-fast performance',
      'SEO optimization built-in'
    ],
    link: '/services/web-development',
    color: 'from-primary-500 to-primary-600'
  },
  {
    id: 'aws-hosting',
    name: 'AWS Cloud Hosting',
    description: 'Enterprise-grade hosting on Amazon Web Services at small business prices.',
    icon: Cloud,
    features: [
      '99.9% uptime guarantee',
      'Global CDN distribution',
      'Automatic scaling',
      'Daily backups included'
    ],
    link: '/services/hosting',
    color: 'from-accent-500 to-accent-600'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Solutions',
    description: 'Complete online stores with payment processing, inventory management, and analytics.',
    icon: ShoppingCart,
    features: [
      'Secure payment processing',
      'Inventory management',
      'Order tracking system',
      'Analytics & reporting'
    ],
    link: '/services/ecommerce',
    color: 'from-success-500 to-success-600'
  },
  {
    id: 'maintenance',
    name: 'Website Maintenance',
    description: 'Keep your website secure, updated, and performing at its best with our maintenance plans.',
    icon: Wrench,
    features: [
      'Security updates',
      'Performance monitoring',
      'Content updates',
      'Technical support'
    ],
    link: '/services/maintenance',
    color: 'from-purple-500 to-purple-600'
  }
]

const ServicesSection: React.FC = () => {
  const { ref: sectionRef, animationClasses } = useScrollAnimation()

  return (
    <section ref={sectionRef} className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className={cn("text-center max-w-3xl mx-auto mb-16", animationClasses.fadeIn)}>
          <h2 className="heading-lg text-neutral-900 mb-6">
            Complete Web Solutions for 
            <span className="text-gradient"> Montana Businesses</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            From custom development to enterprise hosting, we provide everything 
            your business needs to thrive online. Built on solid foundations, 
            faithful to your success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "transform transition-all duration-300",
                animationClasses.slideUp
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={
                  <div className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-r flex items-center justify-center text-white",
                    service.color
                  )}>
                    <service.icon className="w-6 h-6" />
                  </div>
                }
                className="h-full hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FeatureCard>
            </div>
          ))}
        </div>

        {/* Key Benefits Bar */}
        <div className={cn(
          "bg-white rounded-2xl shadow-lg p-8 border border-neutral-200",
          animationClasses.fadeIn
        )}>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Benefit 1 */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <div className="font-bold text-neutral-900">3x Faster</div>
                <div className="text-sm text-neutral-600">Than WordPress & Wix</div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-success-600" />
              </div>
              <div>
                <div className="font-bold text-neutral-900">40% Less Cost</div>
                <div className="text-sm text-neutral-600">Than premium platforms</div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <div className="font-bold text-neutral-900">100% Mobile</div>
                <div className="text-sm text-neutral-600">Optimized & responsive</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={cn(
          "text-center mt-12",
          animationClasses.fadeIn
        )}>
          <p className="text-lg text-neutral-600 mb-6">
            Ready to transform your online presence?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="font-accent text-base tracking-wide"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Start Your Project
            </Button>
            <Button
              href="/portfolio"
              variant="outline"
              size="lg"
              className="font-accent text-base tracking-wide"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection