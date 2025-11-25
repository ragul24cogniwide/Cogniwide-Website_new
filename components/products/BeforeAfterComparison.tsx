'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import Section from '@/components/layout/Section'
import { ClockIcon, UserGroupIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { TrendingUpIcon } from '@/components/ui/icons'

interface BeforeAfterComparisonProps {
  before: {
    title: string
    points: string[]
  }
  after: {
    title: string
    points: string[]
  }
  productName?: string
}

const cogniKubeImpact = (
  <motion.div
    className="mt-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <div className="bg-gradient-to-r from-brand-dark-grey to-gray-800 rounded-2xl p-8 text-white shadow-2xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Transformation Impact
        </h3>
                  <p className="text-gray-300">
                    Real results from organizations leveraging CogniLoom for unified DevSecOps operations
                  </p>      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <div className="text-3xl sm:text-4xl font-bold text-brand-yellow mb-2">60%</div>
          <div className="text-sm text-gray-300">Faster Incident Resolution</div>
          <div className="text-xs text-green-400 mt-1">↓ Reduced mean time to recovery (MTTR) through AI-driven root cause analysis and auto-debugging.</div>
        </div>
        <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <div className="text-3xl sm:text-4xl font-bold text-brand-yellow mb-2">35%</div>
          <div className="text-sm text-gray-300">Cloud Cost Optimization</div>
          <div className="text-xs text-green-400 mt-1">↓ Lowered infrastructure spend through intelligent resource allocation and predictive scaling.</div>
        </div>
        <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <div className="text-3xl sm:text-4xl font-bold text-brand-yellow mb-2">40%</div>
          <div className="text-sm text-gray-300">Improved Deployment Efficiency</div>
          <div className="text-xs text-green-400 mt-1">↑ Accelerated release cycles with automated validation, drift prevention, and CI/CD insights.</div>
        </div>
        <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <div className="text-3xl sm:text-4xl font-bold text-brand-yellow mb-2">99.5%</div>
          <div className="text-sm text-gray-300">Service Uptime</div>
          <div className="text-xs text-green-400 mt-1">↑ Proactive monitoring and self-healing automation ensure high system availability.</div>
        </div>
      </div>

      <div className="mt-8 text-center">
         <p className="text-gray-300">
          Measured from reduced downtime, optimized cloud spend, and improved delivery speed.
          </p> 
      </div>
    </div>
  </motion.div>
);

const cogniAgentImpact = (
  <motion.div
    className="mt-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <div className="bg-gradient-to-r from-brand-dark-grey to-gray-800 rounded-2xl p-8 text-white shadow-2xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Transformation Impact
        </h3>
                  <p className="text-gray-300">
                    Real results from CogniAgent implementations
                  </p>      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <div className="text-3xl sm:text-4xl font-bold text-brand-yellow mb-2">95%</div>
          <div className="text-sm text-gray-300">Time Reduction</div>
          <div className="text-xs text-green-400 mt-1">↑ 95% faster processing</div>
        </div>
        <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <div className="text-3xl sm:text-4xl font-bold text-brand-yellow mb-2">84%</div>
          <div className="text-sm text-gray-300">Cost Savings</div>
          <div className="text-xs text-green-400 mt-1">↓ Significant reduction</div>
        </div>
        <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <div className="text-3xl sm:text-4xl font-bold text-brand-yellow mb-2">99.5%</div>
          <div className="text-sm text-gray-300">Accuracy Rate</div>
          <div className="text-xs text-green-400 mt-1">↑ 25% improvement</div>
        </div>
        <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <div className="text-3xl sm:text-4xl font-bold text-brand-yellow mb-2">24/7</div>
          <div className="text-sm text-gray-300">Availability</div>
          <div className="text-xs text-green-400 mt-1">↑ Continuous operation</div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-brand-yellow text-brand-dark-grey px-6 py-3 rounded-full font-semibold">
          <TrendingUpIcon className="w-5 h-5" />
          <span>Average ROI: 340% in first year</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const BeforeAfterComparison = ({ before, after, productName = 'CogniAgent' }: BeforeAfterComparisonProps) => {
  const beforeScenario = {
    title: before.title,
    subtitle: 'Traditional approach',
    color: 'border-orange-200 bg-orange-50',
    items: before.points.map((point, index) => ({
      icon: [ClockIcon, ExclamationTriangleIcon, UserGroupIcon, ClockIcon][index % 4],
      text: point,
      metric: `Challenge ${index + 1}`
    }))
  }

  const afterScenario = {
    title: after.title,
    subtitle: 'AI-powered solution',
    color: 'border-blue-200 bg-blue-50',
    items: after.points.map((point, index) => ({
      icon: [CheckCircleIcon, CheckCircleIcon, CheckCircleIcon, CheckCircleIcon][index % 4],
      text: point,
      metric: `Benefit ${index + 1}`
    }))
  }

  return (
    <Section background="white" padding="lg">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-brand-dark-grey mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            The Transformation Impact of {productName}
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-brand-medium-grey max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Unlock unparalleled efficiency and innovation. Witness the transformative power of our solutions in action.
          </motion.p>
        </div>

        {/* Modern Comparison Layout */}
        <div className="relative">
          {/* VS Badge */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-bold text-lg shadow-lg shadow-yellow-500/25">
              VS
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before - Traditional Approach */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-full border-2 border-gray-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ClockIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    Traditional Processes
                  </h3>
                  <p className="text-gray-600">Manual, time-consuming workflows</p>
                </div>

                <div className="space-y-4 mb-8">
                  {beforeScenario.items.map((item, index) => (
                    <motion.div
                      key={item.metric}
                      className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-800 font-medium text-sm">{item.text}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>


              </div>
            </motion.div>

            {/* After - CogniAgent */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 h-full border-2 border-yellow-200 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-400/10 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/25">
                      <CheckCircleIcon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                      With {productName}
                    </h3>
                    <p className="text-yellow-600">Intelligent, automated workflows</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {afterScenario.items.map((item, index) => (
                      <motion.div
                        key={item.metric}
                        className="flex items-center space-x-3 p-3 bg-white/70 backdrop-blur-sm rounded-lg border border-yellow-200/50"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-black" />
                        </div>
                        <div className="flex-1">
                          <div className="text-yellow-900 font-medium text-sm">{item.text}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>


                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Transformation Impact */}
        {productName === 'CogniKube' ? cogniKubeImpact : cogniAgentImpact}
      </div>
    </Section>
  )
}

export default BeforeAfterComparison
export { BeforeAfterComparison }