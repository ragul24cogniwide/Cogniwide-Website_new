'use client'

import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
      action: 'tel:+15551234567'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: 'hello@cogniwide.com',
      description: '24-hour response time',
      action: 'mailto:hello@cogniwide.com'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      details: 'Chat with our AI assistant',
      description: 'Available 24/7',
      action: '#'
    },
    {
      icon: CalendarDaysIcon,
      title: 'Schedule Meeting',
      details: 'Book a consultation',
      description: '30-minute strategy session',
      action: '#'
    }
  ]

  return (
    <div className="bg-brand-dark-grey text-brand-white p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-8">
          Get in Touch
        </h2>

        {/* Contact Methods */}
        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.action}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-brand-medium-grey/10 transition-colors duration-200 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center group-hover:bg-brand-yellow/20 transition-colors">
                <method.icon className="w-6 h-6 text-brand-yellow" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-white mb-1">
                  {method.title}
                </h3>
                <p className="text-brand-yellow font-medium mb-1">
                  {method.details}
                </p>
                <p className="text-sm text-brand-light-grey">
                  {method.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          className="mt-12 pt-8 border-t border-brand-medium-grey"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-brand-light-grey text-sm mb-4">
              Join 500+ enterprises already transforming with AI
            </p>
            <div className="flex justify-center space-x-8 text-xs">
              <div>
                <div className="text-2xl font-bold text-brand-yellow">24h</div>
                <div className="text-brand-light-grey">Avg Response</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-yellow">99%</div>
                <div className="text-brand-light-grey">Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-yellow">15+</div>
                <div className="text-brand-light-grey">Clients</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactInfo