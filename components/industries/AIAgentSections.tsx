'use client';

import React from 'react';
import {
  UserGroupIcon,
  BeakerIcon,
  HeartIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  DocumentTextIcon,
  TruckIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  BuildingStorefrontIcon,
  CogIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  SignalIcon,
  DevicePhoneMobileIcon,
  WifiIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

interface AgentStage {
  stage: string;
  icon: string;
  applications: string[];
}

interface AgentArea {
  area: string;
  icon: string;
  applications: string[];
}

interface BusinessMetric {
  label: string;
  value: string;
  description: string;
}

interface AIAgentSectionsProps {
  industryName: string;
  customerExperienceTitle?: string;
  customerExperienceDescription?: string;
  customerStages: AgentStage[];
  internalOperationsTitle?: string;
  internalOperationsDescription?: string;
  internalAreas: AgentArea[];
  businessMetrics?: BusinessMetric[];
}

// Static icon map to prevent hydration mismatches
const iconMap: Record<string, React.ComponentType<any>> = {
  UserGroupIcon,
  BeakerIcon,
  HeartIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  DocumentTextIcon,
  TruckIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  BuildingStorefrontIcon,
  CogIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  SignalIcon,
  DevicePhoneMobileIcon,
  WifiIcon,
  BanknotesIcon,
};

const AIAgentSections: React.FC<AIAgentSectionsProps> = ({
  industryName,
  customerExperienceTitle = `AI Agents for Customer Experience`,
  customerExperienceDescription = `Enhance ${industryName.toLowerCase()} experiences with intelligent automation`,
  customerStages,
  internalOperationsTitle = `AI Agents for Internal Operations`,
  internalOperationsDescription = `Optimize ${industryName.toLowerCase()} operations with intelligent automation`,
  internalAreas,
  businessMetrics = [
    {
      label: "Cost Reduction",
      value: "40%",
      description: "Average operational cost savings through AI automation"
    },
    {
      label: "Efficiency Gain",
      value: "60%",
      description: "Improvement in process efficiency and speed"
    },
    {
      label: "Error Reduction",
      value: "85%",
      description: "Decrease in human errors and manual mistakes"
    },
    {
      label: "Customer Satisfaction",
      value: "95%",
      description: "Increase in customer satisfaction scores"
    }
  ]
}) => {
  // Pre-resolve all icons to ensure consistent server-client rendering
  const resolvedCustomerStages = React.useMemo(() => 
    customerStages.map(stage => {
      const IconComponent = iconMap[stage.icon];
      if (!IconComponent) {
        console.warn(`Icon ${stage.icon} not found in iconMap`);
        return { ...stage, IconComponent: UserGroupIcon };
      }
      return { ...stage, IconComponent };
    }), [customerStages]);

  const resolvedInternalAreas = React.useMemo(() => 
    internalAreas.map(area => {
      const IconComponent = iconMap[area.icon];
      if (!IconComponent) {
        console.warn(`Icon ${area.icon} not found in iconMap`);
        return { ...area, IconComponent: UserGroupIcon };
      }
      return { ...area, IconComponent };
    }), [internalAreas]);

  return (
    <div className="py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Agents Transforming {industryName}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing operations and customer experience through intelligent automation
          </p>
        </div>

        {/* Customer Experience Journey */}
        <div className="mb-20 bg-white border-2 border-yellow-400 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {customerExperienceTitle}
            </h3>
            <p className="text-gray-600">
              {customerExperienceDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {resolvedCustomerStages.map((stage, index) => {
              const { IconComponent } = stage;
              return (
                <div
                  key={stage.stage}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mb-3 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">{stage.stage}</h4>
                  <ul className="space-y-1">
                    {stage.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-xs text-gray-600 leading-relaxed">
                        • {app}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Internal Operations */}
        <div className="bg-white border-2 border-yellow-400 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {internalOperationsTitle}
            </h3>
            <p className="text-gray-600">
              {internalOperationsDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {resolvedInternalAreas.map((area, index) => {
              const { IconComponent } = area;
              return (
                <div
                  key={area.area}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mb-3 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">{area.area}</h4>
                  <ul className="space-y-1">
                    {area.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-xs text-gray-600 leading-relaxed">
                        • {app}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Business Value Metrics */}
        <div className="mt-20 bg-white border-2 border-yellow-400 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Business Value & Impact
            </h3>
            <p className="text-gray-600">
              Measurable results from AI agent implementation in {industryName.toLowerCase()}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mb-4 mx-auto hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300">
                  <span className="text-2xl font-bold text-white">{metric.value}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentSections;