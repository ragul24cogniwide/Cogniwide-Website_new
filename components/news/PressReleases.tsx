'use client';

import React from 'react';
import { motion } from 'framer-motion';

const releases = [
  {
    title: 'Cogniwide Announces Q4 2023 Results',
    date: '2024-01-25',
    summary: '300% revenue growth and expansion into new markets.'
  },
  {
    title: 'New AI Platform Features Released',
    date: '2024-01-18',
    summary: 'Enhanced automation capabilities and improved user experience.'
  },
  {
    title: 'Industry Recognition and Awards',
    date: '2024-01-12',
    summary: 'Multiple awards for innovation and customer satisfaction.'
  }
];

export const PressReleases = () => {
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
            Press Releases
          </motion.h2>
        </div>

        <div className="space-y-6">
          {releases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-brand-dark-grey mb-2">{release.title}</h3>
                  <p className="text-brand-medium-grey mb-2">{release.summary}</p>
                  <div className="text-sm text-brand-medium-grey">{release.date}</div>
                </div>
                <button className="mt-4 md:mt-0 text-brand-yellow font-semibold hover:underline">
                  Read Full Release →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};