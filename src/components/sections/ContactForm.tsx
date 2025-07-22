'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  projectType: string;
  budget: string;
  timeline: string;
  currentWebsite: string;
  projectDetails: string;
}

interface ContactFormProps {
  className?: string;
  variant?: 'default' | 'hero' | 'sidebar';
  title?: string;
  subtitle?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  className, 
  variant = 'default',
  title = "Start Your Digital Journey Today",
  subtitle = "Get a free consultation and quote for your Montana business website"
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    projectType: '',
    budget: '',
    timeline: '',
    currentWebsite: '',
    projectDetails: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { value: 'new-website', label: 'New Website Development' },
    { value: 'redesign', label: 'Website Redesign' },
    { value: 'e-commerce', label: 'E-commerce Store' },
    { value: 'hosting', label: 'Website Hosting' },
    { value: 'maintenance', label: 'Website Maintenance' },
    { value: 'consultation', label: 'Free Consultation' }
  ];

  const budgetRanges = [
    { value: 'under-500', label: 'Under $500' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: 'over-5000', label: '$5,000+' },
    { value: 'not-sure', label: 'Not sure yet' }
  ];

  const timelines = [
    { value: 'asap', label: 'ASAP - I need this quickly!' },
    { value: 'within-month', label: 'Within 1 month' },
    { value: 'within-quarter', label: 'Within 3 months' },
    { value: 'exploring', label: 'Just exploring options' }
  ];

  const currentWebsiteOptions = [
    { value: 'none', label: 'No website currently' },
    { value: 'outdated', label: 'Outdated website that needs help' },
    { value: 'diy-platform', label: 'DIY platform (Wix, Squarespace, etc.)' },
    { value: 'professional', label: 'Professional website, needs updates' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      const emailjs = (window as any).emailjs;
      
      if (!emailjs) {
        throw new Error('EmailJS not loaded');
      }

      // Calculate lead score for prioritization
      const leadScore = calculateLeadScore();
      const priority = getLeadPriority(leadScore);

      // Template parameters for business notification email
      const businessTemplateParams = {
        to_email: 'cornerstonedvlpr@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        business_name: formData.businessName,
        project_type: formatProjectType(formData.projectType),
        budget: formatBudget(formData.budget),
        timeline: formatTimeline(formData.timeline),
        current_website: formatCurrentWebsite(formData.currentWebsite),
        project_details: formData.projectDetails || 'No additional details provided',
        lead_score: leadScore,
        priority: priority,
        priority_class: priority.toLowerCase(),
        submission_time: new Date().toLocaleString('en-US', {
          timeZone: 'America/Denver',
          dateStyle: 'full',
          timeStyle: 'short'
        })
      };

      // Template parameters for auto-responder email
      const clientTemplateParams = {
        to_email: formData.email,
        to_name: formData.name,
        business_name: formData.businessName,
        project_type: formatProjectType(formData.projectType),
        response_time: priority === 'High' ? '2 hours' : priority === 'Medium' ? '6 hours' : '24 hours'
      };

      // Send business notification email
      await emailjs.send(
        'Cornerstone', // Your service ID
        'business_notification', // Template ID for business notification
        businessTemplateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      // Send auto-responder email
      await emailjs.send(
        'Cornerstone', // Your service ID  
        'client_autoresponder', // Template ID for client auto-responder
        clientTemplateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
      
      // Track conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: formData.projectType,
          value: 1
        });
      }

    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or call us directly at (561) 870-3273.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper functions for lead scoring and formatting
  const calculateLeadScore = (): number => {
    let score = 0;
    
    const projectTypeScores: { [key: string]: number } = {
      'new-website': 15, 'redesign': 12, 'e-commerce': 18, 
      'hosting': 8, 'maintenance': 10, 'consultation': 12
    };
    score += projectTypeScores[formData.projectType] || 0;

    const budgetScores: { [key: string]: number } = {
      'under-500': 5, '500-1000': 8, '1000-2500': 12, 
      '2500-5000': 15, 'over-5000': 20, 'not-sure': 8
    };
    score += budgetScores[formData.budget] || 0;

    const timelineScores: { [key: string]: number } = {
      'asap': 15, 'within-month': 12, 'within-quarter': 8, 'exploring': 5
    };
    score += timelineScores[formData.timeline] || 0;

    const websiteScores: { [key: string]: number } = {
      'none': 20, 'outdated': 15, 'diy-platform': 12, 'professional': 5
    };
    score += websiteScores[formData.currentWebsite] || 0;

    return score;
  };

  const getLeadPriority = (score: number): 'High' | 'Medium' | 'Low' => {
    if (score >= 40) return 'High';
    if (score >= 25) return 'Medium';
    return 'Low';
  };

  const formatProjectType = (type: string): string => {
    const types: { [key: string]: string } = {
      'new-website': 'New Website Development', 'redesign': 'Website Redesign',
      'e-commerce': 'E-commerce Store', 'hosting': 'Website Hosting',
      'maintenance': 'Website Maintenance', 'consultation': 'Free Consultation'
    };
    return types[type] || type;
  };

  const formatBudget = (budget: string): string => {
    return budget.replace('-', ' - ').replace('under', 'Under').replace('over', 'Over ').replace('not-sure', 'Not sure yet') || 'Not specified';
  };

  const formatTimeline = (timeline: string): string => {
    return timeline.replace('-', ' ').replace('asap', 'ASAP').replace('within', 'Within ').replace('exploring', 'Just exploring') || 'Not specified';
  };

  const formatCurrentWebsite = (website: string): string => {
    return website.replace('-', ' ').replace('none', 'No website currently').replace('diy', 'DIY ') || 'Not specified';
  };

  if (isSubmitted) {
    return (
      <div className={cn(
        'bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl text-center',
        className
      )}>
        <div className="w-16 h-16 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Thank You!</h3>
        <p className="text-neutral-600 mb-6">
          Your message has been received! We'll get back to you within 24 hours with a personalized 
          proposal for your {formData.businessName} website.
        </p>
        <div className="bg-white p-4 rounded-lg border border-neutral-200">
          <p className="text-sm text-neutral-500 mb-2">
            <strong>What happens next:</strong>
          </p>
          <ul className="text-sm text-neutral-600 space-y-1 text-left">
            <li>✅ We'll review your project details</li>
            <li>📞 Quick discovery call (15-20 minutes)</li>
            <li>💰 Custom quote within 24 hours</li>
            <li>🚀 Start building your success story</li>
          </ul>
        </div>
        <p className="text-xs text-neutral-500 mt-4">
          Questions? Call us directly: <strong>(561) 870-3273</strong>
        </p>
      </div>
    );
  }

  return (
    <div className={cn('space-y-6', className)}>
      {variant !== 'sidebar' && (
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 font-accent">
            {title}
          </h2>
          <p className="text-neutral-600">
            {subtitle}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Your Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            error={errors.name}
            required
            placeholder="John Smith"
          />
          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={errors.email}
            required
            placeholder="john@yourbusiness.com"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            error={errors.phone}
            placeholder="(406) 555-0123"
            helperText="We'll use this for a quick discovery call"
          />
          <Input
            label="Business Name"
            value={formData.businessName}
            onChange={(e) => handleInputChange('businessName', e.target.value)}
            error={errors.businessName}
            required
            placeholder="Your Montana Business"
          />
        </div>

        {/* Project Details */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Project Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.projectType}
              onChange={(e) => handleInputChange('projectType', e.target.value)}
              className={cn(
                'w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200',
                errors.projectType && 'border-red-500'
              )}
            >
              <option value="">Select your project type...</option>
              {projectTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
            {errors.projectType && (
              <p className="text-sm text-red-600 mt-1">{errors.projectType}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Estimated Budget
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200"
              >
                <option value="">Select budget range...</option>
                {budgetRanges.map(budget => (
                  <option key={budget.value} value={budget.value}>{budget.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200"
              >
                <option value="">When do you need this?</option>
                {timelines.map(timeline => (
                  <option key={timeline.value} value={timeline.value}>{timeline.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Current Website Status
            </label>
            <select
              value={formData.currentWebsite}
              onChange={(e) => handleInputChange('currentWebsite', e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200"
            >
              <option value="">What's your current situation?</option>
              {currentWebsiteOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Project Details
            </label>
            <textarea
              value={formData.projectDetails}
              onChange={(e) => handleInputChange('projectDetails', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 resize-none"
              placeholder="Tell us about your vision, specific features needed, or any questions you have..."
            />
            <p className="text-xs text-neutral-500 mt-1">
              The more details you provide, the better we can customize your quote!
            </p>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="bg-neutral-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-success-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-neutral-700">100% Risk-Free Guarantee</span>
          </div>
          <p className="text-xs text-neutral-600">
            Free consultation • No obligation • Honest, transparent pricing • Montana business values
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
          className="w-full text-lg py-4"
          size="lg"
        >
          {isSubmitting ? 'Sending Your Information...' : '🚀 Get My Free Quote & Consultation'}
        </Button>

        <p className="text-xs text-center text-neutral-500">
          By submitting this form, you agree to receive communications from Cornerstone Developing. 
          We respect your privacy and won't spam you. 
          <br />
          <strong>Questions?</strong> Call us directly: <a href="tel:5618703273" className="text-primary-600 hover:underline">(561) 870-3273</a>
        </p>
      </form>
    </div>
  );
};