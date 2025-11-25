import PageLayout from '@/components/layout/PageLayout'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata = {
  title: 'Contact Us - Get Started with Enterprise AI | Cogniwide',
  description: 'Ready to transform your business with AI? Contact our experts for a consultation and discover how our solutions can accelerate your digital transformation.',
  keywords: 'contact, consultation, enterprise AI, digital transformation, AI solutions',
}

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
    </PageLayout>
  )
}