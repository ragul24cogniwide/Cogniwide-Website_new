import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { ProductHero } from '@/components/products/ProductHero';
import { InteractiveDemo } from '@/components/products/InteractiveDemo';
import { BeforeAfterComparison } from '@/components/products/BeforeAfterComparison';
import { ArchitectureDiagram } from '@/components/products/ArchitectureDiagram';
import { CTASection } from '@/components/home/CTASection';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'CogniForge - ERP for Manufacturing Companies | Cogniwide',
  description: 'Comprehensive ERP solution integrating all business processes to optimize production, streamline operations, and drive growth in the manufacturing industry.',
  keywords: [
    'manufacturing ERP',
    'production planning',
    'inventory management',
    'shop floor control',
    'MES system',
    'quality management',
    'supply chain management',
    'manufacturing automation'
  ],
};

const productData = {
  name: 'CogniForge',
  tagline: 'Transform Your Manufacturing Operations with Integrated ERP Solutions',
  description: 'A comprehensive ERP solution integrating all business processes to optimize production, streamline operations, and drive growth in the manufacturing industry.',
  icon: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  color: 'from-orange-400 to-red-600',
  features: [
    'Finance & Accounting Management',
    'Sales & CRM Integration',
    'Procurement & Sourcing',
    'Inventory & Warehouse Management',
    'Production Planning & MRP',
    'Shop Floor Control (MES)',
    'Quality Management System',
    'Maintenance Management',
    'Supply Chain & Logistics',
    'Business Intelligence & Analytics'
  ],
  benefits: [
    'Reduce production costs',
    'Improve inventory accuracy ',
    'Increase production efficiency',
    'Accelerate order fulfillment'
  ],
  useCases: [
    'Discrete Manufacturing',
    'Process Manufacturing',
    'Make-to-Order Operations',
    'Make-to-Stock Production',
    'Engineer-to-Order Manufacturing',
    'Mixed-Mode Manufacturing'
  ]
};

