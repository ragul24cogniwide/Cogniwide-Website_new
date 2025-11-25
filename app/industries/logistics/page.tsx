import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { IndustryHero } from '@/components/industries/IndustryHero';
import { ChallengesSolutions } from '@/components/industries/ChallengesSolutions';
import AIAgentSections from '@/components/industries/AIAgentSections';
import { industryAgentData } from '@/components/industries/industryAgentData';
import { CTASection } from '@/components/home/CTASection';
import { TruckIcon, CubeIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Logistics & Supply Chain AI Solutions | Cogniwide',
  description: 'Optimize logistics operations with AI-powered route optimization, demand forecasting, and supply chain automation.',
  keywords: ['logistics AI', 'supply chain optimization', 'route planning', 'demand forecasting', 'warehouse automation'],
};

const logisticsChallenges = [
  {
    title: 'Route Optimization & Fleet Management',
    description: 'Complex routing decisions across multiple variables including traffic, weather, delivery windows, and vehicle capacity lead to inefficient operations.',
    impact: 'Poor route optimization increases fuel costs by 20-30% and reduces delivery efficiency, costing the industry $87 billion annually.',
    solution: 'AI-powered route optimization considers real-time variables to create optimal delivery routes while predictive maintenance keeps fleets operational.',
    benefits: [
      'Reduce fuel costs by 25%',
      'Improve delivery efficiency by 35%',
      'Increase fleet utilization by 30%',
      'Reduce maintenance costs by 40%'
    ]
  },
  {
    title: 'Demand Forecasting & Inventory Management',
    description: 'Inaccurate demand forecasting leads to stockouts, excess inventory, and poor supply chain coordination across global networks.',
    impact: 'Poor demand forecasting costs retailers $1.1 trillion globally in excess inventory and stockouts, with 43% overstock and 8% stockout rates.',
    solution: 'Machine learning models analyze historical data, market trends, and external factors to predict demand and optimize inventory levels.',
    benefits: [
      'Improve forecast accuracy by 45%',
      'Reduce inventory costs by 30%',
      'Decrease stockouts by 50%',
      'Optimize warehouse space utilization'
    ]
  },
  {
    title: 'Supply Chain Visibility & Risk Management',
    description: 'Limited visibility across complex global supply chains makes it difficult to identify risks, track shipments, and respond to disruptions.',
    impact: 'Supply chain disruptions cost companies an average of $184 million annually, with 73% experiencing disruptions in the past year.',
    solution: 'AI-powered supply chain analytics provide real-time visibility, predict disruptions, and recommend mitigation strategies.',
    benefits: [
      'Improve supply chain visibility by 60%',
      'Reduce disruption impact by 40%',
      'Accelerate issue resolution by 70%',
      'Optimize supplier performance'
    ]
  }
];

const complianceRequirements = [
  {
    name: 'DOT Regulations',
    description: 'Department of Transportation regulations for vehicle safety, driver hours, and hazardous materials transport.',
    aiSolution: 'Automated compliance monitoring for driver hours, vehicle inspections, and hazmat handling with real-time alerts and reporting.',
    benefits: [
      'Automated hours of service tracking',
      'Vehicle inspection scheduling',
      'Hazmat compliance monitoring',
      'Safety performance optimization'
    ]
  },
  {
    name: 'Customs & Trade',
    description: 'International trade regulations including customs documentation, duty calculations, and trade compliance.',
    aiSolution: 'AI-powered customs documentation, automated duty calculations, and trade compliance monitoring for global shipments.',
    benefits: [
      'Automated customs documentation',
      'Duty optimization strategies',
      'Trade compliance monitoring',
      'Reduced customs delays'
    ]
  }
];

const successMetrics = [
  {
    label: 'Fuel Savings',
    value: '25%',
    description: 'Reduction in fuel costs through route optimization',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    trend: 'down' as const,
    color: 'green' as const
  },
  {
    label: 'Delivery Efficiency',
    value: '35%',
    description: 'Improvement in on-time delivery rates',
    icon: <TruckIcon className="w-6 h-6" />,
    trend: 'up' as const,
    color: 'blue' as const
  },
  {
    label: 'Inventory Accuracy',
    value: '92%',
    description: 'Demand forecasting accuracy with AI',
    icon: <CubeIcon className="w-6 h-6" />,
    trend: 'up' as const,
    color: 'yellow' as const
  },
  {
    label: 'Cost Reduction',
    value: '30%',
    description: 'Overall logistics cost reduction',
    icon: <CurrencyDollarIcon className="w-6 h-6" />,
    trend: 'down' as const,
    color: 'purple' as const
  }
];

const heroStats = [
  {
    label: 'Global Logistics Market',
    value: '$12.7T',
    description: 'Total global logistics market value'
  },
  {
    label: 'Supply Chain Costs',
    value: '10-15%',
    description: 'Of total product cost from logistics'
  },
  {
    label: 'Disruption Impact',
    value: '$184M',
    description: 'Average annual cost of supply chain disruptions'
  },
  {
    label: 'Inventory Waste',
    value: '43%',
    description: 'Of inventory is excess stock'
  }
];

export default function LogisticsPage() {
  return (
    <PageLayout>
      <IndustryHero
        industry="logistics"
        title="AI-Powered Logistics Solutions"
        description="Optimize your supply chain operations with intelligent automation that reduces costs, improves efficiency, and enhances visibility across global networks."
        challenges={[
          'Complex route optimization and fleet management',
          'Inaccurate demand forecasting and inventory planning',
          'Limited supply chain visibility and risk management'
        ]}
        stats={heroStats}
      />
      
      <ChallengesSolutions challenges={logisticsChallenges} />
      
      <AIAgentSections
        industryName="Logistics"
        customerStages={industryAgentData.logistics.customerStages}
        internalAreas={industryAgentData.logistics.internalAreas}
      />
      
      <CTASection />
    </PageLayout>
  );
}