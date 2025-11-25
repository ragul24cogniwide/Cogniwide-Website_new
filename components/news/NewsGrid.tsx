'use client';

import React from 'react';
import { motion } from 'framer-motion';

const news = [
  {
    title: 'Cogniwide Raises $50M Series B',
    excerpt: 'Funding will accelerate AI platform development and global expansion.',
    date: '2024-01-20',
    category: 'Funding'
  },
  {
    title: 'New Partnership with Microsoft',
    excerpt: 'Strategic partnership to integrate AI solutions with Azure cloud services.',
    date: '2024-01-15',
    category: 'Partnership'
  },
  {
    title: 'AI Innovation Award Winner',
    excerpt: 'Recognized for outstanding innovation in enterprise AI solutions.',
    date: '2024-01-10',
    category: 'Award'
  }
];

export const NewsGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-dark-grey mb-4"
          >
            Latest News
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-sm font-medium text-brand-yellow bg-brand-yellow/10 px-2 py-1 rounded-full inline-block mb-4">
                {article.category}
              </div>
              <h3 className="text-xl font-bold text-brand-dark-grey mb-3">{article.title}</h3>
              <p className="text-brand-medium-grey mb-4">{article.excerpt}</p>
              <div className="text-sm text-brand-medium-grey">{article.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};