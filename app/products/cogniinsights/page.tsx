import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { ProductHero } from '@/components/products/ProductHero';
import { InteractiveDemo } from '@/components/products/InteractiveDemo';
import { BeforeAfterComparison } from '@/components/products/BeforeAfterComparison';
import { ArchitectureDiagram } from '@/components/products/ArchitectureDiagram';

import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'CogniInsights - Analytics Platform with BI Migration | Cogniwide',
  description: 'Transform your analytics with CogniInsights. One-click migration between BI tools using PortBI, and seamless MDM management with CogniCraft.',
  keywords: [
    'business intelligence',
    'BI migration',
    'PortBI',
    'CogniCraft',
    'MDM management',
    'analytics platform',
    'data migration',
    'master data management'
  ],
};

const productData = {
  name: 'CogniInsights',
  tagline: 'Analytics Platform with One-Click BI Migration',
  description: 'Enable seamless migration between BI tools using PortBI, and comprehensive MDM management with CogniCraft.',
  icon: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 9H12V18H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 10H19V18H16V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  color: 'from-yellow-400 to-yellow-600',
  features: [
    'One-Click BI Tool Migration with PortBI',
    'CogniCraft Master Data Management',
    'Advanced Analytics Dashboard',
    'Cross-Platform Data Integration',
    'Automated Report Migration',
    'Real-time Data Synchronization'
  ],
  benefits: [
    'Reduce BI migration time by 90%',
    'Eliminate data silos across platforms',
    'Improve data quality and consistency',
    'Accelerate analytics adoption by 75%'
  ],
  useCases: [
    'Enterprise BI Platform Migration',
    'Multi-Vendor Analytics Consolidation',
    'Master Data Management Implementation',
    'Cross-Platform Report Standardization',
    'Data Governance & Quality Management',
    'Analytics Modernization Projects'
  ]
};

export default function CogniInsightsPage() {
  return (
    <PageLayout>
      <ProductHero product={productData} />
      <InteractiveDemo productName="CogniInsights" />
      <BeforeAfterComparison 
        productName="CogniInsights"
        before={{
          title: 'Traditional BI Migration',
          points: [
            'Complex, time-consuming migration processes',
            'Manual report recreation and testing',
            'Data inconsistencies across platforms',
            'High risk of data loss during migration',
            'Months of downtime and disruption'
          ]
        }}
        after={{
          title: 'With CogniInsights PortBI',
          points: [
            'One-click automated migration between BI tools',
            'Intelligent report conversion and optimization',
            'Seamless data mapping and validation',
            'Zero data loss with comprehensive backup',
            'Minutes instead of months for migration'
          ]
        }}
      />
      
      <ArchitectureDiagram productName="CogniInsights" />
      
      {/* PortBI and CogniCraft Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Analytics Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CogniInsights combines PortBI for seamless migrations and CogniCraft for comprehensive master data management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* PortBI Section */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">PortBI Migration Engine</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Revolutionary one-click migration technology that seamlessly transfers your BI assets between platforms.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Tableau ↔ Power BI ↔ Qlik ↔ Looker</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Automated report conversion and optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Data source mapping and validation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Zero downtime migration process</span>
                </div>
              </div>
            </div>
            
            {/* CogniCraft Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">CogniCraft MDM</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Comprehensive Master Data Management solution that ensures data consistency and quality across your entire organization.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Unified data governance framework</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">AI-powered data quality monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Automated data lineage tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time data synchronization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}