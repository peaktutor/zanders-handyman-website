'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Card, { PortfolioCard } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useScrollAnimation } from '@/hooks/useIntersectionObserver'
import { 
  ExternalLink, 
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Star,
  CheckCircle,
  Calendar,
  X
} from 'lucide-react'

const portfolioProjects = [
  {
    id: 'peak-tutoring',
    title: 'Peak Tutoring',
    description: 'Educational services website with online booking and student management system.',
    client: 'Peak Tutoring',
    industry: 'Education',
    image: '/images/portfolio/peak-tutoring.jpg',
    url: 'https://peaktutoring-demo.com',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'AWS'],
    results: [
      { metric: 'Student Inquiries', value: '+300%', description: 'Increase in monthly inquiries' },
      { metric: 'Page Speed', value: '1.2s', description: 'Average load time' },
      { metric: 'Mobile Traffic', value: '78%', description: 'Mobile conversion rate' }
    ],
    features: [
      'Online booking system',
      'Student portal',
      'Payment processing',
      'Progress tracking'
    ],
    launchDate: 'March 2024',
    testimonial: {
      content: 'Our website transformation has been incredible. Student inquiries tripled and parents love the easy booking system.',
      author: 'Sarah Johnson',
      role: 'Owner'
    }
  },
  {
    id: 'genesis-marketing',
    title: 'Genesis Marketing',
    description: 'Marketing agency website with portfolio showcase and client management features.',
    client: 'Genesis Marketing',
    industry: 'Marketing',
    image: '/images/portfolio/genesis-marketing.jpg',
    url: 'https://genesismarketing-demo.com',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'AWS'],
    results: [
      { metric: 'Lead Generation', value: '+250%', description: 'Qualified leads per month' },
      { metric: 'Page Speed', value: '0.9s', description: 'Fastest in industry' },
      { metric: 'Conversion Rate', value: '12%', description: 'Contact form completion' }
    ],
    features: [
      'Interactive portfolio',
      'Case study system',
      'Lead generation forms',
      'Analytics dashboard'
    ],
    launchDate: 'February 2024',
    testimonial: {
      content: 'The professionalism and technical expertise is unmatched. Delivered exactly what was promised.',
      author: 'Mike Rodriguez',
      role: 'CEO'
    }
  },
  {
    id: 'mountain-dental',
    title: 'Mountain View Dental',
    description: 'HIPAA-compliant dental practice website with online appointment booking.',
    client: 'Mountain View Dental',
    industry: 'Healthcare',
    image: '/images/portfolio/mountain-dental.jpg',
    url: 'https://mountaindental-demo.com',
    technologies: ['Next.js', 'HIPAA Compliance', 'Booking API', 'AWS'],
    results: [
      { metric: 'Online Bookings', value: '+400%', description: 'Monthly appointments' },
      { metric: 'Patient Satisfaction', value: '4.9/5', description: 'Average rating' },
      { metric: 'Load Time', value: '1.4s', description: 'Mobile performance' }
    ],
    features: [
      'HIPAA-compliant forms',
      'Appointment booking',
      'Patient portal',
      'Insurance integration'
    ],
    launchDate: 'April 2024',
    testimonial: {
      content: 'Our new website has revolutionized how patients interact with our practice.',
      author: 'Dr. Jennifer Lee',
      role: 'Practice Owner'
    }
  }
]

const industries = ['All', 'Education', 'Marketing', 'Healthcare', 'E-commerce', 'Professional Services']

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null)
  const { ref: sectionRef, animationClasses } = useScrollAnimation()

  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.industry === activeFilter)

  return (
    <section ref={sectionRef} className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className={cn("text-center max-w-4xl mx-auto mb-16", animationClasses.fadeIn)}>
          <h2 className="heading-lg text-neutral-900 mb-6">
            Building Digital Legacies for 
            <span className="text-gradient"> Montana Businesses</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            See how we've helped local businesses transform their online presence 
            and achieve remarkable results with modern web solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={cn(
          "flex flex-wrap justify-center gap-2 mb-12",
          animationClasses.fadeIn
        )}>
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setActiveFilter(industry)}
              className={cn(
                'px-4 py-2 rounded-lg font-medium transition-colors',
                activeFilter === industry
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
              )}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group",
                animationClasses.slideUp
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PortfolioCard className="overflow-hidden">
                {/* Project Image */}
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mb-3 mx-auto">
                        <span className="text-2xl font-bold text-primary-600">
                          {project.client.charAt(0)}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-neutral-700">
                        {project.client}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {project.industry}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-sm font-medium">View Details</div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                      {project.industry}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-neutral-500">
                      <Calendar className="w-3 h-3" />
                      <span>{project.launchDate}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="text-center bg-neutral-50 rounded-lg p-2">
                        <div className="text-sm font-bold text-primary-600">
                          {result.value}
                        </div>
                        <div className="text-xs text-neutral-600">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white text-neutral-600 px-2 py-1 rounded border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-neutral-500">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-between text-primary-600 hover:text-primary-700 p-2 rounded-lg hover:bg-primary-50 transition-colors group"
                  >
                    <span className="font-medium text-sm">View Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </PortfolioCard>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={cn(
          "bg-white rounded-2xl shadow-lg p-8 border border-neutral-200 mb-12",
          animationClasses.fadeIn
        )}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">
              Results That Speak for Themselves
            </h3>
            <p className="text-neutral-600">
              Our clients see real, measurable improvements
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">285%</div>
              <div className="text-sm text-neutral-600">Average Traffic Increase</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-success-600" />
              </div>
              <div className="text-3xl font-bold text-success-600 mb-2">47+</div>
              <div className="text-sm text-neutral-600">Happy Clients</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent-600" />
              </div>
              <div className="text-3xl font-bold text-accent-600 mb-2">1.4s</div>
              <div className="text-sm text-neutral-600">Average Load Time</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">5.0</div>
              <div className="text-sm text-neutral-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={cn(
          "text-center",
          animationClasses.fadeIn
        )}>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your online presence and 
            help you achieve similar results for your Montana business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="xl"
              className="font-accent text-lg tracking-wide"
              icon={<ArrowRight className="w-6 h-6" />}
              iconPosition="right"
            >
              Start Your Success Story
            </Button>
            <Button
              href="/portfolio"
              variant="outline"
              size="xl"
              className="font-accent text-lg tracking-wide"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Project Detail Modal (Simple Implementation) */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {selectedProject.title}
                </h3>
                <p className="text-neutral-600">{selectedProject.client}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-neutral-400 hover:text-neutral-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <p className="text-neutral-700">{selectedProject.description}</p>
              
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Key Results</h4>
                <div className="grid grid-cols-3 gap-4">
                  {selectedProject.results.map((result, idx) => (
                    <div key={idx} className="text-center bg-neutral-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-primary-600">
                        {result.value}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedProject.testimonial && (
                <div className="bg-primary-50 rounded-lg p-6">
                  <p className="text-neutral-700 italic mb-3">
                    "{selectedProject.testimonial.content}"
                  </p>
                  <div className="text-sm">
                    <span className="font-medium text-neutral-900">
                      {selectedProject.testimonial.author}
                    </span>
                    <span className="text-neutral-600">
                      , {selectedProject.testimonial.role}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PortfolioSection