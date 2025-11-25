'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import { 
  BeakerIcon, 
  EyeIcon, 
  CogIcon, 
  ChartBarIcon,
  CheckCircleIcon,
  PhotoIcon,
  BoltIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  PresentationChartBarIcon
} from '@heroicons/react/24/outline';

const CogniTestPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-brand-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-yellow/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse [animation-delay:1s]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                className="inline-flex items-center bg-brand-yellow/20 text-brand-yellow px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <BeakerIcon className="w-4 h-4 mr-2" />
                AI-Powered Testing
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Cogni<span className="text-brand-yellow">Test</span>
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl font-medium text-brand-light-grey mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                AI-Powered Testing Automation Platform
              </motion.h2>

              <p className="text-lg text-brand-light-grey mb-8 max-w-xl leading-relaxed">
                Revolutionize your testing process with AI that understands your application. Generate intelligent tests, catch visual bugs, and ensure quality at every step.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button className="bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Central Hub */}
                <div className="bg-gradient-to-br from-brand-yellow to-yellow-400 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-brand-black/10 rounded-2xl p-6 backdrop-blur-sm">
                    <BeakerIcon className="w-16 h-16 text-brand-black mx-auto mb-4 animate-pulse" />
                    <h3 className="text-xl font-bold text-brand-black text-center mb-2">AI Test Engine</h3>
                    <p className="text-brand-black/80 text-sm text-center">Intelligent test automation</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -left-4 bg-blue-500 rounded-xl p-3 shadow-lg"
                >
                  <EyeIcon className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -right-4 bg-red-500 rounded-xl p-3 shadow-lg"
                >
                  <CheckCircleIcon className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -right-8 bg-green-500 rounded-xl p-3 shadow-lg"
                >
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="relative py-24 bg-brand-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FFD700 0%, transparent 50%), radial-gradient(circle at 75% 75%, #FFA500 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-white mb-6">
              Testing Excellence <span className="text-brand-yellow">Delivered</span>
            </h2>
            <p className="text-xl text-brand-light-grey max-w-3xl mx-auto leading-relaxed">
              Our AI-powered testing platform delivers measurable results across all testing dimensions
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                number: "99.7%",
                label: "Test Accuracy",
                description: "AI-powered precision",