export default function CogniForgePage() {
  return (
    <PageLayout>
      <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
        <ProductHero product={productData} />
        <InteractiveDemo productName="CogniForge" />
      
      {/* Core Business Functions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Business Functions (Tier 1)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential modules that form the heart of any manufacturing ERP - Absolute must-have modules for operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Finance & Accounting */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Finance & Accounting</h3>
              </div>
              <p className="text-gray-600 mb-4">Manages all financial transactions, reporting, and compliance</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>General Ledger & Fixed Assets</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Cost Accounting & Budgeting</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Financial Reporting</li>
              </ul>
            </div>

            {/* Sales & CRM */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sales & CRM</h3>
              </div>
              <p className="text-gray-600 mb-4">Manages the entire sales lifecycle from lead to order</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Lead & Opportunity Management</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Quoting & Order Management</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Sales Analytics</li>
              </ul>
            </div>

            {/* Procurement & Sourcing */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Procurement & Sourcing</h3>
              </div>
              <p className="text-gray-600 mb-4">Manages acquisition of raw materials and services</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Supplier Management</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Purchase Order Management</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Spend Analysis</li>
              </ul>
            </div>

            {/* Inventory & Warehouse */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Inventory & Warehouse</h3>
              </div>
              <p className="text-gray-600 mb-4">Oversees all aspects of stock and warehouse space</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Multi-location Inventory</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Stock Levels & Reorder Points</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Warehouse Management System</li>
              </ul>
            </div>

            {/* Production Planning */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Production Planning</h3>
              </div>
              <p className="text-gray-600 mb-4">Plans what to make, how to make it, and when</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Bill of Materials (BOM)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Material Requirements Planning</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Capacity Requirements Planning</li>
              </ul>
            </div>

            {/* Shop Floor Control */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Shop Floor Control (MES)</h3>
              </div>
              <p className="text-gray-600 mb-4">Manages and tracks real-time work on the factory floor</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>Production Scheduling</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>Job Tracking & Data Collection</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>Real-time Dashboarding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Enhancement Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Supporting & Strategic Functions (Tier 2)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhanced modules that provide strategic value to your manufacturing ERP operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quality Management */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Quality Management</h3>
              </div>
              <p className="text-gray-600 mb-4">Ensures products meet quality standards and comply with regulations</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Quality Control Plans</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Incoming & In-process Inspection</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Non-Conformance Reporting</li>
              </ul>
            </div>

            {/* Maintenance Management */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Maintenance Management</h3>
              </div>
              <p className="text-gray-600 mb-4">Manages maintenance of production equipment to maximize uptime</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Asset Register</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Preventive Maintenance Scheduling</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Downtime Tracking</li>
              </ul>
            </div>

            {/* Human Resource Management */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Human Resource Management</h3>
              </div>
              <p className="text-gray-600 mb-4">Manages the company's workforce and employee data</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Employee Master Data</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Time & Attendance</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Payroll & Leave Management</li>
              </ul>
            </div>

            {/* Supply Chain & Logistics */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Supply Chain & Logistics</h3>
              </div>
              <p className="text-gray-600 mb-4">Manages the movement of goods beyond the factory walls</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Shipment Management</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Carrier Management</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Track & Trace</li>
              </ul>
            </div>

            {/* Project Management */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Project Management</h3>
              </div>
              <p className="text-gray-600 mb-4">Essential for complex "Make-to-Order" manufacturers</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Project Planning & Scheduling</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Resource Allocation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Project Budgeting & Costing</li>
              </ul>
            </div>

            {/* Business Intelligence */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business Intelligence</h3>
              </div>
              <p className="text-gray-600 mb-4">Transforms data into actionable insights</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>Key Performance Indicators</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>Custom Dashboards</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>Data Visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">CogniForge Manufacturing Hub</h3>
              <p className="text-gray-600 mb-6">Comprehensive ERP Platform for Manufacturing Excellence</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Integrated Manufacturing Operations</h4>
                    <p className="text-gray-600">Seamlessly connect all manufacturing processes from order to delivery, eliminating data silos and ensuring real-time visibility across your entire operation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Smart Production Planning & MES</h4>
                    <p className="text-gray-600">AI-powered production scheduling and shop floor control that optimizes resource utilization, reduces waste, and ensures on-time delivery through intelligent automation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Business Integration</h4>
                    <p className="text-gray-600">Unified platform covering finance, sales, procurement, inventory, quality, and maintenance - all working together to drive manufacturing excellence and business growth.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Smart Manufacturing Platform</h4>
                <p className="text-gray-600">Transform your manufacturing operations with intelligent ERP that adapts to your processes, optimizes performance, and drives continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BeforeAfterComparison 
        productName="CogniForge"
        before={{
          title: 'Traditional Manufacturing Operations',
          points: [
            'Disconnected systems and data silos',
            'Manual production planning and scheduling',
            'Limited visibility into shop floor operations',
            'Reactive maintenance and quality issues',
            'Inefficient inventory and supply chain management'
          ]
        }}
        after={{
          title: 'With CogniForge ERP',
          points: [
            'Integrated business processes and real-time data flow',
            'AI-powered production optimization and scheduling',
            'Complete shop floor visibility and control',
            'Predictive maintenance and proactive quality management',
            'Optimized inventory levels and streamlined supply chain'
          ]
        }}
      />

      {/* ERP Module Interconnection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ERP Module Interconnection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How ERP modules work together to streamline manufacturing operations
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Order to Fulfillment Process Flow
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sales Order</h4>
                <p className="text-sm text-gray-600">Customer places order through CRM system</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Production Planning</h4>
                <p className="text-sm text-gray-600">MRP calculates material requirements and schedules production</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Shop Floor Execution</h4>
                <p className="text-sm text-gray-600">MES manages production execution and quality control</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Fulfillment</h4>
                <p className="text-sm text-gray-600">Logistics manages shipping and delivery to customer</p>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Key Integration Benefits</h4>
              <p className="text-gray-700 leading-relaxed">
                The ERP system creates a seamless flow of information across all departments, eliminating data silos and ensuring everyone works with the same up-to-date information. This integration enables real-time visibility into operations, improves decision-making, and reduces errors from manual data entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArchitectureDiagram productName="CogniForge" />
      <CTASection />
      </Suspense>
    </PageLayout>
  );
}