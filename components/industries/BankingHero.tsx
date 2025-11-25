'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { BankIcon, ShieldIcon, TrendingUpIcon, LightningIcon } from '@/components/ui/icons';

interface BankingHeroProps {
  stats?: {
    label: string;
    value: string;
    description?: string;
  }[];
}

export function BankingHero({ stats }: BankingHeroProps) {
  const keyFeatures = [
    {
      icon: ShieldIcon,
      title: 'Regulatory Compliance',
      description: 'AI-powered compliance monitoring for Basel III, AML, and KYC requirements'
    },
    {
      icon: TrendingUpIcon,
      title: 'Fraud Detection',
      description: 'Advanced ML models for real-time fraud prevention and risk assessment'
    },
    {
      icon: LightningIcon,
      title: 'Customer Experience',
      description: 'Personalized banking services with 24/7 intelligent support'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 lg:py-16 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"
          animate={{
            background: [
              'linear-gradient(to right, rgba(0,0,0,0.4), transparent)',
              'linear-gradient(45deg, rgba(0,0,0,0.3), rgba(234,179,8,0.1))',
              'linear-gradient(to right, rgba(0,0,0,0.4), transparent)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-yellow-500/30 rounded-lg"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-yellow-500/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: [-5, 5, -5],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/4 w-12 h-12 border border-yellow-400/40 rotate-45"
          animate={{
            y: [0, -15, 0],
            rotate: [45, 225, 405],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-yellow-500/30 to-transparent rounded-full"
          animate={{
            scale: [0.8, 1.3, 0.8],
            x: [0, 10, 0],
            y: [0, -8, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="financial-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#eab308" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#financial-grid)" />
          </svg>
        </motion.div>
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/60 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}
        
        {/* Pulsing Glow Effects */}
        <motion.div
          className="absolute top-10 left-1/2 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-400/15 rounded-full blur-lg"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Industry Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-black shadow-lg">
              <BankIcon className="w-6 h-6" />
            </div>
            <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Banking & Financial Services
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white"
          >
            Transform Banking with{' '}
            <span className="text-yellow-400">Intelligent AI</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Revolutionize your financial institution with AI-powered automation that enhances customer experience, ensures regulatory compliance, and drives operational excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="px-8 py-3 bg-yellow-500 text-black hover:bg-yellow-400 font-semibold shadow-lg"
            >
              Explore AI Solutions
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Book Consultation
            </Button>
          </motion.div>
        </div>

        {/* Key Features & Stats Combined */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 text-center lg:text-left">Key Capabilities</h3>
            <div className="space-y-3">
              {keyFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          {stats && stats.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-4 text-center lg:text-left">Industry Insights</h3>
              <div className="bg-gray-800/60 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="text-center p-3 rounded-lg bg-gray-700/40 border border-gray-600/50"
                    >
                      <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-white font-semibold text-xs lg:text-sm">
                        {stat.label}
                      </div>
                      {stat.description && (
                        <div className="text-gray-300 text-xs leading-tight mt-1">
                          {stat.description}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}