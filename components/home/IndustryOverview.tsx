'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { BankIcon, HeartIcon, ShoppingBagIcon, ShieldIcon, TruckIcon, SignalIcon } from '@/components/ui/icons';

const industries = [
  {
    name: 'Banking & Finance',
    description: 'AI-driven fraud detection, risk assessment, and customer insights.',
    icon: BankIcon,
    href: '/industries/banking',
    stats: '40% faster processing'
  },
  {
    name: 'Healthcare',
    description: 'Intelligent diagnostics, treatment optimization, and operational efficiency.',
    icon: HeartIcon,
    href: '/industries/healthcare',
    stats: '60% improved accuracy'
  },
  {
    name: 'Retail & E-commerce',
    description: 'Personalized recommendations, inventory optimization, and behavior analysis.',
    icon: ShoppingBagIcon,
    href: '/industries/retail',
    stats: '35% increase in sales'
  },
  {
    name: 'Insurance',
    description: 'Streamlined claims processing, risk assessment, and policy management.',
    icon: ShieldIcon,
    href: '/industries/insurance',
    stats: '50% faster claims'
  },
  {
    name: 'Manufacturing',
    description: 'Supply chain optimization with predictive analytics and route planning.',
    icon: TruckIcon,
    href: '/industries/manufacturing',
    stats: '25% cost reduction'
  },
  {
    name: 'Telecommunications',
    description: 'Enhanced network performance and customer experience solutions.',
    icon: SignalIcon,
    href: '/industries/telecom',
    stats: '30% better uptime'
  }
];

export const IndustryOverview = () => {
  return (
    <section className="py-20 lg:py-32 bg-brand-green-light1 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
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
            <span className="text-brand-blue text-sm font-medium">Industry Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Industries<span className="text-brand-blue"> We Serve</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Transform your industry with AI solutions designed for your unique challenges and opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;

            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-brand-blue hover:shadow-md transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue flex items-center justify-center text-white mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {industry.description}
                  </p>

                  <div className="text-xs font-medium text-brand-blue bg-blue-50 px-3 py-1.5 rounded-md inline-block">
                    {industry.stats}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/industries">
            <button
              className="bg-brand-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-blue-dark transition-colors duration-200 inline-flex items-center"
            >
              View All Industries
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};