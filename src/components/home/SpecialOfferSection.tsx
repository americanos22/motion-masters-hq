import PricingCard from '@/components/pricing/PricingCard';

const pricingPlans = [
  {
    title: 'Starter',
    videos: 1,
    price: 29,
    originalPrice: 49,
    featured: false,
  },
  {
    title: 'Duo Pack',
    videos: 2,
    price: 49,
    originalPrice: 89,
    featured: false,
  },
  {
    title: 'Triple Deal',
    videos: 3,
    price: 69,
    originalPrice: 129,
    featured: true,
  },
  {
    title: 'Pro Pack',
    videos: 5,
    price: 99,
    originalPrice: 199,
    featured: false,
  },
  {
    title: 'Agency',
    videos: 10,
    price: 179,
    originalPrice: 399,
    featured: false,
  },
];

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
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
