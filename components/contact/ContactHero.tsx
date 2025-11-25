'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, ClockIcon, UserIcon, CpuIcon, TargetIcon } from '@/components/ui/icons'

const ContactHero = () => {
  const EmailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Schedule a Call',
      description: 'Book a consultation with our AI experts',
      action: 'Book Now'
    },
    {
      icon: EmailIcon,
      title: 'Send a Message',
      description: 'Get detailed information about our solutions',
      action: 'Contact Us'
    },
    {
      icon: CpuIcon,
      title: 'Request Demo',
      description: 'See our AI solutions in action',
      action: 'Watch Demo'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-brand-dark-grey via-gray-900 to-brand-medium-grey text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-40 h-40 bg-brand-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 bg-brand-yellow/20 rounded-full text-brand-yellow font-semibold text-sm mb-6"
          >
          Let's Connect
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Ready to Transform
            <br />
            <span className="text-brand-yellow">Your Business?</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how our AI solutions can accelerate your digital transformation journey. 
            Our experts are ready to help you unlock the power of intelligent automation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button className="px-8 py-4 bg-brand-yellow text-brand-dark-grey font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-dark-grey transition-all duration-300">
              Schedule Consultation
            </button>
          </motion.div>
        </div>
        
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark-grey mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <method.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{method.title}</h3>
              <p className="text-gray-300 mb-4">{method.description}</p>
              <div className="text-brand-yellow font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                {method.action} →
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="p-6 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center justify-center mb-2">
              <ClockIcon className="w-6 h-6 text-brand-yellow mr-2" />
              <div className="text-3xl font-bold text-brand-yellow">24h</div>
            </div>
            <div className="text-gray-300">Response Time</div>
          </div>
          <div className="p-6 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center justify-center mb-2">
              <UserIcon className="w-6 h-6 text-brand-yellow mr-2" />
              <div className="text-3xl font-bold text-brand-yellow">15+</div>
            </div>
            <div className="text-gray-300">Enterprise Clients</div>
          </div>
          <div className="p-6 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center justify-center mb-2">
              <TargetIcon className="w-6 h-6 text-brand-yellow mr-2" />
              <div className="text-3xl font-bold text-brand-yellow">99%</div>
            </div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="p-6 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center justify-center mb-2">
              <CpuIcon className="w-6 h-6 text-brand-yellow mr-2" />
              <div className="text-3xl font-bold text-brand-yellow">50+</div>
            </div>
            <div className="text-gray-300">AI Solutions Deployed</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero