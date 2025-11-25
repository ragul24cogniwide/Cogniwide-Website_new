'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import Section from '@/components/layout/Section'
import { CpuIcon, LightningIcon, UsersIcon, ChartBarIcon, ShieldIcon, CogIcon } from '@/components/ui/icons'

interface ArchitectureDiagramProps {
  productName: string
}

const ArchitectureDiagram = ({ productName }: ArchitectureDiagramProps) => {
  const performanceMetrics = [
    { label: 'Process Efficiency', value: '85%', increase: '+65%', color: 'text-blue-600' },
    { label: 'Cost Reduction', value: '70%', increase: '+70%', color: 'text-green-600' },
    { label: 'Decision Speed', value: '90%', increase: '+90%', color: 'text-purple-600' },
    { label: 'Accuracy Rate', value: '99.5%', increase: '+25%', color: 'text-orange-600' }
  ]

  const architectureComponents = [
    { name: 'AI Agent Orchestrator', icon: CpuIcon, color: 'from-blue-500 to-cyan-500' },
    { name: 'Decision Engine', icon: LightningIcon, color: 'from-purple-500 to-pink-500' },
    { name: 'Process Automation', icon: CogIcon, color: 'from-green-500 to-teal-500' },
    { name: 'Analytics & Insights', icon: ChartBarIcon, color: 'from-orange-500 to-red-500' },
    { name: 'Security Layer', icon: ShieldIcon, color: 'from-indigo-500 to-purple-500' },
    { name: 'User Interface', icon: UsersIcon, color: 'from-yellow-500 to-orange-500' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-brand-dark-grey mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {productName} Architecture & Performance
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-brand-medium-grey max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover how our intelligent agent architecture delivers measurable business results
          </motion.p>
        </div>

        {/* Architecture Components */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureComponents.map((component, index) => {
              const IconComponent = component.icon
              return (
                <motion.div
                  key={component.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${component.color} flex items-center justify-center text-white mx-auto mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark-grey mb-2">{component.name}</h3>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark-grey mb-4">
              Proven Performance Results
            </h3>
            <p className="text-base sm:text-lg text-brand-medium-grey">
              Real metrics from enterprise implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-base font-medium text-brand-dark-grey mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {metric.increase} improvement
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 text-sm text-brand-medium-grey bg-gray-100 px-4 py-2 rounded-full shadow-lg">
              <ShieldIcon className="w-4 h-4" />
              <span>Enterprise-grade security and compliance included</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ArchitectureDiagram
export { ArchitectureDiagram }