'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { 
  CloudIcon, 
  CogIcon, 
  ServerIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const CloudDevOpsServicesPage = () => {
  const heroData = {
    title: "Cloud & DevOps Services",
    subtitle: "Comprehensive cloud consulting, engineering, migration, and managed services with AI-powered optimization and automation for modern enterprises.",
    features: [
      "Cloud consulting & strategy",
      "Cloud engineering & migration", 
      "DevOps automation & optimization",
      "Managed cloud services",
      "CogniOps solution integration"
    ]
  };

  const serviceCategories = [
    {
      title: "Cloud Consulting & Strategy",
      description: "Strategic cloud planning and architecture design to optimize your cloud journey with AI-powered insights and best practices.",
      icon: GlobeAltIcon,
      services: [
        "Cloud readiness assessment",
        "Multi-cloud strategy development",
        "Cost optimization planning",
        "Security and compliance strategy"
      ],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Cloud Engineering & Migration",
      description: "End-to-end cloud engineering services including architecture design, migration planning, and implementation with zero downtime.",
      icon: CloudIcon,
      services: [
        "Cloud architecture design",
        "Application modernization",
        "Data migration services",
        "Hybrid cloud implementation"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "DevOps Automation & Optimization",
      description: "Implement intelligent DevOps practices with automated CI/CD pipelines, infrastructure as code, and continuous monitoring.",
      icon: CogIcon,
      services: [
        "CI/CD pipeline automation",
        "Infrastructure as Code (IaC)",
        "Container orchestration",
        "Monitoring and observability"
      ],
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Managed Cloud Services",
      description: "24/7 managed services for your cloud infrastructure with proactive monitoring, maintenance, and optimization.",
      icon: ServerIcon,
      services: [
        "24/7 infrastructure monitoring",
        "Automated scaling and optimization",
        "Security management",
        "Performance tuning"
      ],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const cloudPlatforms = [
    {
      name: "Amazon Web Services",
      description: "Comprehensive AWS services including EC2, Lambda, EKS, and more",
      capabilities: ["Compute & Storage", "Serverless", "Kubernetes", "AI/ML Services"]
    },
    {
      name: "Microsoft Azure",
      description: "Full Azure ecosystem including App Services, AKS, and Azure AI",
      capabilities: ["App Services", "Container Services", "AI Platform", "DevOps Tools"]
    },
    {
      name: "Google Cloud Platform",
      description: "GCP services including Compute Engine, GKE, and Vertex AI",
      capabilities: ["Compute Engine", "Kubernetes Engine", "AI/ML Platform", "Data Analytics"]
    },
    {
      name: "Multi-Cloud & Hybrid",
      description: "Cross-platform solutions and hybrid cloud architectures",
      capabilities: ["Cross-platform", "Hybrid Solutions", "Edge Computing", "Disaster Recovery"]
    }
  ];

  const cogniOpsIntegration = {
    title: "CogniOps Solution Integration",
    description: "Seamlessly integrate with our AI-powered Cloud & DevOps solution for automated pipeline creation and cloud migration.",
    features: [
      {
        title: "Automated Pipeline Creation",
        description: "Create and deploy DevOps pipelines seamlessly with Helm charts and intelligent automation."
      },
      {
        title: "Cloud-to-Cloud Migration",
        description: "Migrate from any cloud platform with existing services using AI-powered migration tools."
      },
      {
        title: "Infrastructure Optimization",
        description: "AI-driven infrastructure optimization and cost management across all cloud platforms."
      },
      {
        title: "Intelligent Monitoring",
        description: "Advanced monitoring and alerting with predictive analytics and automated remediation."
      }
    ]
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white py-20">
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
                Start Cloud Journey
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Cloud Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Cloud & DevOps Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end cloud and DevOps services powered by AI automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                    <category.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide expert services across all major cloud platforms with deep technical expertise and certified professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{platform.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                <div className="space-y-2">
                  {platform.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {capability}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CogniOps Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {cogniOpsIntegration.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {cogniOpsIntegration.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cogniOpsIntegration.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Explore CogniOps Solution
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your Cloud Journey?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let our cloud and DevOps experts design and implement a comprehensive solution that transforms your infrastructure and operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Schedule Cloud Assessment
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Download Cloud Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CloudDevOpsServicesPage;