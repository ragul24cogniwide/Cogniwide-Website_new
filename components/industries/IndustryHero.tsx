'use client';

import { Button } from '@/components/ui/Button';
import { BankIcon, HeartIcon, TruckIcon, ShieldIcon, ShoppingBagIcon, RadioIcon, BuildingOfficeIcon } from '@/components/ui/icons';
import { CogIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

interface IndustryHeroProps {
  industry: string;
  title: string;
  description: string;
  challenges: string[];
  backgroundImage?: string;
  stats?: {
    label: string;
    value: string;
    description?: string;
  }[];
}

export function IndustryHero({ 
  industry, 
  title, 
  description, 
  challenges, 
  backgroundImage,
  stats 
}: IndustryHeroProps) {

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 lg:py-16 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-90" />
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-yellow-500/30 rounded-lg opacity-40" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-500/20 rounded-full opacity-30" />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 border border-yellow-400/40 rotate-45 opacity-50" />
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-yellow-500/30 to-transparent rounded-full opacity-40" />
        
        {/* Static Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent" />
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-10 left-1/2 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-400/15 rounded-full blur-lg opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Industry Badge */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-black shadow-lg">
              {industry === 'banking' && <BankIcon className="w-6 h-6" />}
               {industry === 'healthcare' && <HeartIcon className="w-6 h-6" />}
               {industry === 'manufacturing' && <CogIcon className="w-6 h-6" />}
    {industry === 'logistics' && <TruckIcon className="w-6 h-6" />}
               {industry === 'insurance' && <ShieldIcon className="w-6 h-6" />}
               {industry === 'retail' && <ShoppingBagIcon className="w-6 h-6" />}
               {industry === 'telecom' && <RadioIcon className="w-6 h-6" />}
               {industry === 'education' && <AcademicCapIcon className="w-6 h-6" />}
               {!['banking', 'healthcare', 'retail', 'telecom', 'insurance', 'logistics', 'manufacturing', 'education'].includes(industry) && <BuildingOfficeIcon className="w-6 h-6" />}
            </div>
            <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              {industry}
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-yellow-400">
              {title.split(' ').slice(-1)[0]}
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
          </div>
        </div>

        {/* Key Features & Stats Combined */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 text-center lg:text-left">Key Capabilities</h3>
            <div className="space-y-3">
              {challenges.slice(0, 3).map((challenge, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-xs leading-relaxed">{challenge}</p>
                    </div>
                  </div>
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
                    <div
                      key={index}
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}