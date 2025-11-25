import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { ResourcesHero } from '@/components/resources/ResourcesHero';
import { ResourceCategories } from '@/components/resources/ResourceCategories';
import { FeaturedResources } from '@/components/resources/FeaturedResources';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Resources - Cogniwide | AI Knowledge Hub',
  description: 'Access our comprehensive library of AI resources including whitepapers, case studies, webinars, and industry insights.',
};

export default function ResourcesPage() {
  return (
    <PageLayout>
      <ResourcesHero />
      <ResourceCategories />
      <FeaturedResources />
      <CTASection />
    </PageLayout>
  );
}