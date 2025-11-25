'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'

const ServicesHero = () => {
  return (
    <Section background="white" padding="xl" className="bg-gradient-to-br from-brand-light-grey to-brand-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark-grey mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Enterprise Digital Transformation Services
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-brand-medium-grey mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Accelerate your digital transformation with our comprehensive suite of enterprise services. 
          From product engineering to cybersecurity, we deliver end-to-end solutions that drive innovation and growth.
        </motion.p>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-brand-yellow/10 rounded-full">
            <span className="text-brand-dark-grey font-semibold">
              Trusted by 500+ enterprises across 6 industries
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="primary" size="lg">
            Explore Services
          </Button>
          <Button variant="secondary" size="lg">
            Schedule Consultation
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}

export default ServicesHero