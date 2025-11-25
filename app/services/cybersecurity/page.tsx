'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { 
  ShieldCheckIcon, 
  EyeIcon, 
  CogIcon, 
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  ServerIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const CybersecurityServicesPage = () => {
  const heroData = {
    title: "AI-Enhanced Cybersecurity Services",
    subtitle: "Protect your digital assets with AI-enhanced enterprise security solutions and compliance services featuring intelligent threat detection and automated response.",
    features: [
      "AI-enhanced security solutions",
      "Intelligent threat detection", 
      "Compliance automation",
      "Security orchestration",
      "24/7 monitoring & response"
    ]
  };

  const securityServices = [
    {
      title: "AI-Enhanced Threat Detection",
      description: "Advanced threat detection using machine learning algorithms to identify and respond to sophisticated cyber threats in real-time.",
      icon: EyeIcon,
      capabilities: [
        "ML-powered anomaly detection",
        "Behavioral analysis and profiling",
        "Advanced persistent threat (APT) detection",
        "Zero-day exploit identification"
      ],
      gradient: "from-red-500 to-pink-600"
    },
    {
      title: "Intelligent Security Orchestration",
      description: "Automate security operations with AI-driven orchestration, automated incident response, and intelligent threat hunting.",
      icon: CogIcon,
      capabilities: [
        "Automated incident response",
        "Security workflow orchestration",
        "Intelligent threat hunting",
        "Playbook automation and optimization"
      ],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Compliance Automation",
      description: "Streamline compliance management with automated monitoring, reporting, and remediation for regulatory frameworks.",
      icon: DocumentCheckIcon,
      capabilities: [
        "Automated compliance monitoring",
        "Real-time compliance reporting",
        "Policy enforcement automation",
        "Audit trail management"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Vulnerability Management",
      description: "Comprehensive vulnerability assessment and management with AI-powered risk prioritization and automated remediation.",
      icon: ExclamationTriangleIcon,
      capabilities: [
        "AI-powered vulnerability scanning",
        "Risk-based prioritization",
        "Automated patch management",
        "Continuous security assessment"
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Identity & Access Management",
      description: "Advanced IAM solutions with AI-powered access controls, behavioral authentication, and zero-trust architecture.",
      icon: LockClosedIcon,
      capabilities: [
        "Zero-trust architecture implementation",
        "Behavioral authentication",
        "Privileged access management",
        "Identity governance and administration"
      ],
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Cloud Security",
      description: "Comprehensive cloud security solutions with AI-powered monitoring, configuration management, and threat protection.",
      icon: ServerIcon,
      capabilities: [
        "Cloud security posture management",
        "Container and serverless security",
        "Multi-cloud security orchestration",
        "DevSecOps integration"
      ],
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2",
      description: "Service Organization Control 2 compliance for service providers",
      industries: ["SaaS", "Cloud Services", "Technology"]
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      industries: ["Enterprise", "Government", "Healthcare"]
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation for data privacy",
      industries: ["Global", "EU Operations", "Data Processing"]
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      industries: ["Healthcare", "Medical Devices", "Health Tech"]
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      industries: ["E-commerce", "Financial", "Retail"]
    },
    {
      name: "FedRAMP",
      description: "Federal Risk and Authorization Management Program",
      industries: ["Government", "Public Sector", "Defense"]
    }
  ];

  const securityTechnologies = [
    {
      category: "AI & ML Security",
      technologies: ["TensorFlow Security", "PyTorch Security", "AI Model Protection", "ML Pipeline Security"]
    },
    {
      category: "Threat Intelligence",
      technologies: ["MITRE ATT&CK", "Threat Hunting", "IOC Analysis", "Threat Modeling"]
    },
    {
      category: "Security Tools",
      technologies: ["SIEM/SOAR", "EDR/XDR", "CASB", "Zero Trust Platforms"]
    },
    {
      category: "Cloud Security",
      technologies: ["CSPM", "CWPP", "Container Security", "Serverless Security"]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-pink-900 text-white py-20">
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
                Security Assessment
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Threat Analysis
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your enterprise with AI-enhanced security solutions that adapt and evolve with emerging threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
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
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
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

      {/* Compliance Frameworks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compliance & Regulatory Frameworks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help organizations achieve and maintain compliance across major regulatory frameworks and industry standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{framework.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{framework.description}</p>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Industries</h4>
                  <div className="flex flex-wrap gap-1">
                    {framework.industries.map((industry, industryIndex) => (
                      <span key={industryIndex} className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Security Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge security technologies and AI-powered tools to provide comprehensive protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityTechnologies.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{category.category}</h3>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="text-center p-2 bg-white rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Operations Center */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              24/7 Security Operations Center
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our AI-powered SOC provides round-the-clock monitoring, threat detection, and incident response
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Continuous Monitoring",
                description: "24/7 monitoring of your security infrastructure with AI-powered threat detection",
                icon: EyeIcon
              },
              {
                title: "Rapid Response",
                description: "Automated incident response with human expert escalation when needed",
                icon: ExclamationTriangleIcon
              },
              {
                title: "Threat Intelligence",
                description: "Real-time threat intelligence integration and proactive threat hunting",
                icon: GlobeAltIcon
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Secure Your Enterprise Today
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Don't wait for a security incident. Let our cybersecurity experts assess your current security posture and implement comprehensive protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Free Security Assessment
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Download Security Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CybersecurityServicesPage;