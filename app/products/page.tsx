import { Metadata } from 'next'
import PageLayout from '@/components/layout/PageLayout'
import ProductHero from '@/components/products/ProductHero'
import ProductCategories from '@/components/products/ProductCategories'
import ProductIntegration from '@/components/products/ProductIntegration'
import ProductTechnologyStack from '@/components/products/ProductTechnologyStack'

export const metadata: Metadata = {
  title: 'Enterprise AI Products - Intelligent Automation | Cogniwide',
  description: 'Discover our comprehensive suite of AI products including CogniAgent, CogniKube, and CogniInsights for enterprise automation and intelligence.',
  keywords: 'AI products, enterprise automation, CogniAgent, CogniKube, CogniInsights, intelligent automation, AI platform',
  openGraph: {
    title: 'Enterprise AI Products | Cogniwide',
    description: 'Transform your enterprise with our comprehensive AI product suite designed for intelligent automation.',
    url: 'https://cogniwide.com/products',
  },
}

export default function ProductsPage() {
  return (
    <PageLayout>
      <ProductHero 
        title="Enterprise AI Products"
        subtitle="Transform your business with our comprehensive suite of AI-powered products designed for intelligent automation and advanced analytics"
        primaryCTA="Explore Products"
        secondaryCTA="Schedule Demo"
      />
      <ProductCategories />
      <ProductIntegration />
      <ProductTechnologyStack />
    </PageLayout>
  )
}