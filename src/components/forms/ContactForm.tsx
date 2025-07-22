'use client'

import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  Building,
  Globe,
  DollarSign,
  Clock
} from 'lucide-react'
import Button from '@/components/ui/Button'

// EmailJS Configuration - Your actual credentials
const EMAILJS_CONFIG = {
  serviceId: 'Cornerstone',
  clientTemplateId: 'client_autoresponder', // Thank you email to client
  businessTemplateId: 'business_notification', // Notification email to you
  publicKey: 'aUKL5BbH5jZVIt_dM',
}

// Lead Scoring System
const leadScoring = {
  businessType: {
    'local-business': 10,
    'e-commerce': 15,
    'professional-services': 12,
    'nonprofit': 8,
    'startup': 12,
    'other': 5
  } as const,
  budget: {
    'under-1000': 5,
    '1000-5000': 10,
    '5000-10000': 15,
    'over-10000': 20
  } as const,
  timeline: {
    'asap': 15,
    'within-month': 12,
    'within-quarter': 8,
    'exploring': 5
  } as const,
  currentWebsite: {
    'none': 20,
    'outdated': 15,
    'diy-platform': 12,
    'professional': 5
  } as const
}

// Calculate lead priority
const calculateLeadScore = (formData: FormData) => {
  let score = 0
  score += leadScoring.businessType[formData.businessType as keyof typeof leadScoring.businessType] || 0
  score += leadScoring.budget[formData.budget as keyof typeof leadScoring.budget] || 0
  score += leadScoring.timeline[formData.timeline as keyof typeof leadScoring.timeline] || 0
  score += leadScoring.currentWebsite[formData.currentWebsite as keyof typeof leadScoring.currentWebsite] || 0
  
  if (score >= 45) return 'HIGH'
  if (score >= 25) return 'MEDIUM'
  return 'LOW'
}

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  businessType: string
  currentWebsite: string
  budget: string
  timeline: string
  services: string[]
  message: string
}

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey)
  }, [])

  // Helper functions for formatting
  const formatBudget = (budget: string) => {
    const budgetMap: Record<string, string> = {
      'under-1000': 'Under $1,000',
      '1000-5000': '$1,000 - $5,000',
      '5000-10000': '$5,000 - $10,000',
      'over-10000': 'Over $10,000'
    }
    return budgetMap[budget] || budget
  }

  const formatTimeline = (timeline: string) => {
    const timelineMap: Record<string, string> = {
      'asap': 'ASAP',
      'within-month': 'Within 1 month',
      'within-quarter': 'Within 3 months',
      'exploring': 'Just exploring'
    }
    return timelineMap[timeline] || timeline
  }

  const formatCurrentWebsite = (currentWebsite: string) => {
    const websiteMap: Record<string, string> = {
      'none': 'No website',
      'outdated': 'Outdated website',
      'diy-platform': 'DIY Platform (Wix/Squarespace)',
      'professional': 'Professional website'
    }
    return websiteMap[currentWebsite] || currentWebsite
  }

  const formatBusinessType = (businessType: string) => {
    const typeMap: Record<string, string> = {
      'local-business': 'Local Business',
      'e-commerce': 'E-commerce',
      'professional-services': 'Professional Services',
      'nonprofit': 'Non-profit',
      'startup': 'Startup',
      'other': 'Other'
    }
    return typeMap[businessType] || businessType
  }
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    currentWebsite: '',
    budget: '',
    timeline: '',
    services: [],
    message: ''
  })

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error'
    message: string
  }>({
    type: 'idle',
    message: ''
  })

  const serviceOptions = [
    'Website Development',
    'Website Redesign', 
    'E-commerce Store',
    'AWS Hosting',
    'Website Maintenance',
    'SEO Optimization',
    'Mobile App',
    'Other'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending your message...' })

    try {
      // Calculate lead priority
      const leadPriority = calculateLeadScore(formData)
      const currentTime = new Date().toLocaleString('en-US', {
        timeZone: 'America/Denver',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
      })

      // Determine response time based on priority
      const getResponseTime = (priority: string) => {
        switch(priority) {
          case 'HIGH': return '2 hours'
          case 'MEDIUM': return '6 hours'
          default: return '24 hours'
        }
      }

      // Prepare data for client thank you email
      const clientEmailData = {
        to_name: formData.name,
        to_email: formData.email,
        business_name: formData.company || formData.name + "'s Business",
        project_type: formData.services.length > 0 ? formData.services.join(' & ') : 'Website Development',
        response_time: getResponseTime(leadPriority),
        submission_time: currentTime
      }

      // Prepare data for business notification email
      const businessEmailData = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        business_name: formData.company || 'Not specified',
        project_type: formData.services.length > 0 ? formData.services.join(', ') : 'Website Development',
        budget: formatBudget(formData.budget),
        timeline: formatTimeline(formData.timeline),
        current_website: formatCurrentWebsite(formData.currentWebsite),
        project_details: formData.message || 'No additional details provided',
        lead_score: Object.entries(leadScoring).reduce((total: number, [category, values]) => {
          const selectedValue = formData[category as keyof FormData] as string
          const scoreValue = values[selectedValue as keyof typeof values] as number || 0
          return total + scoreValue
        }, 0),
        priority: leadPriority,
        priority_class: leadPriority.toLowerCase(),
        submission_time: currentTime,
        business_type: formatBusinessType(formData.businessType)
      }

      // Send client thank you email
      const clientResult = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.clientTemplateId,
        clientEmailData,
        EMAILJS_CONFIG.publicKey
      )

      // Send business notification email
      const businessResult = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.businessTemplateId,
        businessEmailData,
        EMAILJS_CONFIG.publicKey
      )

      if (clientResult.status === 200 && businessResult.status === 200) {
        const responseTime = getResponseTime(leadPriority)
        setStatus({
          type: 'success',
          message: `Thank you ${formData.name}! We've received your ${leadPriority.toLowerCase()} priority inquiry for ${formData.company || 'your business'}. We'll respond within ${responseTime} during business hours with a detailed proposal.`
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          businessType: '',
          currentWebsite: '',
          budget: '',
          timeline: '',
          services: [],
          message: ''
        })

        // Scroll to success message
        const successElement = document.querySelector('[data-success-message]')
        if (successElement) {
          successElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try calling us directly at (561) 870-3273 or emailing cornerstonedvlpr@gmail.com.'
      })
    }
  }

  const isFormValid = () => {
    return formData.name && 
           formData.email && 
           formData.phone && 
           formData.businessType && 
           formData.budget && 
           formData.timeline
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" id="contact-form">
      
      {/* Status Message */}
      {status.type !== 'idle' && (
        <div 
          data-success-message
          className={`p-4 rounded-lg border flex items-center space-x-3 ${
            status.type === 'success' 
              ? 'bg-success-50 border-success-200 text-success-800'
              : status.type === 'error'
              ? 'bg-red-50 border-red-200 text-red-800'
              : 'bg-primary-50 border-primary-200 text-primary-800'
          }`}
        >
          {status.type === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
          {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
          {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
          <span className="font-medium">{status.message}</span>
        </div>
      )}

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            placeholder="your.email@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-neutral-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            placeholder="Your company name"
          />
        </div>
      </div>

      {/* Business Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="businessType" className="block text-sm font-semibold text-neutral-700 mb-2">
            <Building className="w-4 h-4 inline mr-1" />
            Business Type *
          </label>
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select business type</option>
            <option value="local-business">Local Business</option>
            <option value="e-commerce">E-commerce</option>
            <option value="professional-services">Professional Services</option>
            <option value="nonprofit">Non-profit</option>
            <option value="startup">Startup</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="currentWebsite" className="block text-sm font-semibold text-neutral-700 mb-2">
            <Globe className="w-4 h-4 inline mr-1" />
            Current Website Status *
          </label>
          <select
            id="currentWebsite"
            name="currentWebsite"
            value={formData.currentWebsite}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select current status</option>
            <option value="none">No website</option>
            <option value="outdated">Outdated website</option>
            <option value="diy-platform">DIY platform (Wix, Squarespace)</option>
            <option value="professional">Professional website</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-semibold text-neutral-700 mb-2">
            <DollarSign className="w-4 h-4 inline mr-1" />
            Project Budget *
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select budget range</option>
            <option value="under-1000">Under $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="over-10000">Over $10,000</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-semibold text-neutral-700 mb-2">
            <Clock className="w-4 h-4 inline mr-1" />
            Project Timeline *
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="within-month">Within 1 month</option>
            <option value="within-quarter">Within 3 months</option>
            <option value="exploring">Just exploring</option>
          </select>
        </div>
      </div>

      {/* Services */}
      <div>
        <label className="block text-sm font-semibold text-neutral-700 mb-3">
          Services Needed (Select all that apply)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex items-center space-x-2 p-3 border border-neutral-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleServiceChange(service)}
                className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm font-medium text-neutral-700">
                {service}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-vertical"
          placeholder="Tell us about your project goals, specific requirements, or any questions you have..."
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full font-accent font-bold text-base tracking-wide"
        disabled={!isFormValid() || status.type === 'loading'}
      >
        {status.type === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Get My Free Quote
          </>
        )}
      </Button>

      {/* Form Footer */}
      <div className="text-center space-y-3">
        <p className="text-sm text-neutral-600">
          ✅ Typically responds within 4 hours • 🔒 No spam, ever • 🤝 Your information stays private
        </p>
        <div className="p-3 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg border border-primary-100">
          <p className="text-sm text-primary-700 font-medium">
            💡 After submitting, you'll receive a detailed thank you email with next steps, 
            and we'll contact you with a custom proposal within your selected timeline.
          </p>
        </div>
      </div>
    </form>
  )
}

export default ContactForm