'use client';

import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: 'Custom',
    description: 'Perfect for small businesses getting started with AI',
    features: [
      'AI readiness assessment',
      'Basic automation setup',
      'Email support',
      'Monthly reporting'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: 'Custom',
    description: 'Ideal for growing companies ready to scale AI',
    features: [
      'Everything in Starter',
      'Advanced AI models',
      'Custom integrations',
      'Priority support',
      'Weekly optimization'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with complex needs',
    features: [
      'Everything in Professional',
      'Dedicated AI team',
      '24/7 support',
      'Custom development',
      'SLA guarantees'
    ],
    popular: false
  }
];

export const PricingPlans = () => {
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
            Choose Your Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          >
            Flexible pricing options designed to grow with your business and AI maturity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? 'ring-2 ring-brand-yellow' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-brand-yellow text-brand-dark-grey text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-brand-dark-grey mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-brand-dark-grey mb-4">{plan.price}</div>
              <p className="text-brand-medium-grey mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                    <span className="text-brand-medium-grey">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                plan.popular 
                  ? 'bg-brand-yellow text-brand-dark-grey hover:bg-brand-yellow/90' 
                  : 'border border-brand-medium-grey text-brand-dark-grey hover:bg-brand-dark-grey hover:text-white'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};