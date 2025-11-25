'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, ChartBarIcon, PaletteIcon, RocketIcon, TrendingUpIcon, WrenchIcon } from '@/components/ui/icons';

const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We learn about your business needs and AI goals.',
    icon: PhoneIcon
  },
  {
    step: '02',
    title: 'AI Readiness Assessment',
    description: 'We evaluate your current systems and data infrastructure.',
    icon: ChartBarIcon
  },
  {
    step: '03',
    title: 'Solution Design',
    description: 'We create a customized AI implementation plan.',
    icon: PaletteIcon
  },
  {
    step: '04',
    title: 'Pilot Program',
    description: 'We start with a small-scale implementation to prove value.',
    icon: RocketIcon
  },
  {
    step: '05',
    title: 'Full Deployment',
    description: 'We scale the solution across your organization.',
    icon: TrendingUpIcon
  },
  {
    step: '06',
    title: 'Ongoing Support',
    description: 'We provide continuous optimization and support.',
    icon: WrenchIcon
  }
];

export const OnboardingProcess = () => {
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
            Our Onboarding Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-responsive-lg text-brand-medium-grey max-w-3xl mx-auto"
          >
            We follow a proven methodology to ensure successful AI implementation and maximum ROI.
          </motion.p>
        </div>

        <div className="grid-responsive-3">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-compact hover:shadow-lg bg-gray-50"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-yellow rounded-lg flex items-center justify-center text-brand-dark-grey">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-brand-yellow">{step.step}</div>
                </div>
                <h3 className="text-responsive-lg font-bold text-brand-dark-grey mb-3">{step.title}</h3>
                <p className="text-brand-medium-grey leading-relaxed text-sm sm:text-base">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};