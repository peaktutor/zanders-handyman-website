'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Card, { TestimonialCard } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useScrollAnimation } from '@/hooks/useIntersectionObserver'
import { 
  Star, 
  Quote,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MapPin,
  Briefcase,
  ArrowRight
} from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

const additionalTestimonials = [
  {
    id: '4',
    name: 'Tom Anderson',
    company: 'Bozeman Real Estate',
    role: 'Broker',
    content: 'The website has become our most effective marketing tool. Property inquiries have doubled, and clients love the virtual tour integration.',
    rating: 5,
    image: '/images/testimonials/tom-anderson.jpg',
    date: '2024-01-20',
    featured: false,
    project: 'Real Estate Website'
  },
  {
    id: '5',
    name: 'Lisa Chen',
    company: 'Mountain Wellness Spa',
    role: 'Owner',
    content: 'Professional, responsive, and truly understood our vision. The online booking system has streamlined our entire operation.',
    rating: 5,
    image: '/images/testimonials/lisa-chen.jpg',
    date: '2024-05-01',
    featured: false,
    project: 'Wellness Center Website'
  },
  {
    id: '6',
    name: 'David Martinez',
    company: 'Big Sky Adventures',
    role: 'Tour Guide',
    content: 'Our adventure booking website is amazing! Easy to use, fast, and our customers can book tours 24/7. Business has never been better.',
    rating: 5,
    image: '/images/testimonials/david-martinez.jpg',
    date: '2024-03-10',
    featured: false,
    project: 'Adventure Tours Website'
  }
]

const allTestimonials = [...TESTIMONIALS, ...additionalTestimonials]

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { ref: sectionRef, animationClasses } = useScrollAnimation()

  const featuredTestimonials = allTestimonials.filter(t => t.featured)
  const regularTestimonials = allTestimonials.filter(t => !t.featured)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === featuredTestimonials.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, featuredTestimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === featuredTestimonials.length - 1 ? 0 : prev + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? featuredTestimonials.length - 1 : prev - 1
    )
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          'w-4 h-4',
          i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'
        )}
      />
    ))
  }

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className={cn("text-center max-w-3xl mx-auto mb-16", animationClasses.fadeIn)}>
          <h2 className="heading-lg text-neutral-900 mb-6">
            What Our Montana Clients Say About 
            <span className="text-gradient"> Working With Us</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Don't just take our word for it. Here's what business owners across 
            Montana have to say about their experience with Cornerstone Developing.
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        {featuredTestimonials.length > 0 && (
          <div className={cn(
            "relative bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 mb-16 overflow-hidden",
            animationClasses.fadeIn
          )}>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-pattern opacity-5" />
            
            <div
              className="relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center max-w-4xl mx-auto">
                <div className="mb-6">
                  <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed italic">
                    "{featuredTestimonials[currentTestimonial]?.content}"
                  </p>
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars(featuredTestimonials[currentTestimonial]?.rating || 5)}
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {featuredTestimonials[currentTestimonial]?.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-neutral-900">
                      {featuredTestimonials[currentTestimonial]?.name}
                    </div>
                    <div className="text-neutral-600 text-sm">
                      {featuredTestimonials[currentTestimonial]?.role}, {featuredTestimonials[currentTestimonial]?.company}
                    </div>
                  </div>
                </div>

                {/* Project Tag */}
                {featuredTestimonials[currentTestimonial]?.project && (
                  <div className="mt-4">
                    <span className="inline-block bg-white/50 text-primary-700 px-3 py-1 rounded-full text-sm">
                      {featuredTestimonials[currentTestimonial].project}
                    </span>
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              {featuredTestimonials.length > 1 && (
                <>
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-neutral-700" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-neutral-700" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {featuredTestimonials.length > 1 && (
                <div className="flex justify-center space-x-2 mt-8">
                  {featuredTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={cn(
                        'w-3 h-3 rounded-full transition-colors',
                        index === currentTestimonial
                          ? 'bg-primary-600'
                          : 'bg-white/50 hover:bg-white/70'
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "transform transition-all duration-300",
                animationClasses.slideUp
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard className="h-full">
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-neutral-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-neutral-600 text-xs">
                      {testimonial.role}
                    </div>
                    <div className="text-neutral-500 text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Project Tag */}
                {testimonial.project && (
                  <div className="mt-4">
                    <span className="inline-block bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs">
                      {testimonial.project}
                    </span>
                  </div>
                )}
              </TestimonialCard>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={cn(
          "bg-gradient-to-r from-success-50 to-primary-50 rounded-2xl p-8 text-center mb-12",
          animationClasses.fadeIn
        )}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Trusted by Montana's Growing Businesses
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-neutral-900">5.0</div>
                  <div className="text-sm text-neutral-600">Average Rating</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-neutral-900">47+</div>
                  <div className="text-sm text-neutral-600">Projects Completed</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-success-600" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-neutral-900">15+</div>
                  <div className="text-sm text-neutral-600">Montana Cities</div>
                </div>
              </div>
            </div>

            <p className="text-lg text-neutral-700 mb-6">
              "We don't just build websites - we build lasting partnerships with Montana businesses. 
              Your success is our foundation, and we're committed to helping you thrive online."
            </p>

            <div className="text-success-600 font-medium italic">
              - Built on solid foundations, faithful to your vision
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={cn(
          "text-center",
          animationClasses.fadeIn
        )}>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Become Our Next Success Story?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join the growing number of Montana businesses that trust 
            Cornerstone Developing for their web development needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="xl"
              className="font-accent text-lg tracking-wide"
              icon={<ArrowRight className="w-6 h-6" />}
              iconPosition="right"
            >
              Get Your Free Consultation
            </Button>
            <Button
              href="/portfolio"
              variant="outline"
              size="xl"
              className="font-accent text-lg tracking-wide"
            >
              See More Success Stories
            </Button>
          </div>

          <p className="text-sm text-neutral-500 mt-4">
            Free consultation • No obligation • Results guaranteed
          </p>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection