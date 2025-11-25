'use client'
import Image from 'next/image';
import Section from '@/components/layout/Section';

const CogniAgentDiagram = () => {
  return (
    <Section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            CogniAgent Architecture
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A visual overview of the CogniAgent platform architecture.
          </p>
        </div>
        <div className="bg-black p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-white text-center mb-8">CogniAgent Architecture Diagram</h3>
          <Image
            src="/images/xcelearate-architechture.svg"
            alt="CogniAgent Architecture Diagram"
            width={1200}
            height={800}
            layout="responsive"
          />
        </div>
      </div>
    </Section>
  );
};

export default CogniAgentDiagram;