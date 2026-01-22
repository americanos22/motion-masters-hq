import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import sampleVideo1 from '@/assets/sample-video-1.jpg';
import sampleVideo2 from '@/assets/sample-video-2.jpg';
import sampleVideo3 from '@/assets/sample-video-3.jpg';
import sampleVideo4 from '@/assets/sample-video-4.jpg';
import sampleVideo5 from '@/assets/sample-video-5.jpg';
import sampleVideo6 from '@/assets/sample-video-6.jpg';

// Generate mock products
const generateProducts = (categorySlug: string) => {
  const images = [sampleVideo1, sampleVideo2, sampleVideo3, sampleVideo4, sampleVideo5, sampleVideo6];
  return Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Sample ${1000 + i + (categorySlug.length * 100)}`,
    image: images[i % images.length],
    price: 24 + (i % 5) * 5,
    originalPrice: 39 + (i % 5) * 8,
  }));
};

const categoryNames: Record<string, string> = {
  'new-release': 'New Release',
  'best-sellers': 'Best Sellers',
  'cgi': 'CGI Videos',
  'fire': 'Fire Effects',
  'glitch': 'Glitch Effects',
  'neon': 'Neon Effects',
  'gold': 'Gold Effects',
  'diamond': 'Diamond / Glass',
  'smoke': 'Smoke Effects',
  'particle': 'Particle Effects',
  'tech': 'Technology / AI',
};

const Collection = () => {
  const { slug } = useParams<{ slug: string }>();
  const categoryName = categoryNames[slug || ''] || slug?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Collection';
  const products = generateProducts(slug || '');

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Categories
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="section-title text-left mb-4">{categoryName}</h1>
            <p className="text-muted-foreground text-lg">
              {products.length} templates available
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="default" size="sm" className="min-w-[40px]">
              1
            </Button>
            <Button variant="outline" size="sm" className="min-w-[40px]">
              2
            </Button>
            <Button variant="outline" size="sm" className="min-w-[40px]">
              3
            </Button>
            <span className="px-2 text-muted-foreground">...</span>
            <Button variant="outline" size="sm" className="min-w-[40px]">
              12
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collection;
