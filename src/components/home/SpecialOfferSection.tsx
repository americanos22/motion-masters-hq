import PricingCard from '@/components/pricing/PricingCard';
import pricingData from '@/data/pricing.json';

const SpecialOfferSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Today's Special Offer</h2>
          <p className="section-subtitle">
            Bundle and save! Get more animations at incredible discounts
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pricingData.plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
