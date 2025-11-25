import PageLayout from '@/components/layout/PageLayout'
import ProductHero from '@/components/products/ProductHero'
import FeatureShowcase from '@/components/products/FeatureShowcase'
import UseCases from '@/components/products/UseCases'
import InteractiveDemo from '@/components/products/InteractiveDemo'
import ArchitectureDiagram from '@/components/products/ArchitectureDiagram'
import BeforeAfterComparison from '@/components/products/BeforeAfterComparison'

export const metadata = {
  title: 'CogniXcellerate - Enterprise Agentic AI Platform | Cogniwide',
  description: 'Orchestrate AI agents at enterprise scale. Deploy, manage, and scale intelligent automation across your entire organization with CogniXcellerate.',
  keywords: 'agentic AI, AI orchestration, enterprise automation, AI agents, workflow automation, intelligent agents',
}

export default function CogniXcelleratePage() {
  const heroData = {
    title: 'Orchestrate AI Agents at Enterprise Scale',
    subtitle: 'Deploy, manage, and scale intelligent automation across your entire organization with our enterprise-grade agentic AI platform.',
    primaryCTA: 'Request Demo',
    secondaryCTA: 'View Architecture',
    backgroundPattern: 'agents' as const
  }

  const features = [
    {
      title: 'Agent Orchestration',
      description: 'Coordinate multiple AI agents to work together seamlessly across complex business processes.',
      icon: 'cog',
      benefits: ['Multi-agent coordination', 'Process optimization', 'Scalable architecture']
    },
    {
      title: 'Workflow Automation',
      description: 'Automate end-to-end business processes with intelligent decision-making and exception handling.',
      icon: 'chart-bar',
      benefits: ['End-to-end automation', 'Smart routing', 'Exception management']
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time visibility into agent performance, resource utilization, and business impact.',
      icon: 'device-mobile',
      benefits: ['Real-time dashboards', 'Performance analytics', 'Resource optimization']
    },
    {
      title: 'Enterprise Integration',
      description: 'Connect with existing enterprise systems, databases, and third-party applications.',
      icon: 'chat-bubble',
      benefits: ['API connectivity', 'Data synchronization', 'Legacy system integration']
    }
  ]

  const useCases: Array<{
    title: string
    description: string
    metrics: Record<string, string>
    industry: string
  }> = [
    {
      title: 'Process Automation',
      description: 'Automate complex multi-step processes across departments with intelligent routing and decision-making.',
      metrics: { 
        'Process Efficiency': '+85%', 
        'Error Reduction': '90%', 
        'Processing Time': '-70%' 
      },
      industry: 'Manufacturing'
    },
    {
      title: 'Decision Support',
      description: 'Provide real-time insights and recommendations to support critical business decisions.',
      metrics: { 
        'Decision Speed': '5x faster', 
        'Accuracy': '95%', 
        'Cost Reduction': '40%' 
      },
      industry: 'Financial Services'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Continuously monitor operations for compliance violations and automatically trigger corrective actions.',
      metrics: { 
        'Compliance Rate': '99.8%', 
        'Audit Time': '-60%', 
        'Risk Reduction': '80%' 
      },
      industry: 'Healthcare'
    }
  ]

  return (
    <PageLayout>
      <ProductHero {...heroData} />
      <FeatureShowcase features={features} />
      <ArchitectureDiagram productName="CogniXcellerate" />
      <InteractiveDemo 
        productName="CogniXcellerate"
        title="See Agent Orchestration in Action"
        description="Experience how multiple AI agents collaborate to automate complex business processes."
        demoType="agent-workflow"
      />
      <UseCases cases={useCases} />
      <BeforeAfterComparison 
        productName="CogniXcellerate"
        before={{
          title: 'Traditional Development',
          points: [
            'Manual code writing and debugging',
            'Time-consuming testing and validation',
            'Slow iteration and deployment cycles',
            'Limited reuse of existing components',
            'High development costs and technical debt'
          ]
        }}
        after={{
          title: 'With CogniXcellerate',
          points: [
            'AI-powered code generation and optimization',
            'Automated testing and quality assurance',
            'Rapid iteration and continuous deployment',
            'Intelligent component reuse and adaptation',
            'Dramatically reduced development costs and technical debt'
          ]
        }}
      />
    </PageLayout>
  )
}