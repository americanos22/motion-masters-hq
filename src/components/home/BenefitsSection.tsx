import {
  Zap,
  Award,
  Clock,
  Palette,
  Shield,
} from 'lucide-react';
import BenefitCard from '@/components/common/BenefitCard';

const benefits = [
  {
    icon: Zap,
    title: 'Stand Out',
    description: 'Capture attention instantly with eye-catching animated logos that make your brand memorable.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Professional-grade animations created with industry-standard tools and techniques.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Get your animated logo in 72 hours or less. Rush delivery available for urgent projects.',
  },
  {
    icon: Palette,
    title: '200+ Effects',
    description: 'Choose from a vast library of animation styles including fire, neon, 3D, particles, and more.',
  },
  {
    icon: Shield,
    title: 'Commercial License',
    description: 'Full commercial rights included. Use your animation anywhere without restrictions.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Benefits of Animated Logo</h2>
          <p className="section-subtitle">
            Transform your static logo into a captivating visual experience
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
