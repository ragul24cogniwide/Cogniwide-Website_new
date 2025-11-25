'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-brand-yellow/10 rounded-full text-sm font-semibold text-brand-dark-grey mb-4">
              About Cogniwide
            </div>
            <h2 className="text-4xl font-bold text-brand-dark-grey mb-3">Our Story</h2>
            <div className="mx-auto w-16 h-1 bg-brand-yellow/70 rounded mb-6"></div>
            <div className="space-y-6 text-lg text-brand-medium-grey leading-relaxed border-l-4 border-brand-yellow/40 pl-6 text-left">
              <p>
                Founded in 2019, Cogniwide is an AI-based IT products and services company. More than being just consultants, we work with you wherever you are in your digital journey and deliver high-performance product development, solutions, and operations.
              </p>
              <p>
                As customer expectations keep growing, we bring all our skills to the table and deliver market-shaping AI and self-optimizing systems that support your rapid business transformation – be it any industry across the globe.
              </p>
              <p>
                The post-digital age is growing at an unprecedented pace, and the need to keep up with the latest trends has never been greater. Our curiosity to learn the newest technology never wavers, and each day we bring our skills and ingenuity to work to make incredible things happen. All this to ensure you stay ahead of the competition.
              </p>
            </div>
          </motion.div>
          

        </div>
      </div>
    </section>
  );
};