'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  CogIcon, 
  ShieldCheckIcon,
  CloudIcon,
  BeakerIcon,
  RocketLaunchIcon,
  CubeTransparentIcon
} from '@heroicons/react/24/outline';

const DataEngineeringServicesPage = () => {
  const heroData = {
    title: "AI-Powered Data Engineering Services",
    subtitle: "Transform raw data into actionable business intelligence with AI-powered data pipeline and analytics infrastructure services that drive informed decision-making.",
    features: [
      "AI-powered data pipelines",
      "Real-time analytics infrastructure", 
      "ML infrastructure & MLOps",
      "Data governance & quality",
      "CogniInsights integration"
    ]
  };

  const serviceOfferings = [
    {
      title: "AI-Powered Data Pipelines",
      description: "Build intelligent data pipelines that automatically adapt, optimize, and scale based on data patterns and business requirements.",
      icon: CpuChipIcon,
      capabilities: [
        "Automated data ingestion and processing",
        "Intelligent data transformation",
        "Real-time stream processing",
        "Self-healing pipeline architecture"
      ],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Real-Time Analytics Infrastructure",
      description: "Design and implement high-performance analytics infrastructure for real-time insights and decision-making at enterprise scale.",
      icon: ChartBarIcon,
      capabilities: [
        "Real-time data streaming",
        "High-performance analytics engines",
        "Interactive dashboards and visualizations",
        "Scalable data warehouse solutions"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "ML Infrastructure & MLOps",
      description: "Comprehensive machine learning infrastructure and MLOps practices for seamless model development, deployment, and monitoring.",
      icon: CogIcon,
      capabilities: [
        "ML model deployment pipelines",
        "Automated model training and retraining",
        "Model performance monitoring",
        "Feature store management"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Data Governance & Quality",
      description: "Implement robust data governance frameworks with AI-powered quality monitoring and compliance management.",
      icon: ShieldCheckIcon,
      capabilities: [
        "Data quality monitoring and validation",
        "Automated compliance reporting",
        "Data lineage and cataloging",
        "Privacy and security controls"
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Cloud Data Platforms",
      description: "Design and deploy scalable cloud-native data platforms optimized for performance, cost, and reliability.",
      icon: CloudIcon,
      capabilities: [
        "Multi-cloud data architecture",
        "Serverless data processing",
        "Auto-scaling infrastructure",
        "Cost optimization strategies"
      ],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Advanced Analytics & AI",
      description: "Implement advanced analytics solutions including predictive modeling, AI/ML algorithms, and business intelligence.",
      icon: BeakerIcon,
      capabilities: [
        "Predictive analytics models",
        "AI/ML algorithm implementation",
        "Business intelligence solutions",
        "Custom analytics applications"
      ],
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const technologyStack = [
    {
      category: "Data Processing",
      technologies: ["Apache Spark", "Apache Kafka", "Apache Airflow", "dbt", "Apache Beam"]
    },
    {
      category: "Cloud Platforms",
      technologies: ["AWS", "Azure", "Google Cloud", "Snowflake", "Databricks"]
    },
    {
      category: "Databases & Storage",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "ClickHouse"]
    },
    {
      category: "ML & AI Tools",
      technologies: ["TensorFlow", "PyTorch", "MLflow", "Kubeflow", "Weights & Biases"]
    }
  ];

  const cogniInsightsIntegration = {
    title: "CogniInsights Integration",
    description: "Seamlessly integrate with our analytics platform for one-click BI migration and comprehensive data management.",
    features: [
      {
        title: "PortBI Migration",
        description: "Enable seamless migration between BI tools with automated report and dashboard conversion."
      },
      {
        title: "CogniCraft MDM",
        description: "Implement master data management with intelligent data governance and quality controls."
      },
      {
        title: "Unified Analytics",
        description: "Create unified analytics platforms that work across multiple BI tools and data sources."
      },
      {
        title: "Data Governance",
        description: "Automated data governance with compliance monitoring and quality assurance."
      }
    ]
  };

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
                Start Data Project
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Data Assessment
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
              Comprehensive Data Engineering Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From data strategy to implementation, we provide end-to-end data engineering services powered by AI and modern technologies
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

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Modern Data Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and platforms to build robust, scalable data solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyStack.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{category.category}</h3>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="text-center p-2 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-sm font-medium text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CogniInsights Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {cogniInsightsIntegration.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {cogniInsightsIntegration.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cogniInsightsIntegration.features.map((feature, index) => (
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
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Explore CogniInsights
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
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let our data engineering experts design and implement a comprehensive data strategy that transforms your business intelligence capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Schedule Data Consultation
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Download Data Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DataEngineeringServicesPage;