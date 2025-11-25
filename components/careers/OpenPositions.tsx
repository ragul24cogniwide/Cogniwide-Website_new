'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, BuildingIcon, ClockIcon } from '@/components/ui/icons';

const positions = [
  {
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'Product Manager - AI',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time'
  },
  {
    title: 'Data Scientist',
    department: 'Data Science',
    location: 'Remote',
    type: 'Full-time'
  }
];

export const OpenPositions = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-responsive-3xl font-bold text-brand-dark-grey mb-4"
          >
            Open Positions
          </motion.h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-feature"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-responsive-lg font-bold text-brand-dark-grey mb-3">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-brand-medium-grey">
                    <span className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <BuildingIcon className="w-4 h-4" />
                      {position.department}
                    </span>
                    <span className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      {position.type}
                    </span>
                  </div>
                </div>
                <button className="btn-primary lg:flex-shrink-0">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};