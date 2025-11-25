'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export const AboutHero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-brand-dark-grey via-gray-800 to-brand-medium-grey text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-brand-yellow bg-clip-text text-transparent"
          >
            About Cogniwide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Transforming businesses through AI-powered innovation, secure solutions, and delivery excellence.
          </motion.p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mr-4">
                <EyeIcon className="w-6 h-6 text-brand-dark-grey" />
              </div>
              <h2 className="text-3xl font-bold text-brand-yellow">Vision</h2>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed">
              To Transform with Technology by enabling Customer Success, Strengthening Partnerships, 
              fostering Employee growth, and delivering Societal Value.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mr-4">
                <RocketLaunchIcon className="w-6 h-6 text-brand-dark-grey" />
              </div>
              <h2 className="text-3xl font-bold text-brand-yellow">Mission</h2>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed">
              To transform Businesses with AI-powered future-ready Technology Products, 
              Secure Solutions & Services built on Innovation and Delivery Excellence.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2">40+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2">15+</div>
            <div className="text-gray-300">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2">7+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-yellow mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};