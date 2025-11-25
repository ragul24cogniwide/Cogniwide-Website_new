'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import Section from '@/components/layout/Section'

const ProductTechnologyStack = () => {
  const techCategories = [
    {
      category: 'AI & Machine Learning',
      technologies: ['OpenAI GPT-4', 'Anthropic Claude', 'TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain']
    },
    {
      category: 'Agentic AI Frameworks',
      technologies: ['AutoGen', 'CrewAI', 'Semantic Kernel', 'LangGraph', 'Multi-Agent Systems', 'Agent Orchestration']
    },
    {
      category: 'Cloud & Container Platforms',
      technologies: ['Kubernetes', 'Docker', 'Helm', 'AWS EKS', 'Azure AKS', 'Google GKE']
    },
    {
      category: 'Data & Analytics',
      technologies: ['Apache Spark', 'Kafka', 'Snowflake', 'Databricks', 'ClickHouse', 'Elasticsearch']
    },
    {
      category: 'Development & Integration',
      technologies: ['React', 'Next.js', 'Python', 'Node.js', 'TypeScript', 'GraphQL']
    },
    {
      category: 'Monitoring & Observability',
      technologies: ['Prometheus', 'Grafana', 'Datadog', 'New Relic', 'OpenTelemetry', 'Jaeger']
    }
  ]

  const developmentPhases = [
    'Discovery & Planning',
    'Architecture & Design', 
    'Development & Testing',
    'Deployment & Monitoring'
  ]

  return (
    <Section background="light-grey" padding="lg">
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-brand-dark-grey mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          AI-Powered Product Technology Stack
        </motion.h2>
        <motion.p
          className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Built on cutting-edge technologies and frameworks to deliver enterprise-grade AI solutions with unmatched performance and reliability
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="h-full hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-brand-dark-grey mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-brand-yellow/10 text-sm font-medium text-brand-dark-grey rounded-full border border-brand-yellow/20 hover:bg-brand-yellow/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Development Process */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card padding="lg" className="bg-gradient-to-r from-brand-white to-brand-yellow/5">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-dark-grey mb-4">
              AI-Enhanced Product Development Process
            </h3>
            <p className="text-brand-medium-grey max-w-2xl mx-auto">
              Our systematic approach ensures rapid delivery of high-quality AI products with continuous optimization and intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentPhases.map((phase, index) => (
              <div key={phase} className="text-center">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark-grey font-bold text-lg mb-4 mx-auto">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-brand-dark-grey mb-2">{phase}</h4>
                <p className="text-sm text-brand-medium-grey">
                  {index === 0 && 'AI-powered requirements analysis and product strategy planning'}
                  {index === 1 && 'Intelligent system architecture with scalable AI integration design'}
                  {index === 2 && 'AI-assisted development with automated testing and quality assurance'}
                  {index === 3 && 'Automated deployment with AI-powered monitoring and optimization'}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}

export default ProductTechnologyStack