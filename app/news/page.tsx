import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { NewsHero } from '@/components/news/NewsHero';
import { NewsGrid } from '@/components/news/NewsGrid';
import { PressReleases } from '@/components/news/PressReleases';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'News & Press - Cogniwide | Latest Updates',
  description: 'Stay updated with the latest news, press releases, and announcements from Cogniwide.',
};

export default function NewsPage() {
  return (
    <PageLayout>
      <NewsHero />
      <NewsGrid />
      <PressReleases />
      <CTASection />
    </PageLayout>
  );
}