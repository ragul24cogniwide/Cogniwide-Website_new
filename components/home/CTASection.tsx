'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6"
          >
            Ready to <span className="text-brand-blue">Transform Your Business?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-black max-w-3xl mx-auto"
          >
            Join hundreds of forward-thinking companies revolutionizing operations with our AI solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gray-100 rounded-2xl p-8 text-center border border-gray-200/20 shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1"
          >
            <CalendarIcon className="w-16 h-16 text-brand-blue mx-auto mb-6" />
            <h3 className="text-xl font-bold text-black mb-4">Schedule a Demo</h3>
            <p className="text-black mb-6">See our AI solutions in action with a personalized demonstration.</p>
            <Link href="/demo">
              <button className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors duration-300 w-full">
                Book Demo
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.45,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gray-100 rounded-2xl p-8 text-center border border-gray-200/20 shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1"
          >
            <ChatBubbleLeftRightIcon className="w-16 h-16 text-black mx-auto mb-6" />
            <h3 className="text-xl font-bold text-black mb-4">Free Consultation</h3>
            <p className="text-black mb-6">Expert advice on how AI can transform your specific business needs.</p>
            <Link href="/contact">
              <button className="bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300 w-full">
                Get Consultation
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gray-100 rounded-2xl p-8 text-center border border-gray-200/20 shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1"
          >
            <ArrowRightIcon className="w-16 h-16 text-brand-blue mx-auto mb-6" />
            <h3 className="text-xl font-bold text-black mb-4">Start Your Journey</h3>
            <p className="text-black mb-6">Begin your AI transformation with our comprehensive onboarding process.</p>
            <Link href="/get-started">
              <button className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors duration-300 w-full">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>


      </div>
    </section>
  );
};