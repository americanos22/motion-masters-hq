import ReviewCard from '@/components/reviews/ReviewCard';
import siteData from '@/data/site.json';

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">What Our Customers Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied customers who transformed their brands
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteData.reviews.items.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-primary">{siteData.reviews.stats.averageRating}</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-primary">{siteData.reviews.stats.totalCustomers}</p>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-primary">{siteData.reviews.stats.satisfactionRate}</p>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
