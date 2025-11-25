'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ComputerDesktopIcon, QuestionMarkCircleIcon, MapIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Live Product Walkthrough',
    description: 'See our AI solutions in action with real-time demonstrations.',
    icon: <ComputerDesktopIcon className="w-8 h-8" />
  },
  {
    title: 'Custom Use Cases',
    description: 'We\'ll tailor the demo to your specific industry and business needs.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: 'Q&A Session',
    description: 'Get all your questions answered by our AI experts.',
    icon: <QuestionMarkCircleIcon className="w-8 h-8" />
  },
  {
    title: 'Implementation Roadmap',
    description: 'Learn about the implementation process and timeline.',
    icon: <MapIcon className="w-8 h-8" />
  }
];

export const DemoFeatures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-dark-grey mb-4"
          >
            What to Expect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          >
            Our 45-minute demo session is designed to give you a comprehensive understanding of our AI capabilities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-brand-dark-grey mb-3">{feature.title}</h3>
              <p className="text-brand-medium-grey leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};