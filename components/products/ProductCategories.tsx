'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'
import { 
  CogIcon, 
  ChartBarIcon, 
  CloudIcon, 
  BeakerIcon, 
  CommandLineIcon,
  AcademicCapIcon,
  WrenchIcon 
} from '@heroicons/react/24/outline'

const ProductCategories = () => {
  const products = [
    {
      title: 'CogniAgent',
      description: 'Enterprise-grade agentic AI orchestration platform that enables intelligent automation and decision-making across your organization.',
      icon: CogIcon,
      capabilities: ['Multi-agent orchestration', 'Intelligent workflow automation', 'Enterprise integration', 'Real-time decision making'],
      industries: ['Banking', 'Healthcare', 'Manufacturing', 'Retail'],
      href: '/products/cogniagent'
    },
    {
      title: 'CogniKube',
      description: 'AI-powered Kubernetes management platform that simplifies container orchestration with intelligent automation and monitoring.',
      icon: CloudIcon,
      capabilities: ['Automated cluster management', 'Intelligent scaling', 'Security automation', 'Performance optimization'],
      industries: ['DevOps', 'Cloud Native', 'Enterprise IT', 'SaaS'],
      href: '/products/cognikube'
    },
    {
      title: 'CogniInsights',
      description: 'Comprehensive analytics and business intelligence platform with AI-powered insights and automated reporting capabilities.',
      icon: ChartBarIcon,
      capabilities: ['PortBI migration', 'CogniCraft MDM', 'Real-time analytics', 'Automated reporting'],
      industries: ['Healthcare', 'Insurance', 'Manufacturing', 'Financial Services'],
      href: '/products/cogniinsights'
    },
    {
      title: 'CogniNova',
      description: 'AI-Powered School ERP and LMS with AI Coach Suite that enhances students\' critical thinking through knowledge graph-based learning.',
      icon: AcademicCapIcon,
      capabilities: ['AI Coach Suite', 'Knowledge graph learning', 'Critical thinking enhancement', 'School ERP integration'],
      industries: ['Education', 'K-12 Schools', 'Higher Education', 'Training Centers'],
      href: '/products/cogninova'
    },
    {
      title: 'CogniForge',
      description: 'Comprehensive ERP solution integrating all business processes to optimize production, streamline operations, and drive growth in manufacturing.',
      icon: WrenchIcon,
      capabilities: ['Production Planning & MRP', 'Shop Floor Control (MES)', 'Quality Management', 'Supply Chain Management'],
      industries: ['Manufacturing', 'Discrete Manufacturing', 'Process Manufacturing', 'Make-to-Order'],
      href: '/products/cogniforge'
    }
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
          AI-Powered Enterprise Products
        </motion.h2>
        <motion.p
          className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Comprehensive suite of AI products designed to transform your enterprise with intelligent automation and advanced analytics
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center">
                  <product.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark-grey">
                  {product.title}
                </h3>
              </div>

              <p className="text-brand-medium-grey mb-6 leading-relaxed flex-grow">
                {product.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-brand-dark-grey mb-3 uppercase tracking-wide">
                  Key Capabilities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="px-2 py-1 bg-brand-white text-xs font-medium text-brand-dark-grey rounded border border-brand-light-grey"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-brand-dark-grey mb-2 uppercase tracking-wide">
                  Industries
                </h4>
                <p className="text-sm text-brand-medium-grey">
                  {product.industries.join(', ')}
                </p>
              </div>

              <a href={product.href}>
                <Button variant="outline" className="self-start mt-auto">
                  Learn More →
                </Button>
              </a>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default ProductCategories