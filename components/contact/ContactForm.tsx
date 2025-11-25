'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  jobTitle: string
  phone: string
  industry: string
  interest: string
  message: string
  budget: string
  timeline: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    industry: '',
    interest: '',
    message: '',
    budget: '',
    timeline: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const industries = [
    'Banking & Financial Services',
    'Healthcare',
    'Retail & E-commerce',
    'Telecommunications',
    'Insurance',
    'Logistics & Supply Chain',
    'Manufacturing',
    'Government',
    'Other'
  ]

  const interests = [
    'CogniAssist - Conversational AI',
    'CogniXcellerate - Agentic AI',
    'CogniLoom - Document Processing',
    'Product Engineering Services',
    'Cloud Engineering Services',
    'Data Engineering Services',
    'Intelligent Automation',
    'Cybersecurity Services',
    'General Consultation'
  ]

  const budgetRanges = [
    'Under $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K - $500K',
    '$500K - $1M',
    'Over $1M',
    'Not sure yet'
  ]

  const timelines = [
    'Immediate (within 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Just exploring options'
  ]

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.industry) newErrors.industry = 'Industry is required'
    if (!formData.interest) newErrors.interest = 'Area of interest is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Track form submission for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'Contact',
        event_label: formData.interest,
        value: 1
      })
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-brand-white p-8 lg:p-12 flex items-center justify-center min-h-[600px]">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-brand-dark-grey mb-4">
            Thank You!
          </h3>
          <p className="text-brand-medium-grey mb-6">
            We've received your message and will get back to you within 24 hours. 
            Our team is excited to discuss how we can help transform your business.
          </p>
          <Button 
            variant="primary" 
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                firstName: '', lastName: '', email: '', company: '', jobTitle: '',
                phone: '', industry: '', interest: '', message: '', budget: '', timeline: ''
              })
            }}
          >
            Send Another Message
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-brand-white p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-brand-dark-grey mb-8">
          Get Started Today
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First Name *"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              error={errors.firstName}
              placeholder="John"
            />
            <Input
              label="Last Name *"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              error={errors.lastName}
              placeholder="Doe"
            />
          </div>

          <Input
            label="Email Address *"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={errors.email}
            placeholder="john.doe@company.com"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Company *"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              error={errors.company}
              placeholder="Your Company"
            />
            <Input
              label="Job Title"
              value={formData.jobTitle}
              onChange={(e) => handleInputChange('jobTitle', e.target.value)}
              placeholder="CTO, VP of Engineering, etc."
            />
          </div>

          <Input
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-brand-dark-grey mb-2">
                Industry *
              </label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  errors.industry 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                    : 'border-brand-light-grey focus:border-brand-yellow focus:ring-brand-yellow'
                }`}
              >
                <option value="">Select your industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              {errors.industry && (
                <p className="text-sm text-red-600 mt-2">{errors.industry}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark-grey mb-2">
                Area of Interest *
              </label>
              <select
                value={formData.interest}
                onChange={(e) => handleInputChange('interest', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  errors.interest 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                    : 'border-brand-light-grey focus:border-brand-yellow focus:ring-brand-yellow'
                }`}
              >
                <option value="">What interests you most?</option>
                {interests.map(interest => (
                  <option key={interest} value={interest}>{interest}</option>
                ))}
              </select>
              {errors.interest && (
                <p className="text-sm text-red-600 mt-2">{errors.interest}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-brand-dark-grey mb-2">
                Budget Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full px-4 py-3 border border-brand-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition-colors duration-200"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map(budget => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark-grey mb-2">
                Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className="w-full px-4 py-3 border border-brand-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition-colors duration-200"
              >
                <option value="">When do you want to start?</option>
                {timelines.map(timeline => (
                  <option key={timeline} value={timeline}>{timeline}</option>
                ))}
              </select>
            </div>
          </div>

          <Textarea
            label="Message *"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            error={errors.message}
            placeholder="Tell us about your project, challenges, or goals..."
            rows={4}
          />

          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <LoadingSpinner size="sm" />
                <span className="ml-2">Sending Message...</span>
              </>
            ) : (
              'Send Message'
            )}
          </Button>

          <p className="text-xs text-brand-medium-grey">
            * Required fields. By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactForm
export { ContactForm }