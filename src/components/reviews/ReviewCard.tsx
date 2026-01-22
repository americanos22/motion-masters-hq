import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  avatar?: string;
  date?: string;
}

const ReviewCard = ({ name, rating, review, avatar, date }: ReviewCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card">
      <div className="flex items-center gap-4 mb-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="font-display font-bold text-primary text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-semibold">{name}</h4>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? 'text-secondary fill-secondary'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{review}</p>
      {date && (
        <p className="text-xs text-muted-foreground/60 mt-3">{date}</p>
      )}
    </div>
  );
};

export default ReviewCard;
