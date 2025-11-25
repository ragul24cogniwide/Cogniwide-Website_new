'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { UserIcon, BankIcon, HeartIcon, ShoppingBagIcon } from '@/components/ui/icons';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CTO, TechCorp Financial',
    company: 'Fortune 500 Financial Services',
    content: 'Cogniwide\'s AI solutions transformed our customer service operations. 75% reduction in response times and 90% customer satisfaction improvement.',
    rating: 5,
    results: '75% faster response times',
    avatar: UserIcon
  },
  {
    name: 'Michael Chen',
    title: 'VP of Operations, HealthFirst',
    company: 'Healthcare Network',
    content: 'The predictive analytics platform optimized resource allocation and improved patient outcomes. ROI was evident within 3 months.',
    rating: 5,
    results: '40% operational efficiency gain',
    avatar: UserIcon
  },
  {
    name: 'Emily Rodriguez',
    title: 'Head of Digital, RetailMax',
    company: 'E-commerce Platform',
    content: 'CogniLoom\'s recommendation engine increased conversion rates by 45%. The personalization capabilities are game-changing.',
    rating: 5,
    results: '45% increase in conversions',
    avatar: UserIcon
  }
];

const caseStudies = [
  {
    industry: 'Banking',
    title: 'Global Bank Reduces Fraud by 85%',
    description: 'AI-powered fraud detection system across 2,000+ branches',
    metrics: ['85% fraud reduction', '$50M saved annually', '99.9% accuracy'],
    icon: BankIcon
  },
  {
    industry: 'Healthcare',
    title: 'Hospital Network Improves Patient Care',
    description: 'AI-driven diagnostic assistance across 50 hospitals',
    metrics: ['30% faster diagnosis', '25% cost reduction', '95% accuracy rate'],
    icon: HeartIcon
  },
  {
    industry: 'Retail',
    title: 'E-commerce Giant Boosts Sales',
    description: 'Personalized recommendation engine and inventory optimization',
    metrics: ['60% higher engagement', '35% sales increase', '20% cost savings'],
    icon: ShoppingBagIcon
  }
];

export const SuccessStories = () => {
  return (
    <section className="py-20 lg:py-32 bg-brand-yellow-light1 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-50 border border-blue-200 mb-6"
          >
            <span className="text-brand-blue text-sm font-medium">Client Success</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Success <span className="text-brand-blue">Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Discover how leading organizations are transforming their operations with our cutting-edge AI solutions.
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10"
          >
            What Our <span className="text-brand-blue">Clients</span> Say
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => {
              const AvatarIcon = testimonial.avatar;
              return (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-brand-blue hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-brand-blue" />
                    ))}
                  </div>

                  <blockquote className="text-gray-600 mb-4 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="bg-blue-50 rounded-md p-3 mb-4">
                    <div className="text-sm font-semibold text-brand-blue">
                      {testimonial.results}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white">
                      <AvatarIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-600">{testimonial.title}</div>
                      <div className="text-xs text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10"
          >
            <span className="text-brand-blue">Case</span> Studies
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-brand-blue hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center text-white">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-medium text-brand-blue bg-blue-50 px-3 py-1 rounded-md">
                      {study.industry}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-3">{study.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{study.description}</p>

                  <div className="space-y-2">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-brand-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};