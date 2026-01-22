import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingCardProps {
  title: string;
  videos: number;
  price: number;
  originalPrice: number;
  featured?: boolean;
  features?: string[];
}

const PricingCard = ({
  title,
  videos,
  price,
  originalPrice,
  featured = false,
  features = [],
}: PricingCardProps) => {
  const discount = Math.round((1 - price / originalPrice) * 100);

  return (
    <div className={`pricing-card ${featured ? 'featured' : ''} flex flex-col`}>
      {featured && (
        <div className="bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider py-2 text-center rounded-t-3xl -mt-8 -mx-8 mb-6">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="font-display text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">
          {videos} {videos === 1 ? 'Video' : 'Videos'}
        </p>
      </div>

      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-4xl font-display font-bold">${price}</span>
          <span className="text-lg text-muted-foreground line-through">${originalPrice}</span>
        </div>
        <span className="inline-block bg-secondary/10 text-secondary text-sm font-bold px-3 py-1 rounded-full">
          Save {discount}%
        </span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.length > 0 ? (
          features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm">
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))
        ) : (
          <>
            <li className="flex items-center gap-3 text-sm">
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>High quality 1080p video</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>72-hour turnaround</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>Free revision included</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>Commercial license</span>
            </li>
          </>
        )}
      </ul>

      <Button
        variant={featured ? 'cta' : 'ctaOutline'}
        size="xl"
        className="w-full"
      >
        Buy Now
      </Button>
    </div>
  );
};

export default PricingCard;
