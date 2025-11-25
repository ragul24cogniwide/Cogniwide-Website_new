'use client';

import { Card } from '@/components/ui/Card';

interface Challenge {
  title: string;
  description: string;
  impact: string;
  solution: string;
  benefits: string[];
}

interface ChallengesSolutionsProps {
  challenges: Challenge[];
}

export function ChallengesSolutions({ challenges }: ChallengesSolutionsProps) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Challenges & AI-Powered Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform industry-specific challenges into competitive advantages with our intelligent automation solutions
          </p>
        </div>

        <div className="space-y-8">
          {challenges.map((challenge, index) => (
            <div key={index}>
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-gray-200/60 hover:shadow-lg transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Challenge */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-300/50">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {challenge.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {challenge.description}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-3 border-l-3 border-gray-400">
                      <p className="text-gray-700 text-sm font-medium">{challenge.impact}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center flex-shrink-0 border border-yellow-300/50">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        AI Solution
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {challenge.solution}
                    </p>
                    <div className="bg-yellow-50 rounded-lg p-3 border-l-3 border-yellow-400">
                      <h4 className="font-semibold text-yellow-800 mb-2 text-sm">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {challenge.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <svg className="w-3 h-3 text-yellow-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}