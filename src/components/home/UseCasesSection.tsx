import {
  Youtube,
  Instagram,
  Globe,
  Presentation,
  Tv,
  LucideIcon,
} from 'lucide-react';
import BenefitCard from '@/components/common/BenefitCard';
import siteData from '@/data/site.json';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Youtube,
  Instagram,
  Globe,
  Presentation,
  Tv,
};

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
          {siteData.useCases.map((useCase, index) => (
            <BenefitCard 
              key={index} 
              icon={iconMap[useCase.icon] || Globe}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
