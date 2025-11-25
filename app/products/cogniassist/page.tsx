import PageLayout from '@/components/layout/PageLayout'
import ProductHero from '@/components/products/ProductHero'
import FeatureShowcase from '@/components/products/FeatureShowcase'
import UseCases from '@/components/products/UseCases'
import InteractiveDemo from '@/components/products/InteractiveDemo'
import BeforeAfterComparison from '@/components/products/BeforeAfterComparison'
import ArchitectureDiagram from '@/components/products/ArchitectureDiagram'

export const metadata = {
  title: 'CogniAssist - No-Code Conversational AI Platform | Cogniwide',
  description: 'Build intelligent conversations without code. Deploy enterprise-grade chatbots and virtual assistants across multiple channels with CogniAssist.',
  keywords: 'conversational AI, chatbot platform, no-code AI, virtual assistant, enterprise chatbot',
}

export default function CogniAssistPage() {
  const heroData = {
    title: 'Build Intelligent Conversations Without Code',
    subtitle: 'Deploy enterprise-grade chatbots and virtual assistants across multiple channels with our intuitive no-code platform.',
    primaryCTA: 'Start Free Trial',
    secondaryCTA: 'Watch Demo',
    backgroundPattern: 'chat' as const
  }

  const features = [
    {
      title: 'Visual Conversation Builder',
      description: 'Design complex conversation flows with our intuitive drag-and-drop interface. No coding required.',
      icon: 'chat-bubble',
      benefits: ['Reduce development time by 80%', 'Enable non-technical teams', 'Rapid prototyping and iteration']
    },
    {
      title: 'Multi-Channel Deployment',
      description: 'Deploy your AI assistants across web, mobile, WhatsApp, Slack, and 20+ other channels.',
      icon: 'device-mobile',
      benefits: ['Unified customer experience', 'Single source of truth', 'Consistent brand voice']
    },
    {
      title: 'Enterprise Integrations',
      description: 'Connect seamlessly with your existing CRM, ERP, and business systems.',
      icon: 'cog',
      benefits: ['Real-time data access', 'Automated workflows', 'Enhanced productivity']
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain insights into conversation performance, user satisfaction, and business impact.',
      icon: 'chart-bar',
      benefits: ['Data-driven optimization', 'ROI measurement', 'Performance tracking']
    }
  ]

  const useCases: Array<{
    title: string
    description: string
    metrics: Record<string, string>
    industry: string
  }> = [
    {
      title: 'Customer Service Automation',
      description: 'Handle 80% of customer inquiries automatically while maintaining high satisfaction scores.',
      metrics: { 
        'Efficiency': '80%', 
        'Satisfaction': '95%', 
        'Cost Reduction': '60%' 
      },
      industry: 'All Industries'
    },
    {
      title: 'Internal Helpdesk',
      description: 'Empower employees with instant access to HR policies, IT support, and company information.',
      metrics: { 
        'Response Time': '< 30s', 
        'Resolution Rate': '75%', 
        'Employee Satisfaction': '90%' 
      },
      industry: 'Enterprise'
    },
    {
      title: 'Sales Qualification',
      description: 'Qualify leads 24/7 and route high-value prospects to your sales team automatically.',
      metrics: { 
        'Lead Qualification': '3x faster', 
        'Conversion Rate': '+25%', 
        'Sales Productivity': '+40%' 
      },
      industry: 'B2B Sales'
    }
  ]

  return (
    <PageLayout>
      <ProductHero {...heroData} />
      <FeatureShowcase features={features} />
      <InteractiveDemo 
        productName="CogniAssist"
        title="Experience CogniAssist in Action"
        description="Try our conversation builder and see how easy it is to create intelligent chatbots."
        demoType="chatbot-builder"
      />
      <UseCases cases={useCases} />
      <BeforeAfterComparison 
        productName="CogniAssist"
        before={{
          title: 'Traditional Support Systems',
          points: [
            'Slow response times with manual ticket routing',
            'Limited knowledge base with outdated information',
            'Inconsistent support quality across agents',
            'Repetitive issues requiring manual resolution',
            'High support costs with limited scalability'
          ]
        }}
        after={{
          title: 'With CogniAssist',
          points: [
            'Instant AI-powered response and intelligent routing',
            'Self-updating knowledge base with continuous learning',
            'Consistent high-quality support with AI assistance',
            'Automated resolution for common issues',
            'Dramatically reduced support costs with infinite scalability'
          ]
        }}
      />
      <ArchitectureDiagram productName="CogniAssist" />
    </PageLayout>
  )
}