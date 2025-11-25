'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'

interface IndustryData {
  name: string
  tagline: string
  description: string
  icon: React.ReactNode
  color: string
  features: string[]
  benefits: string[]
  useCases: string[]
}

interface IndustriesHeroProps {
  title?: string
  subtitle?: string
  primaryCTA?: string
  secondaryCTA?: string
  backgroundPattern?: 'banking' | 'healthcare' | 'retail' | 'telecom' | 'insurance' | 'manufacturing'
  industry?: IndustryData
}

const IndustriesHero = ({ title, subtitle, primaryCTA, secondaryCTA, backgroundPattern, industry }: IndustriesHeroProps) => {
  const patternClasses = {
    banking: 'bg-gradient-to-br from-blue-50 to-indigo-100',
    healthcare: 'bg-gradient-to-br from-green-50 to-emerald-100',
    retail: 'bg-gradient-to-br from-purple-50 to-pink-100',
    telecom: 'bg-gradient-to-br from-orange-50 to-red-100',
    insurance: 'bg-gradient-to-br from-cyan-50 to-blue-100',
    logistics: 'bg-gradient-to-br from-yellow-50 to-amber-100',
  manufacturing: 'bg-gradient-to-br from-yellow-50 to-amber-100'
  }

  // If industry data is provided, use the enhanced layout
  if (industry) {
    return (
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-yellow-400/5" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }} />
          </div>
          
          {/* Yellow accent elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl animate-pulse [animation-delay:1s]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center lg:justify-start mb-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-2xl shadow-yellow-500/25">
                    {industry.icon}
                  </div>
                </motion.div>
                
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                    {industry.name}
                  </span>
                </motion.h1>

                <motion.h2
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold text-yellow-300 mb-6 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {industry.tagline}
                </motion.h2>

                <motion.p
                  className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {industry.description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black shadow-lg shadow-yellow-500/25">
                    {primaryCTA || 'Explore Solutions'}
                  </Button>
                  <Button variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                    {secondaryCTA || 'Schedule Consultation'}
                  </Button>
                </motion.div>
              </div>

              {/* Right Content - Features Grid */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="grid grid-cols-1 gap-4"
                >
                  {industry.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Default layout when no industry data is provided
  return (
    <section className={`py-20 ${backgroundPattern ? patternClasses[backgroundPattern] : 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {title || 'AI Solutions for Every Industry'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            {subtitle || 'From banking to healthcare, retail to manufacturing - our AI solutions are tailored to meet the unique challenges and opportunities of your industry.'}
          </motion.p>
          
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {primaryCTA && (
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black">
                  {primaryCTA}
                </Button>
              )}
              {secondaryCTA && (
                <Button variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                  {secondaryCTA}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default IndustriesHero