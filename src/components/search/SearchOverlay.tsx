import { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import sampleVideo1 from '@/assets/sample-video-1.jpg';
import sampleVideo2 from '@/assets/sample-video-2.jpg';
import sampleVideo3 from '@/assets/sample-video-3.jpg';

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

const popularSearches = [
  'Fire Logo Animation',
  'Neon Glitch Effect',
  'Gold Particles',
  '3D Logo Reveal',
  'Diamond Glass',
];

const recentProducts = [
  { id: 1, name: 'Fire Explosion', image: sampleVideo1, price: 29 },
  { id: 2, name: 'Neon Glitch', image: sampleVideo2, price: 24 },
  { id: 3, name: 'Diamond Shatter', image: sampleVideo3, price: 34 },
];

const SearchOverlay = ({ open, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState('');

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Search Input */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for logo animations..."
              className="w-full pl-16 pr-6 py-5 text-xl rounded-2xl border-2 border-border bg-background focus:outline-none focus:border-primary transition-colors"
              autoFocus
            />
          </div>

          {/* Popular Searches */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-4">
              Popular Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => setQuery(search)}
                  className="px-4 py-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Products */}
          <div className="mt-12">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-4">
              Trending Products
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {recentProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="group"
                >
                  <div className="relative rounded-xl overflow-hidden mb-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <p className="font-medium text-sm">{product.name}</p>
                  <p className="text-secondary font-bold">${product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
