'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RocketIcon, GlobeIcon, BookIcon, BriefcaseIcon } from '@/components/ui/icons';

const benefits = [
  {
    title: 'Cutting-Edge Technology',
    description: 'Work with the latest AI technologies and frameworks.',
    icon: RocketIcon
  },
  {
    title: 'Remote-First Culture',
    description: 'Flexible work arrangements with global collaboration.',
    icon: GlobeIcon
  },
  {
    title: 'Learning & Growth',
    description: 'Continuous learning opportunities and career development.',
    icon: BookIcon
  },
  {
    title: 'Competitive Benefits',
    description: 'Comprehensive health, dental, and retirement benefits.',
    icon: BriefcaseIcon
  }
];

export const WhyWorkWithUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-responsive-3xl font-bold text-brand-dark-grey mb-4"
          >
            Why Work With Us?
          </motion.h2>
        </div>

        <div className="grid-responsive-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-compact text-center hover:shadow-lg bg-gray-50"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-yellow rounded-xl flex items-center justify-center text-brand-dark-grey mx-auto mb-4">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-responsive-lg font-bold text-brand-dark-grey mb-3">{benefit.title}</h3>
                <p className="text-brand-medium-grey text-sm sm:text-base">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};