import {
  Zap,
  Award,
  Clock,
  Palette,
  Shield,
  LucideIcon,
} from 'lucide-react';
import BenefitCard from '@/components/common/BenefitCard';
import siteData from '@/data/site.json';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Zap,
  Award,
  Clock,
  Palette,
  Shield,
};

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
          {siteData.benefits.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              icon={iconMap[benefit.icon] || Zap}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
