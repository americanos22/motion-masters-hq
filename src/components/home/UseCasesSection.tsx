import {
  Youtube,
  Instagram,
  Globe,
  Presentation,
  Tv,
} from 'lucide-react';
import BenefitCard from '@/components/common/BenefitCard';

const useCases = [
  {
    icon: Youtube,
    title: 'YouTube Intros',
    description: 'Create professional channel intros that hook viewers from the first second.',
  },
  {
    icon: Instagram,
    title: 'Social Media',
    description: 'Stand out on Instagram, TikTok, and Facebook with animated brand content.',
  },
  {
    icon: Globe,
    title: 'Website Headers',
    description: 'Add dynamic animated logos to your website for an impressive first impression.',
  },
  {
    icon: Presentation,
    title: 'Presentations',
    description: 'Elevate your business presentations with professional animated branding.',
  },
  {
    icon: Tv,
    title: 'Advertisements',
    description: 'Create memorable video ads that capture attention and drive conversions.',
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Where Can I Use Animated Logo?</h2>
          <p className="section-subtitle">
            Your animated logo works everywhere you need to make an impact
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <BenefitCard key={index} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
