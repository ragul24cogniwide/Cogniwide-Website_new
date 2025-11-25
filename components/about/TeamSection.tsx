'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserIcon, CpuIcon, TargetIcon, WrenchIcon, BriefcaseIcon, BookIcon } from '@/components/ui/icons';

const teamData = {
  leadership: [
    {
      name: 'Kannadasan Kasi',
      title: 'CEO & Co-Founder',
      bio: 'Former AI researcher at Stanford with 15+ years in machine learning and enterprise software.',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/1347352d8c8348aba0cb97622c8d51ad'
    },
    {
      name: 'Michael Rodriguez',
      title: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer specializing in scalable AI systems and cloud architecture.',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/1347352d8c8348aba0cb97622c8d51ad',

    },
    {
      name: 'Jennifer Park',
      title: 'Chief Operating Officer',
      bio: 'Former McKinsey partner with expertise in scaling technology companies and operations.',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/1347352d8c8348aba0cb97622c8d51ad'
    }
  ],
  engineering: [
    {
      name: 'David Kim',
      title: 'VP of Engineering',
      bio: 'Former Microsoft principal engineer with expertise in enterprise software development.',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/1347352d8c8348aba0cb97622c8d51ad'
    },
    {
      name: 'Alex Thompson',
      title: 'Senior Engineering Manager',
      bio: 'Full-stack engineer with 10+ years building scalable web applications and APIs.',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/1347352d8c8348aba0cb97622c8d51ad'
    },
    {
      name: 'Maria Santos',
      title: 'DevOps Lead',
      bio: 'Cloud infrastructure specialist focused on CI/CD pipelines and system reliability.',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/1347352d8c8348aba0cb97622c8d51ad'
    }
  ],
  research: [
    {
      name: 'Dr. Emily Watson',
      title: 'Head of AI Research',
      bio: 'PhD in Computer Science from MIT, leading our advanced AI research and development.',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/1347352d8c8348aba0cb97622c8d51ad'
    },
    {
      name: 'Dr. James Liu',
      title: 'Senior Research Scientist',
      bio: 'Machine learning expert specializing in natural language processing and computer vision.',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/1347352d8c8348aba0cb97622c8d51ad'
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Research Scientist',
      bio: 'AI ethics researcher focused on responsible AI development and bias mitigation.',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/1347352d8c8348aba0cb97622c8d51ad'
    }
  ],
  operations: [
    {
      name: 'Robert Johnson',
      title: 'VP of Sales',
      bio: 'Enterprise sales leader with 12+ years driving growth in B2B technology companies.',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/1347352d8c8348aba0cb97622c8d51ad'
    },
    {
      name: 'Lisa Chang',
      title: 'Head of Marketing',
      bio: 'Digital marketing strategist with expertise in tech product positioning and growth.',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/1347352d8c8348aba0cb97622c8d51ad'
    },
    {
      name: 'Thomas Brown',
      title: 'Head of Customer Success',
      bio: 'Customer experience leader focused on ensuring client satisfaction and retention.',
      imageUrl: 'https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/1347352d8c8348aba0cb97622c8d51ad'
    }
  ]
};

const tabs = [
  { id: 'leadership', label: 'Leadership', count: teamData.leadership.length },
  { id: 'engineering', label: 'Engineering', count: teamData.engineering.length },
  { id: 'research', label: 'Research', count: teamData.research.length },
  { id: 'operations', label: 'Operations', count: teamData.operations.length }
];

export const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('leadership');
  const currentTeam = teamData[activeTab as keyof typeof teamData];

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
            Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-brand-medium-grey max-w-3xl mx-auto"
          >
            Meet the talented professionals driving innovation and growth at Cogniwide.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 mx-2 mb-4 font-semibold text-sm transition-colors duration-200 border-b-2 ${
                activeTab === tab.id
                  ? 'text-brand-yellow border-brand-yellow'
                  : 'text-brand-medium-grey border-transparent hover:text-brand-dark-grey hover:border-gray-300'
              }`}
            >
              {tab.label}
              <span className="ml-2 px-2 py-1 text-xs bg-gray-100 rounded-full">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark-grey mx-auto mb-4 overflow-hidden">
                <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
              </div>
              <h3 className="text-xl font-bold text-brand-dark-grey mb-2">{member.name}</h3>
              <div className="text-brand-yellow font-semibold mb-3">{member.title}</div>
              <p className="text-brand-medium-grey text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};