'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'
import CogniForgeDashboard from './CogniForgeDashboard'
import CogniNovaDashboard from './CogniNovaDashboard'
import CogniAgentDashboard from './CogniAgentDashboard'
import CogniKubeDashboard from './CogniKubeDashboard'
import CogniInsightsDashboard from './CogniInsightsDashboard'

interface ProductData {
  name: string
  tagline: string
  description: string
  icon: React.ReactNode
  color: string
  features: string[]
  benefits: string[]
  useCases: string[]
}

interface ProductHeroProps {
  title?: string
  subtitle?: string
  primaryCTA?: string
  secondaryCTA?: string
  backgroundPattern?: 'chat' | 'agents' | 'documents'
  product?: ProductData
}

const ProductHero: React.FC<ProductHeroProps> = ({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA, 
  backgroundPattern, 
  product 
}) => {
  const patternClasses = {
    chat: 'bg-gradient-to-br from-blue-50 to-indigo-100',
    agents: 'bg-gradient-to-br from-purple-50 to-pink-100',
    documents: 'bg-gradient-to-br from-green-50 to-emerald-100'
  }

  // If product data is provided, use the new enhanced layout
  if (product) {
    return (
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0 bg-yellow-400/5" 
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 215, 0, 0.3) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }} 
            />
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
                    {product.icon}
                  </div>
                </motion.div>
                
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                    {product.name}
                  </span>
                </motion.h1>

                <motion.h2
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold text-yellow-300 mb-6 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {product.tagline}
                </motion.h2>

                <motion.p
                  className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {product.description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-300 hover:to-yellow-400 shadow-lg hover:shadow-xl shadow-yellow-500/25"
                  >
                    Schedule Demo
                  </Button>
                </motion.div>
              </div>

              {/* Right Visual - Product Specific Dashboard */}
              {product.name === 'CogniForge' && <CogniForgeDashboard />}
              {product.name === 'CogniNova' && <CogniNovaDashboard />}
              {product.name === 'CogniAgent' && <CogniAgentDashboard />}
              {product.name === 'CogniKube' && <CogniKubeDashboard />}
              {product.name === 'CogniInsights' && <CogniInsightsDashboard />}
              {product.name !== 'CogniForge' && product.name !== 'CogniNova' && product.name !== 'CogniAgent' && product.name !== 'CogniKube' && product.name !== 'CogniInsights' && (
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="relative bg-gray-800/90 rounded-2xl shadow-2xl p-8 border border-yellow-400/20">
                    {/* Generic Dashboard for other products */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center text-black">
                            {product.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-white">{product.name} Dashboard</div>
                            <div className="text-sm text-gray-300">Real-time monitoring</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-yellow-400 font-medium">Active</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-yellow-400/10 rounded-lg p-4 text-center border border-yellow-400/20">
                          <div className="text-2xl font-bold text-yellow-400">24</div>
                          <div className="text-xs text-yellow-300">Active</div>
                        </div>
                        <div className="bg-yellow-400/10 rounded-lg p-4 text-center border border-yellow-400/20">
                          <div className="text-2xl font-bold text-yellow-400">95%</div>
                          <div className="text-xs text-yellow-300">Efficiency</div>
                        </div>
                        <div className="bg-yellow-400/10 rounded-lg p-4 text-center border border-yellow-400/20">
                          <div className="text-2xl font-bold text-yellow-400">1.2k</div>
                          <div className="text-xs text-yellow-300">Tasks/Hour</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg border border-yellow-400/10">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-black rounded-full"></div>
                            </div>
                            <span className="text-sm font-medium text-white">Primary Process</span>
                          </div>
                          <span className="text-xs text-yellow-400 font-medium">Running</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg border border-yellow-400/10">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-black rounded-full"></div>
                            </div>
                            <span className="text-sm font-medium text-white">Secondary Process</span>
                          </div>
                          <span className="text-xs text-yellow-400 font-medium">Processing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-300 rounded-full animate-pulse"></div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful capabilities designed to transform your operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.slice(0, 6).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 text-yellow-600">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Advanced capabilities to enhance your workflow and productivity.
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 mt-16 border border-yellow-200 shadow-lg"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Measurable Business Impact
                </h3>
                <p className="text-gray-600 text-sm">
                  Real results from organizations using our solutions
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="text-center p-4 bg-white rounded-xl shadow-sm border border-yellow-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-2xl font-bold text-yellow-600 mb-1">
                      {benefit}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {index === 0 && 'Improvement'}
                      {index === 1 && 'Efficiency Gain'}
                      {index === 2 && 'Speed Increase'}
                      {index === 3 && 'Growth'}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  // Original layout for backward compatibility
  return (
    <Section 
      background="white" 
      padding="xl" 
      className={`${patternClasses[backgroundPattern || 'chat']} relative overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {(backgroundPattern || 'chat') === 'chat' && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
        )}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark-grey mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-brand-medium-grey mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button variant="primary" size="lg">
            {primaryCTA}
          </Button>
          <Button variant="secondary" size="lg">
            {secondaryCTA}
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}

export default ProductHero
export { ProductHero }