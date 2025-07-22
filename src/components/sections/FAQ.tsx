'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useScrollAnimation } from '@/hooks/useIntersectionObserver'
import { 
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react'
import { FAQ_DATA } from '@/lib/constants'

const additionalFAQs = [
  {
    question: 'What is included in the hosting service?',
    answer: 'Our hosting includes AWS cloud infrastructure, SSL certificates, daily backups, CDN delivery, 99.9% uptime guarantee, security monitoring, and technical support. Everything you need to keep your website running smoothly.'
  },
  {
    question: 'Can you help migrate my existing website?',
    answer: 'Yes! We offer free website migration services for all new hosting clients. We\'ll handle the technical details of moving your site to our AWS infrastructure without any downtime.'
  },
  {
    question: 'Do you provide training on how to update my website?',
    answer: 'Absolutely. Every project includes comprehensive training on managing your website. We provide video tutorials, written guides, and hands-on training sessions to ensure you\'re comfortable making updates.'
  },
  {
    question: 'What makes Next.js better than WordPress?',
    answer: 'Next.js offers superior performance (3x faster loading), better security, automatic updates, and no plugin vulnerabilities. It\'s also more SEO-friendly and provides a better user experience on all devices.'
  },
  {
    question: 'Do you work with businesses outside of Montana?',
    answer: 'While we\'re based in Montana and specialize in serving local businesses, we do work with clients nationwide through our remote development process. We bring the same personal touch to all our clients.'
  },
  {
    question: 'What happens if I\'m not satisfied with my website?',
    answer: 'We offer a 100% satisfaction guarantee. If you\'re not completely happy with your website within 30 days of launch, we\'ll work to make it right or provide a full refund. Your success is our foundation.'
  }
]

const allFAQs = [...FAQ_DATA, ...additionalFAQs]

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])) // First item open by default
  const { ref: sectionRef, animationClasses } = useScrollAnimation()

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const openAll = () => {
    setOpenItems(new Set(Array.from({ length: allFAQs.length }, (_, i) => i)))
  }

  const closeAll = () => {
    setOpenItems(new Set())
  }

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className={cn("text-center max-w-3xl mx-auto mb-16", animationClasses.fadeIn)}>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          
          <h2 className="heading-lg text-neutral-900 mb-6">
            Frequently Asked 
            <span className="text-gradient"> Questions</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Get answers to common questions about our web development services, 
            pricing, and process. Can't find what you're looking for? We're here to help.
          </p>
        </div>

        {/* FAQ Controls */}
        <div className={cn(
          "flex justify-center space-x-4 mb-8",
          animationClasses.fadeIn
        )}>
          <button
            onClick={openAll}
            className="text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            Expand All
          </button>
          <span className="text-neutral-300">|</span>
          <button
            onClick={closeAll}
            className="text-neutral-600 hover:text-neutral-700 font-medium text-sm"
          >
            Collapse All
          </button>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {allFAQs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "transform transition-all duration-300",
                  animationClasses.slideUp
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card className="overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={cn(
                          'w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform duration-200',
                          openItems.has(index) && 'rotate-180'
                        )}
                      />
                    </div>
                  </button>
                  
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300 ease-in-out',
                      openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-neutral-200 pt-4">
                        <p className="text-neutral-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className={cn(
          "bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8",
          animationClasses.fadeIn
        )}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We're here to help! Reach out through any of these channels and 
              we'll get back to you within 4 hours during business hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Phone */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Call Us</h4>
              <p className="text-neutral-600 mb-3">
                Speak directly with our team
              </p>
              <a
                href="tel:+15618703273"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                (561) 870-3273
              </a>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Email Us</h4>
              <p className="text-neutral-600 mb-3">
                Get detailed answers
              </p>
              <a
                href="mailto:cornerstonedvlpr@gmail.com"
                className="text-accent-600 hover:text-accent-700 font-medium"
              >
                cornerstonedvlpr@gmail.com
              </a>
            </div>

            {/* Live Chat */}
            <div className="text-center">
              <div className="w-12 h-12 bg-success-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Free Consultation</h4>
              <p className="text-neutral-600 mb-3">
                Schedule a strategy session
              </p>
              <Button
                href="/contact"
                variant="ghost"
                size="sm"
                className="text-success-600 hover:text-success-700 hover:bg-success-50"
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <Button
              href="/contact"
              size="lg"
              className="font-accent text-base tracking-wide"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Get Your Free Consultation
            </Button>
            <p className="text-sm text-neutral-500 mt-3">
              No obligation • Free website audit included
            </p>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className={cn(
          "text-center mt-12",
          animationClasses.fadeIn
        )}>
          <div className="inline-flex items-center space-x-6 text-sm text-neutral-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success-400 rounded-full"></div>
              <span>Usually responds within 4 hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span>Montana owned & operated</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
              <span>Free consultations always</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection