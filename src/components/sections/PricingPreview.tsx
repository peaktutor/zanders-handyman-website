'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Card, { PricingCard } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useScrollAnimation } from '@/hooks/useIntersectionObserver'
import { 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Crown,
  Rocket,
  DollarSign,
  Clock
} from 'lucide-react'
import { SERVICE_PACKAGES } from '@/lib/constants'

const comparisonFeatures = [
  'Website Speed',
  'Monthly Cost',
  'Setup Time',
  'Custom Design',
  'SEO Optimization',
  'Mobile Responsive',
  'Website Ownership',
  'Support Response',
  'Performance Guarantee'
]

const competitorComparison = {
  cornerstone: ['< 2 sec', '$29', '1-2 weeks', '✓', '✓', '✓', 'Full', '< 4 hrs', '✓'],
  wix: ['4-6 sec', '$59', '1 day', '✗', 'Basic', '✓', 'None', '24-48 hrs', '✗'],
  wordpress: ['3-5 sec', '$45', '2-4 weeks', 'Limited', 'Plugin', '✓', 'Limited', 'Community', '✗']
}

const PricingPreviewSection: React.FC = () => {
  const { ref: sectionRef, animationClasses } = useScrollAnimation()

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className={cn("text-center max-w-4xl mx-auto mb-16", animationClasses.fadeIn)}>
          <h2 className="heading-lg text-neutral-900 mb-6">
            Professional Websites at 
            <span className="text-gradient"> Honest Prices</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            No hidden fees, no surprises. Just transparent pricing for modern websites 
            that help Montana businesses grow. Excellence without compromise.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SERVICE_PACKAGES.map((pkg, index) => (
            <div
              key={pkg.id}
              className={cn(
                "transform transition-all duration-300",
                animationClasses.slideUp
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PricingCard
                popular={pkg.popular}
                color={pkg.color}
                className="h-full relative"
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Package Icon */}
                <div className="flex justify-center mb-6">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center",
                    pkg.color === 'foundation' && "bg-primary-100",
                    pkg.color === 'growth' && "bg-accent-100", 
                    pkg.color === 'enterprise' && "bg-success-100"
                  )}>
                    {pkg.color === 'foundation' && <Zap className="w-8 h-8 text-primary-600" />}
                    {pkg.color === 'growth' && <Rocket className="w-8 h-8 text-accent-600" />}
                    {pkg.color === 'enterprise' && <Crown className="w-8 h-8 text-success-600" />}
                  </div>
                </div>

                {/* Package Name */}
                <h3 className="text-2xl font-bold text-neutral-900 text-center mb-2">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-neutral-900">${pkg.price}</span>
                    <span className="text-neutral-600">setup</span>
                  </div>
                  <div className="text-primary-600 font-medium">
                    + ${pkg.monthlyPrice}/month hosting
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-600 text-center mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  href="/contact"
                  variant={pkg.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full font-accent text-base tracking-wide"
                >
                  {pkg.cta}
                </Button>

                {/* Additional Info */}
                <div className="text-center mt-4 text-sm text-neutral-500">
                  <p>No setup fees • 30-day guarantee</p>
                </div>
              </PricingCard>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className={cn(
          "bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden mb-16",
          animationClasses.fadeIn
        )}>
          <div className="p-8 text-center border-b border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">
              How We Compare to the Competition
            </h3>
            <p className="text-neutral-600">
              See why Montana businesses choose Cornerstone Developing
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-neutral-900">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-sm">C</span>
                      </div>
                      <span className="font-semibold text-primary-600 text-sm">Cornerstone</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-sm">W</span>
                      </div>
                      <span className="font-medium text-neutral-700 text-sm">Wix Premium</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-sm">WP</span>
                      </div>
                      <span className="font-medium text-neutral-700 text-sm">WordPress</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={feature} className="border-b border-neutral-100">
                    <td className="py-4 px-6 font-medium text-neutral-900">{feature}</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success-500" />
                        <span className="font-semibold text-success-700">
                          {competitorComparison.cornerstone[index]}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-neutral-600">
                      {competitorComparison.wix[index]}
                    </td>
                    <td className="py-4 px-4 text-center text-neutral-600">
                      {competitorComparison.wordpress[index]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Value Proposition */}
        <div className={cn(
          "grid md:grid-cols-3 gap-8 mb-16",
          animationClasses.fadeIn
        )}>
          <div className="text-center">
            <div className="w-16 h-16 bg-success-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-success-600" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              Save 40% Long-Term
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Our one-time development fee plus affordable hosting saves you thousands 
              compared to monthly platform subscriptions over time.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              3x Faster Performance
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Modern Next.js architecture delivers lightning-fast websites that 
              keep visitors engaged and improve your search rankings.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              Quick Delivery
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Most websites completed in 1-2 weeks using modern development tools 
              and AI assistance for faster, more efficient builds.
            </p>
          </div>
        </div>

        {/* Faith Integration */}
        <div className={cn(
          "text-center bg-gradient-to-r from-success-50 to-primary-50 rounded-2xl p-8 mb-12",
          animationClasses.fadeIn
        )}>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Excellence Without Compromise
          </h3>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            We believe in providing exceptional value through honest pricing and superior quality. 
            Your investment in a professional website should deliver real results, and we're 
            committed to ensuring it does. Built on solid foundations, faithful to your success.
          </p>
        </div>

        {/* CTA Section */}
        <div className={cn(
          "text-center",
          animationClasses.fadeIn
        )}>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Choose your package and let's build something amazing together. 
            Free consultation included with every project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="xl"
              className="font-accent text-lg tracking-wide"
              icon={<ArrowRight className="w-6 h-6" />}
              iconPosition="right"
            >
              Get Your Free Quote
            </Button>
            <Button
              href="/pricing"
              variant="outline"
              size="xl"
              className="font-accent text-lg tracking-wide"
            >
              View Full Pricing
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-success-500" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-success-500" />
              <span>30-day guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-success-500" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-success-500" />
              <span>Montana owned & operated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPreviewSection