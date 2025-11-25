'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { 
  CodeBracketIcon, 
  BeakerIcon, 
  CogIcon, 
  ChartBarIcon,
  RocketLaunchIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const AIApplicationDevelopmentPage = () => {
  const heroData = {
    title: "AI-Powered Application Development & Testing",
    subtitle: "Transform your development lifecycle with AI-enhanced methodologies and intelligent testing frameworks that accelerate delivery while improving quality.",
    features: [
      "AI-enhanced development methodologies",
      "Intelligent testing automation",
      "Quality assurance with AI-driven insights",
      "CogniVibe and CogniTest integration",
      "Accelerated delivery pipelines"
    ]
  };

  const serviceOfferings = [
    {
      title: "AI-Enhanced Development",
      description: "Leverage AI to accelerate coding, automate repetitive tasks, and improve code quality through intelligent assistance and automated code generation.",
      icon: CodeBracketIcon,
      capabilities: [
        "AI-assisted code generation and completion",
        "Automated code review and optimization",
        "Intelligent refactoring and modernization",
        "Smart debugging and error resolution"
      ],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Intelligent Testing Frameworks",
      description: "Implement comprehensive testing strategies powered by AI for functional, non-functional, and visual testing with automated test generation.",
      icon: BeakerIcon,
      capabilities: [
        "AI-powered test case generation",
        "Automated regression testing",
        "Visual testing with CogniPixel",
        "Performance and load testing automation"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Quality Assurance with AI",
      description: "Ensure superior software quality through AI-driven insights, predictive analytics, and automated quality gates throughout the development process.",
      icon: ShieldCheckIcon,
      capabilities: [
        "Predictive quality analytics",
        "Automated quality gates",
        "Risk assessment and mitigation",
        "Continuous quality monitoring"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "DevOps Integration",
      description: "Seamlessly integrate AI-powered development and testing into your DevOps pipelines for continuous delivery and deployment automation.",
      icon: CogIcon,
      capabilities: [
        "CI/CD pipeline optimization",
        "Automated deployment strategies",
        "Infrastructure as Code integration",
        "Monitoring and observability"
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Performance Optimization",
      description: "Optimize application performance using AI-driven analysis, automated profiling, and intelligent resource allocation strategies.",
      icon: ChartBarIcon,
      capabilities: [
        "AI-powered performance analysis",
        "Automated optimization recommendations",
        "Resource usage optimization",
        "Scalability planning and testing"
      ],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Rapid Prototyping & MVP",
      description: "Accelerate time-to-market with AI-assisted rapid prototyping, MVP development, and iterative improvement cycles.",
      icon: RocketLaunchIcon,
      capabilities: [
        "AI-assisted rapid prototyping",
        "MVP development acceleration",
        "User feedback integration",
        "Iterative improvement cycles"
      ],
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const integrationPoints = [
    {
      solution: "CogniVibe Integration",
      description: "Seamlessly integrate with our AI-powered SDLC framework to unify your entire software development lifecycle.",
      benefits: ["Workflow automation", "Friction elimination", "Accelerated delivery", "Quality improvement"]
    },
    {
      solution: "CogniTest Integration", 
      description: "Leverage our comprehensive AI-powered testing solution for complete test automation and quality assurance.",
      benefits: ["Test automation", "Data generation", "Visual validation", "Quality assurance"]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
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
                Start Your Project
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered development and testing services transform how you build, test, and deploy applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOfferings.map((service, index) => (
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

      {/* Integration Points */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Solution Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our development services integrate seamlessly with our AI-powered solutions for comprehensive transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationPoints.map((integration, index) => (
              <motion.div
                key={integration.solution}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{integration.solution}</h3>
                <p className="text-gray-600 mb-6">{integration.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {integration.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Development Process?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our AI-powered development and testing experts accelerate your software delivery while ensuring superior quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Schedule Consultation
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Download Service Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AIApplicationDevelopmentPage;