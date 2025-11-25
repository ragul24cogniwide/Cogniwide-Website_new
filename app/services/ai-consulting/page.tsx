'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { 
  CogIcon, 
  LightBulbIcon, 
  ChartBarIcon, 
  ShieldCheckIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  DocumentTextIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AIConsultingPage = () => {
  const heroData = {
    title: "AI Consulting & Agentic AI Implementation",
    subtitle: "Transform your enterprise with market-leading AI strategy consulting and agentic AI implementation services that drive intelligent automation and business transformation.",
    features: [
      "AI strategy development",
      "Agentic AI architecture design", 
      "Enterprise AI transformation",
      "AI governance frameworks",
      "CogniAgent integration"
    ]
  };

  const consultingServices = [
    {
      title: "AI Strategy & Roadmap Development",
      description: "Comprehensive AI strategy development with clear roadmaps, ROI projections, and implementation timelines tailored to your business objectives.",
      icon: LightBulbIcon,
      capabilities: [
        "AI maturity assessment",
        "Strategic roadmap development",
        "ROI analysis and business case",
        "Technology stack recommendations"
      ],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Agentic AI Architecture Design",
      description: "Design and implement sophisticated agentic AI systems that can autonomously perform complex tasks and make intelligent decisions.",
      icon: CogIcon,
      capabilities: [
        "Multi-agent system design",
        "Autonomous workflow orchestration",
        "Intelligent decision frameworks",
        "Agent communication protocols"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Enterprise AI Transformation",
      description: "End-to-end AI transformation services that modernize your operations, processes, and customer experiences with intelligent automation.",
      icon: RocketLaunchIcon,
      capabilities: [
        "Process automation design",
        "AI-powered workflow optimization",
        "Legacy system modernization",
        "Change management support"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "AI Governance & Ethics",
      description: "Establish robust AI governance frameworks ensuring ethical AI deployment, compliance, and responsible innovation practices.",
      icon: ShieldCheckIcon,
      capabilities: [
        "AI ethics framework development",
        "Compliance and regulatory guidance",
        "Risk assessment and mitigation",
        "AI audit and monitoring systems"
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "AI Performance Optimization",
      description: "Optimize your AI systems for maximum performance, efficiency, and business impact through advanced analytics and monitoring.",
      icon: ChartBarIcon,
      capabilities: [
        "Performance monitoring and analytics",
        "Model optimization and tuning",
        "Cost optimization strategies",
        "Scalability planning and implementation"
      ],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "AI Team Development",
      description: "Build internal AI capabilities through training, mentoring, and organizational development programs for sustainable AI adoption.",
      icon: UserGroupIcon,
      capabilities: [
        "AI skills assessment and training",
        "Team structure optimization",
        "Knowledge transfer programs",
        "Ongoing mentorship and support"
      ],
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const industryExpertise = [
    {
      industry: "Banking & Financial Services",
      applications: ["Risk Management", "Fraud Detection", "Customer Service", "Regulatory Compliance"],
      caseStudy: "Implemented agentic AI for automated loan processing, reducing approval time by 75%"
    },
    {
      industry: "Healthcare",
      applications: ["Clinical Decision Support", "Patient Care Optimization", "Drug Discovery", "Medical Imaging"],
      caseStudy: "Deployed AI agents for patient monitoring, improving care quality and reducing costs by 40%"
    },
    {
      industry: "Manufacturing",
      applications: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Production Planning"],
      caseStudy: "Orchestrated AI agents for smart manufacturing, increasing efficiency by 60%"
    },
    {
      industry: "Retail & E-commerce",
      applications: ["Personalization", "Inventory Management", "Price Optimization", "Customer Analytics"],
      caseStudy: "Implemented intelligent agents for dynamic pricing, boosting revenue by 25%"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {heroData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
              {heroData.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {heroData.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Schedule Strategy Session
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Download AI Readiness Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI consulting services that transform your business with intelligent automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific AI Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep domain expertise across industries with proven track record of successful AI implementations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryExpertise.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.industry}</h3>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    AI Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.applications.map((app, appIndex) => (
                      <span key={appIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Success Story
                  </h4>
                  <p className="text-gray-700 italic">"{industry.caseStudy}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CogniAgent Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              CogniAgent Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly integrate our consulting services with CogniAgent for enterprise-grade agentic AI orchestration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Planning",
                description: "Develop comprehensive agentic AI strategies aligned with your business objectives and CogniAgent capabilities.",
                icon: DocumentTextIcon
              },
              {
                title: "Architecture Design",
                description: "Design scalable multi-agent architectures using CogniAgent's orchestration platform for maximum efficiency.",
                icon: CogIcon
              },
              {
                title: "Implementation Support",
                description: "End-to-end implementation support ensuring successful deployment and adoption of CogniAgent solutions.",
                icon: RocketLaunchIcon
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Explore CogniAgent
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let our AI experts assess your current state and design a comprehensive transformation strategy that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Schedule Free Consultation
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Download AI Strategy Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIConsultingPage;