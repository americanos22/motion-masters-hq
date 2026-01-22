import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount?: number;
}

const ProductCard = ({ id, name, image, price, originalPrice, discount }: ProductCardProps) => {
  const discountPercent = discount || Math.round((1 - price / originalPrice) * 100);

  return (
    <Link to={`/product/${id}`} className="product-card group block">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Sale Badge */}
        <div className="badge-sale">
          Save {discountPercent}%
        </div>

        {/* Play Overlay */}
        <div className="play-overlay">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
            <Play className="w-7 h-7 text-primary fill-primary ml-1" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-secondary">${price}</span>
          <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
