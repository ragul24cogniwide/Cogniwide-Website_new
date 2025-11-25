'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon } from '@heroicons/react/24/outline';

export const DemoScheduler = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-dark-grey mb-4"
          >
            Schedule Your Demo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-brand-medium-grey"
          >
            Choose a time that works for you and we'll show you how our AI solutions can benefit your business.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-xl p-8"
        >
          <div className="text-center">
            <div className="mb-4">
              <CalendarIcon className="w-16 h-16 mx-auto text-brand-yellow" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark-grey mb-4">Demo Booking Coming Soon</h3>
            <p className="text-brand-medium-grey mb-6">
              We're currently setting up our demo booking system. In the meantime, please contact us directly to schedule your personalized demonstration.
            </p>
            <button className="bg-brand-yellow text-brand-dark-grey px-8 py-3 rounded-lg font-semibold hover:bg-brand-yellow/90 transition-colors duration-300">
              Contact Us to Schedule
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};