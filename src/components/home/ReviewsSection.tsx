import ReviewCard from '@/components/reviews/ReviewCard';

const reviews = [
  {
    name: 'Sarah Mitchell',
    rating: 5,
    review: 'Absolutely stunning animation! My clients are blown away by the quality. The turnaround time was incredibly fast and the team was very responsive.',
    date: '2 days ago',
  },
  {
    name: 'Michael Chen',
    rating: 5,
    review: 'Best investment for my brand. The 3D intro video looks incredibly professional and really sets my content apart from the competition.',
    date: '1 week ago',
  },
  {
    name: 'Emily Rodriguez',
    rating: 5,
    review: 'Amazing quality and super fast delivery. I ordered the fire explosion effect and it exceeded all my expectations. Highly recommend!',
    date: '2 weeks ago',
  },
];

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
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-primary">4.9</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-primary">10,000+</p>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-primary">98%</p>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
