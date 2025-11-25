import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { GetStartedHero } from '@/components/get-started/GetStartedHero';
import { OnboardingProcess } from '@/components/get-started/OnboardingProcess';
import { PricingPlans } from '@/components/get-started/PricingPlans';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Get Started - Cogniwide | Begin Your AI Transformation',
  description: 'Start your AI transformation journey with Cogniwide. Learn about our onboarding process, pricing plans, and how to get started.',
};

export default function GetStartedPage() {
  return (
    <PageLayout>
      <GetStartedHero />
      <OnboardingProcess />
      <PricingPlans />
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark-grey mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-brand-medium-grey">Contact us to begin your AI transformation journey.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </PageLayout>
  );
}