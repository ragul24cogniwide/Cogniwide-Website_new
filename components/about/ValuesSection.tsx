'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RocketIcon, ShieldIcon, TargetIcon, UsersIcon, HandshakeIcon, CheckCircleIcon } from '@/components/ui/icons';

const values = [
  {
    icon: TargetIcon,
    title: 'Client Value Creation',
    highlightedTitle: (
      <span>
        Client <span className="text-yellow-500 font-bold">V</span>alue Creation
      </span>
    ),
    letter: 'V',
    description: 'We focus on creating tangible value for our clients through innovative solutions that drive business growth and success.',
  },
  {
    icon: RocketIcon,
    title: 'Continuous Innovation',
    highlightedTitle: (
      <span>
        Continuous <span className="text-yellow-500 font-bold">I</span>nnovation
      </span>
    ),
    letter: 'I',
    description: 'We constantly push the boundaries of technology, embracing new ideas and methodologies to stay ahead of the curve.',
  },
  {
    icon: ShieldIcon,
    title: 'Respect & Responsibility',
    highlightedTitle: (
      <span>
        <span className="text-yellow-500 font-bold">R</span>espect & <span className="text-yellow-500 font-bold">R</span>esponsibility
      </span>
    ),
    letter: 'R',
    description: 'We treat all stakeholders with respect and take full responsibility for our actions and commitments.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Integrity & Transparency',
    highlightedTitle: (
      <span>
        Integrity & <span className="text-yellow-500 font-bold">T</span>ransparency
      </span>
    ),
    letter: 'T',
    description: 'We maintain the highest ethical standards and ensure complete transparency in all our business dealings.',
  },
  {
    icon: HandshakeIcon,
    title: 'Collaboration & Unity',
    highlightedTitle: (
      <span>
        Collaboration & <span className="text-yellow-500 font-bold">U</span>nity
      </span>
    ),
    letter: 'U',
    description: 'We believe in the power of teamwork and foster unity among our teams and with our clients.',
  },
  {
    icon: UsersIcon,
    title: 'Business Excellence',
    highlightedTitle: (
      <span>
        Business <span className="text-yellow-500 font-bold">E</span>xcellence
      </span>
    ),
    letter: 'E',
    description: 'We strive for excellence in every aspect of our business, delivering superior quality and exceptional results.',
  },
];

export const ValuesSection = () => {
  return (
    <section className="relative py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Our Values - <span className="text-yellow-500">VIRTUE</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Our core values guide everything we do, shaping our culture and driving our commitment to excellence.
          </p>
        </motion.div>

        {/* VIRTUE Acronym Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="flex space-x-1 bg-gray-50 rounded-lg p-2">
            {values.map((value, index) => (
              <motion.div
                key={value.letter}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="w-8 h-8 bg-yellow-400 rounded-md flex items-center justify-center text-white font-semibold text-sm"
              >
                {value.letter}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: 0.4 + index * 0.05
              }}
              className="group bg-white rounded-lg p-4 border border-gray-100 hover:border-yellow-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-md flex items-center justify-center text-white font-semibold text-sm">
                  {value.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {value.highlightedTitle}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xs text-gray-500">
            These values drive our commitment to excellence
          </p>
        </motion.div>
      </div>
    </section>
  );
};