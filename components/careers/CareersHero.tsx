'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, CpuIcon, TargetIcon, BriefcaseIcon } from '@/components/ui/icons';

export const CareersHero = () => {
  const benefits = [
    {
      icon: CpuIcon,
      title: 'Cutting-Edge Tech',
      description: 'Work with the latest AI technologies and frameworks'
    },
    {
      icon: UserIcon,
      title: 'Global Impact',
      description: 'Build solutions that transform businesses worldwide'
    },
    {
      icon: TargetIcon,
      title: 'Growth Focused',
      description: 'Continuous learning and career development opportunities'
    },
    {
      icon: BriefcaseIcon,
      title: 'Competitive Benefits',
      description: 'Comprehensive packages and flexible work arrangements'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-brand-dark-grey via-gray-800 to-brand-medium-grey text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Shape the Future
            <br />
            <span className="text-brand-yellow">of AI</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Join our passionate team of innovators, researchers, and engineers who are building 
            the next generation of AI solutions that transform how businesses operate.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button className="px-8 py-4 bg-brand-yellow text-brand-dark-grey font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Open Positions
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-dark-grey transition-all duration-300">
              Learn About Our Culture
            </button>
          </motion.div>
        </div>
        
        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark-grey mx-auto mb-4">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-brand-yellow mb-2">50+</div>
            <div className="text-gray-300">Team Members</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-yellow mb-2">15+</div>
            <div className="text-gray-300">Countries Represented</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-yellow mb-2">95%</div>
            <div className="text-gray-300">Employee Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};