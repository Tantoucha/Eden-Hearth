'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FormData {
  name: string
  email: string
  phone: string
  postcode: string
  service: string
  message: string
  consent: boolean
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: 'Kitchens',
    message: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{type: 'success' | 'error', message: string} | null>(null)
  const [submitTime] = useState(Date.now())

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Minimum submit time (honeypot-style protection)
    const timeSinceLoad = Date.now() - submitTime
    if (timeSinceLoad < 2000) {
      setSubmitResult({ type: 'error', message: 'Please slow down and try again.' })
      return
    }
    
    if (!formData.consent) {
      setSubmitResult({ type: 'error', message: 'Please accept our privacy policy to continue.' })
      return
    }
    
    setIsSubmitting(true)
    setSubmitResult(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (result.ok) {
        setSubmitResult({ type: 'success', message: result.message })
        setFormData({
          name: '',
          email: '',
          phone: '',
          postcode: '',
          service: 'Kitchens',
          message: '',
          consent: false
        })
      } else {
        setSubmitResult({ type: 'error', message: result.error })
      }
    } catch (error) {
      setSubmitResult({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Hidden honeypot field */}
      <input type="text" name="website" className="hidden" tabIndex={-1} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            placeholder="01234 567890"
          />
        </div>
        
        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-ink mb-2">
            Postcode
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            placeholder="M20 2AA"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-ink mb-2">
          Service Interest *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
        >
          <option value="Kitchens">Kitchen Installation</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Both">Both Kitchens & Landscaping</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
          placeholder="Tell us about your project..."
        />
      </div>
      
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mt-1 h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
        />
        <label htmlFor="consent" className="text-sm text-gray-600">
          I consent to Eden & Hearth storing my details to respond to this enquiry. 
          View our{' '}
          <Link href="/privacy" className="text-accent hover:underline">
            privacy policy
          </Link>
          .
        </label>
      </div>
      
      {/* Results */}
      {submitResult && (
        <div
          className={`p-4 rounded-lg ${
            submitResult.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
          role="alert"
          aria-live="polite"
        >
          {submitResult.message}
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting || !formData.consent}
        className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  )
}