icon: ChartBarIcon,
                gradient: "from-brand-yellow/20 to-yellow-500/20",
                border: "border-brand-yellow/30"
              },
              {
                number: "85%",
                label: "Faster Testing",
                description: "Reduced test cycles",
icon: BoltIcon,
                gradient: "from-brand-yellow/20 to-yellow-500/20",
                border: "border-brand-yellow/30"
              },
              {
                number: "50M+",
                label: "Tests Executed",
                description: "Across all platforms",
icon: BeakerIcon,
                gradient: "from-brand-yellow/20 to-yellow-500/20",
                border: "border-brand-yellow/30"
              },
              {
                number: "24/7",
                label: "Continuous Testing",
                description: "Always monitoring",
icon: ArrowPathIcon,
                gradient: "from-brand-yellow/20 to-yellow-500/20",
                border: "border-brand-yellow/30"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm border ${stat.border} rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group`}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <stat.icon className="w-12 h-12 text-brand-yellow" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-brand-light-grey mb-1">{stat.label}</div>
                <div className="text-sm text-brand-light-grey">{stat.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Success Stories Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-brand-dark-grey/50 backdrop-blur-sm border border-brand-yellow/20 rounded-3xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-brand-white mb-4">Trusted by Testing Teams Worldwide</h3>
            <p className="text-brand-light-grey mb-6 max-w-2xl mx-auto">
              From startups to enterprise, teams rely on CogniTest to deliver quality software faster
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <div className="text-brand-light-grey font-semibold">TechCorp</div>
              <div className="text-brand-light-grey font-semibold">InnovateLabs</div>
              <div className="text-brand-light-grey font-semibold">QualityFirst</div>
              <div className="text-brand-light-grey font-semibold">TestMasters</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-yellow text-brand-black rounded-full text-sm font-semibold mb-6">
              <BeakerIcon className="w-4 h-4 mr-2" />
              Smart Test Generation
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-brand-white mb-6">
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-500">Testing</span> Platform
            </h2>
            <p className="text-xl text-brand-light-grey max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered testing capabilities that transform how you ensure quality and accelerate development cycles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Functional Test Automation",
                description: "AI-generated functional tests that intelligently adapt to UI changes and provide comprehensive coverage across all user journeys.",
                icon: BeakerIcon,
                gradient: "from-brand-yellow to-yellow-500",
                bgGradient: "from-brand-dark-grey to-brand-dark-grey",
                iconBg: "bg-brand-yellow",
                iconColor: "text-brand-black",
                badge: "Core Feature"
              },
              {
                title: "CogniPixel Visual Testing",
                description: "Pixel-perfect visual regression testing with AI-powered false positive reduction that catches UI issues before production.",
                icon: PhotoIcon,
                gradient: "from-brand-yellow to-yellow-500",
                bgGradient: "from-brand-dark-grey to-brand-dark-grey",
                iconBg: "bg-brand-yellow",
                iconColor: "text-brand-black",
                badge: "Exclusive"
              },
              {
                title: "Intelligent Test Data",
                description: "AI-powered test data generation that creates realistic, diverse datasets with privacy compliance and edge case coverage.",
                icon: CogIcon,
                gradient: "from-brand-yellow to-yellow-500",
                bgGradient: "from-brand-dark-grey to-brand-dark-grey",
                iconBg: "bg-brand-yellow",
                iconColor: "text-brand-black",
                badge: "AI-Powered"
              },
              {
                title: "Performance Testing",
                description: "Automated performance and load testing with intelligent bottleneck analysis and optimization recommendations.",
                icon: ChartBarIcon,
                gradient: "from-brand-yellow to-yellow-500",
                bgGradient: "from-brand-dark-grey to-brand-dark-grey",
                iconBg: "bg-brand-yellow",
                iconColor: "text-brand-black",
                badge: "Enterprise"
              },
              {
                title: "Quality Analytics",
                description: "Advanced analytics dashboard with real-time insights into test coverage, quality metrics, and predictive quality trends.",
                icon: EyeIcon,
                gradient: "from-brand-yellow to-yellow-500",
                bgGradient: "from-brand-dark-grey to-brand-dark-grey",
                iconBg: "bg-brand-yellow",
                iconColor: "text-brand-black",
                badge: "Analytics"
              },
              {
                title: "Continuous Quality Gates",
                description: "Intelligent quality gates with automated decision-making that ensures only production-ready code advances through pipelines.",
                icon: CheckCircleIcon,
                gradient: "from-brand-yellow to-yellow-500",
                bgGradient: "from-brand-dark-grey to-brand-dark-grey",
                iconBg: "bg-brand-yellow",
                iconColor: "text-brand-black",
                badge: "Automated"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden bg-gradient-to-br ${feature.bgGradient} border border-brand-yellow/20 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 group`}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.gradient} text-brand-black shadow-lg`}>
                    {feature.badge}
                  </span>
                </div>
                
                {/* Icon */}
                <div className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-brand-yellow mb-4 group-hover:text-brand-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-white leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Action Link */}
                <div className="flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`}>
                    Learn More
                  </span>
                  <ArrowPathIcon className={`w-4 h-4 ml-2 ${feature.iconColor} group-hover:rotate-90 transition-transform duration-300`} />
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className={`absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-full blur-lg group-hover:opacity-10 transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CogniPixel Highlight */}
      <section className="py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">
              CogniPixel Technology
            </h2>
            <p className="text-xl text-brand-black max-w-3xl mx-auto">
              Revolutionary pixel-perfect visual testing that catches UI regressions before they reach production
            </p>
          </motion.div>

          <div className="bg-brand-dark-grey rounded-2xl shadow-xl p-8 md:p-12 border border-brand-yellow/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-yellow mb-6">
                  Pixel-Perfect Accuracy
                </h3>
                <div className="space-y-4">
                  {[
                    "Detects 1-pixel differences automatically",
                    "AI-powered false positive reduction",
                    "Cross-browser visual consistency",
                    "Responsive design validation",
                    "Automated baseline management"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-brand-yellow" />
                      <span className="text-brand-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-dark-grey rounded-xl p-8 text-center border border-brand-yellow/20">
                <PhotoIcon className="w-24 h-24 text-brand-yellow mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-brand-yellow mb-2">
                  Visual Regression Detection
                </h4>
                <p className="text-brand-white">
                  Advanced computer vision algorithms ensure your UI looks perfect across all devices and browsers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Types Section */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-yellow mb-4">
              Complete Testing Coverage
            </h2>
            <p className="text-xl text-brand-white max-w-3xl mx-auto">
              From unit tests to end-to-end scenarios, CogniTest covers every aspect of quality assurance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Functional Testing",
                tests: [
                  { name: "Unit Testing", description: "Automated unit test generation and execution" },
                  { name: "Integration Testing", description: "API and service integration validation" },
                  { name: "End-to-End Testing", description: "Complete user journey automation" },
                  { name: "Regression Testing", description: "Automated regression test suites" }
                ]
              },
              {
                category: "Non-Functional Testing",
                tests: [
                  { name: "Performance Testing", description: "Load, stress, and scalability testing" },
                  { name: "Security Testing", description: "Vulnerability and penetration testing" },
                  { name: "Accessibility Testing", description: "WCAG compliance validation" },
                  { name: "Compatibility Testing", description: "Cross-browser and device testing" }
                ]
              },
              {
                category: "Visual Testing",
                tests: [
                  { name: "CogniPixel Comparison", description: "Pixel-perfect visual regression detection" },
                  { name: "Responsive Design", description: "Multi-device layout validation" },
                  { name: "Cross-Browser Testing", description: "Visual consistency across browsers" },
                  { name: "Dynamic Content Testing", description: "Animated and interactive element testing" }
                ]
              },
              {
                category: "Data Testing",
                tests: [
                  { name: "Test Data Generation", description: "AI-powered realistic test data creation" },
                  { name: "Database Testing", description: "Data integrity and migration validation" },
                  { name: "API Data Validation", description: "Request/response data verification" },
                  { name: "Data Privacy Testing", description: "PII and GDPR compliance testing" }
                ]
              }
            ].map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-brand-dark-grey rounded-xl p-8 border border-brand-yellow/20"
              >
                <h3 className="text-2xl font-bold text-brand-yellow mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.tests.map((test, testIndex) => (
                    <div key={testIndex} className="flex items-start space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-brand-yellow mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-white">{test.name}</h4>
                        <p className="text-brand-light-grey text-sm">{test.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-brand-black max-w-3xl mx-auto">
              Organizations using CogniTest see significant improvements in quality and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "85%", label: "Faster Test Execution", description: "Automated test generation and execution" },
              { metric: "95%", label: "Bug Detection Rate", description: "AI-powered comprehensive coverage" },
              { metric: "70%", label: "Reduced Testing Time", description: "Parallel execution and smart scheduling" },
              { metric: "99.9%", label: "Visual Accuracy", description: "CogniPixel pixel-perfect detection" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-brand-dark-grey p-8 rounded-xl shadow-lg border border-brand-yellow/20"
              >
                <div className="text-4xl font-bold text-brand-yellow mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-brand-white mb-2">{stat.label}</div>
                <div className="text-brand-light-grey">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Integration Section */}
      <section className="py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-black mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-brand-black max-w-3xl mx-auto">
              CogniTest integrates with your existing development and testing tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Selenium", "Cypress", "Playwright", "Jest", "Mocha", "TestNG",
              "Jenkins", "GitHub Actions", "Azure DevOps", "Jira", "TestRail", "Allure"
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-brand-dark-grey border border-brand-yellow/20 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
              >
                <span className="font-semibold text-brand-white">{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Testing Process Flow */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-white mb-4">
              AI-Powered Testing <span className="text-brand-yellow">Workflow</span>
            </h2>
            <p className="text-xl text-brand-light-grey max-w-3xl mx-auto">
              Experience intelligent test automation that adapts and learns from your application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Smart Discovery",
                description: "AI analyzes your application structure and automatically identifies testable components and user flows.",
                icon: MagnifyingGlassIcon,
                color: "from-brand-yellow to-yellow-500",
                bgColor: "bg-brand-dark-grey",
                borderColor: "border-brand-yellow/20"
              },
              {
                step: "02",
                title: "Test Generation",
                description: "Intelligent algorithms create comprehensive test cases covering functional, visual, and edge case scenarios.",
                icon: BeakerIcon,
                color: "from-brand-yellow to-yellow-500",
                bgColor: "bg-brand-dark-grey",
                borderColor: "border-brand-yellow/20"
              },
              {
                step: "03",
                title: "CogniPixel Validation",
                description: "Advanced visual testing compares pixel-perfect screenshots and detects even subtle UI changes.",
                icon: EyeIcon,
                color: "from-brand-yellow to-yellow-500",
                bgColor: "bg-brand-dark-grey",
                borderColor: "border-brand-yellow/20"
              },
              {
                step: "04",
                title: "Adaptive Learning",
                description: "AI learns from test results and continuously optimizes test coverage and accuracy over time.",
                icon: CogIcon,
                color: "from-brand-yellow to-yellow-500",
                bgColor: "bg-brand-dark-grey",
                borderColor: "border-brand-yellow/20"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${process.bgColor} border ${process.borderColor} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`bg-gradient-to-r ${process.color} text-brand-black px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {process.step}
                  </span>
                </div>
                
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <process.icon className="w-12 h-12 text-brand-yellow" />
                </div>
                
                <h3 className="text-xl font-bold text-brand-white mb-4">{process.title}</h3>
                <p className="text-brand-light-grey leading-relaxed">{process.description}</p>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${process.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}></div>
              </motion.div>
            ))}
          </div>

          {/* Process Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-brand-dark-grey rounded-3xl p-8 shadow-lg border border-brand-yellow/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-yellow mb-4">Continuous Testing Pipeline</h3>
              <p className="text-brand-white">Seamlessly integrated into your development workflow</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              {[
                { label: "Code Commit", icon: DocumentTextIcon, color: "bg-brand-yellow/20" },
                { label: "AI Test Generation", icon: CogIcon, color: "bg-brand-yellow/20" },
                { label: "Automated Execution", icon: BoltIcon, color: "bg-brand-yellow/20" },
                { label: "Visual Validation", icon: EyeIcon, color: "bg-brand-yellow/20" },
                { label: "Results & Insights", icon: PresentationChartBarIcon, color: "bg-brand-yellow/20" }
              ].map((step, index) => (
                <React.Fragment key={index}>
                  <div className={`${step.color} rounded-xl p-4 text-center min-w-[120px] hover:scale-105 transition-transform duration-200`}>
                    <div className="mb-2 flex justify-center">
                      <step.icon className="w-8 h-8 text-brand-yellow" />
                    </div>
                    <div className="text-sm font-semibold text-brand-white">{step.label}</div>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block text-brand-yellow text-xl">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-white text-brand-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Revolutionize Your Testing?
            </h2>
            <p className="text-xl text-brand-dark-grey mb-8">
              Join leading development teams who have transformed their quality assurance with CogniTest's AI-powered testing automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-black hover:bg-brand-dark-grey text-brand-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-brand-black/30 hover:bg-brand-black/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                See CogniPixel in Action
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CogniTestPage;