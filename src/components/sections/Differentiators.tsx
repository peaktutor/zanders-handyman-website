'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useScrollAnimation, useCountAnimation } from '@/hooks/useIntersectionObserver'
import { 
  Zap, 
  DollarSign, 
  Crown, 
  Heart,
  CheckCircle,
  X,
  ArrowRight,
  Clock,
  Users,
  Shield
} from 'lucide-react'
import { DIFFERENTIATORS } from '@/lib/constants'

const comparisonData = [
  {
    feature: 'Page Load Speed',
    cornerstone: '< 2 seconds',
    wix: '4-6 seconds',
    wordpress: '3-5 seconds',
    winner: 'cornerstone'
  },
  {
    feature: 'Monthly Cost',
    cornerstone: '$29/month',
    wix: '$59/month',
    wordpress: '$45/month',
    winner: 'cornerstone'
  },
  {
    feature: 'Website Ownership',
    cornerstone: 'You own it',
    wix: 'Platform locked',
    wordpress: 'Limited',
    winner: 'cornerstone'
  },
  {
    feature: 'Custom Features',
    cornerstone: 'Unlimited',
    wix: 'Template only',
    wordpress: 'Plugin dependent',
    winner: 'cornerstone'
  },
  {
    feature: 'Support Response',
    cornerstone: '< 4 hours',
    wix: '24-48 hours',
    wordpress: 'Community only',
    winner: 'cornerstone'
  }
]

const keyDifferentiators = [
  {
    icon: Zap,
    title: '3x Faster Performance',
    description: 'Modern Next.js architecture delivers lightning-fast load times that keep visitors engaged.',
    metric: '< 2 sec',
    color: 'from-primary-500 to-primary-600',
    stats: ['95+ PageSpeed Score', 'Optimized Images', 'CDN Delivery']
  },
  {
    icon: DollarSign,
    title: '40% Cost Savings',
    description: 'Get premium features at a fraction of the cost compared to Wix Premium or expensive agencies.',
    metric: '$29/mo',
    color: 'from-success-500 to-success-600',
    stats: ['No Setup Fees', 'No Hidden Costs', 'Transparent Pricing']
  },
  {
    icon: Crown,
    title: 'Complete Ownership',
    description: 'Your website belongs to you completely. No platform lock-in, no monthly platform fees.',
    metric: '100%',
    color: 'from-accent-500 to-accent-600',
    stats: ['Full Source Code', 'Export Anytime', 'No Dependencies']
  },
  {
    icon: Heart,
    title: 'Personal Montana Service',
    description: 'Direct access to your developer. No account managers, no outsourced support teams.',
    metric: '< 4 hrs',
    color: 'from-purple-500 to-purple-600',
    stats: ['Local Support', 'Direct Communication', 'Long-term Partnership']
  }
]

const DifferentiatorsSection: React.FC = () => {
  const { ref: sectionRef, animationClasses } = useScrollAnimation<HTMLElement>()
  const { ref: countRef, count: satisfiedClients } = useCountAnimation<HTMLDivElement>(47, 2000)
  const { ref: countRef2, count: averageSpeed } = useCountAnimation<HTMLDivElement>(13, 2000)
  const { ref: countRef3, count: costSavings } = useCountAnimation<HTMLDivElement>(40, 2000)

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className={cn("text-center max-w-4xl mx-auto mb-16", animationClasses.fadeIn)}>
          <h2 className="heading-lg text-neutral-900 mb-6">
            Why Montana Businesses Choose 
            <span className="text-gradient"> Cornerstone Developing</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            We're not just another web development company. We're your dedicated partners, 
            committed to your success with modern technology and old-fashioned service values.
          </p>
        </div>

        {/* Key Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {keyDifferentiators.map((diff, index) => (
            <div
              key={index}
              className={cn(
                "group",
                animationClasses.slideUp
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full text-center hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className={cn(
                  "w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r flex items-center justify-center text-white",
                  diff.color
                )}>
                  <diff.icon className="w-8 h-8" />
                </div>

                {/* Metric */}
                <div className="text-3xl font-bold text-neutral-900 mb-2">
                  {diff.metric}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {diff.description}
                </p>

                {/* Stats */}
                <div className="space-y-2">
                  {diff.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                      <span className="text-neutral-600">{stat}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className={cn(
          "bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 shadow-lg border border-neutral-200 mb-16",
          animationClasses.fadeIn
        )}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">
              How We Compare to the Competition
            </h3>
            <p className="text-neutral-600">
              See the difference our modern approach makes
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-4 px-2 font-semibold text-neutral-900">Feature</th>
                  <th className="text-center py-4 px-2">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-sm">C</span>
                      </div>
                      <span className="font-semibold text-primary-600">Cornerstone</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-2">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-sm">W</span>
                      </div>
                      <span className="font-medium text-neutral-700">Wix</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-2">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center mb-2">
                        <span className="text-white font-bold text-sm">WP</span>
                      </div>
                      <span className="font-medium text-neutral-700">WordPress</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-neutral-100">
                    <td className="py-4 px-2 font-medium text-neutral-900">{row.feature}</td>
                    <td className="py-4 px-2 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-success-500" />
                        <span className="font-semibold text-success-700">{row.cornerstone}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-neutral-600">{row.wix}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-neutral-600">{row.wordpress}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Section */}
        <div className={cn(
          "grid md:grid-cols-3 gap-8 mb-16",
          animationClasses.fadeIn
        )}>
          <div ref={countRef} className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">
              {satisfiedClients}+
            </div>
            <div className="text-neutral-600">Satisfied Clients</div>
          </div>
          <div ref={countRef2} className="text-center">
            <div className="text-5xl font-bold text-success-600 mb-2">
              {averageSpeed / 10}s
            </div>
            <div className="text-neutral-600">Average Load Time</div>
          </div>
          <div ref={countRef3} className="text-center">
            <div className="text-5xl font-bold text-accent-600 mb-2">
              {costSavings}%
            </div>
            <div className="text-neutral-600">Cost Savings</div>
          </div>
        </div>

        {/* Faith-Based Messaging */}
        <div className={cn(
          "text-center bg-gradient-to-r from-success-50 to-primary-50 rounded-2xl p-8",
          animationClasses.fadeIn
        )}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Built on Solid Foundations
            </h3>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Our commitment goes beyond code and design. We build lasting partnerships 
              with Montana businesses, providing faithful service and unwavering support 
              for your digital success. Your vision becomes our mission.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-success-500" />
                <span className="text-neutral-700">Integrity in every interaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-success-500" />
                <span className="text-neutral-700">Excellence without compromise</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-success-500" />
                <span className="text-neutral-700">Faithful partnership</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={cn(
          "text-center mt-12",
          animationClasses.fadeIn
        )}>
          <Button
            href="/contact"
            size="xl"
            className="font-accent text-lg tracking-wide"
            icon={<ArrowRight className="w-6 h-6" />}
            iconPosition="right"
          >
            Experience the Cornerstone Difference
          </Button>
        </div>
      </div>
    </section>
  )
}

export default DifferentiatorsSection