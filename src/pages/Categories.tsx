import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/products/CategoryCard';
import sampleVideo1 from '@/assets/sample-video-1.jpg';
import sampleVideo2 from '@/assets/sample-video-2.jpg';
import sampleVideo3 from '@/assets/sample-video-3.jpg';
import sampleVideo4 from '@/assets/sample-video-4.jpg';
import sampleVideo5 from '@/assets/sample-video-5.jpg';
import sampleVideo6 from '@/assets/sample-video-6.jpg';

const categories = [
  { name: 'New Release', slug: 'new-release', image: sampleVideo1, count: 25 },
  { name: 'Best Sellers', slug: 'best-sellers', image: sampleVideo2, count: 50 },
  { name: 'CGI Videos', slug: 'cgi', image: sampleVideo3, count: 35 },
  { name: 'Popular on Ads', slug: 'ads', image: sampleVideo4, count: 28 },
  { name: '4K Ultra HD', slug: '4k', image: sampleVideo5, count: 42 },
  { name: 'Fire', slug: 'fire', image: sampleVideo1, count: 18 },
  { name: 'Glitch', slug: 'glitch', image: sampleVideo2, count: 22 },
  { name: 'Neon', slug: 'neon', image: sampleVideo2, count: 30 },
  { name: 'Gold', slug: 'gold', image: sampleVideo6, count: 24 },
  { name: 'Colors', slug: 'colors', image: sampleVideo4, count: 15 },
  { name: 'Crash / Smashing', slug: 'crash', image: sampleVideo3, count: 12 },
  { name: 'Music', slug: 'music', image: sampleVideo5, count: 20 },
  { name: 'Construction', slug: 'construction', image: sampleVideo1, count: 8 },
  { name: 'Marble', slug: 'marble', image: sampleVideo3, count: 10 },
  { name: 'Diamond / Glass', slug: 'diamond', image: sampleVideo3, count: 16 },
  { name: 'Nature', slug: 'nature', image: sampleVideo5, count: 14 },
  { name: 'Car', slug: 'car', image: sampleVideo4, count: 9 },
  { name: 'Bike', slug: 'bike', image: sampleVideo1, count: 7 },
  { name: 'Gym / Fitness', slug: 'gym', image: sampleVideo4, count: 11 },
  { name: 'Crypto / Money', slug: 'crypto', image: sampleVideo6, count: 13 },
  { name: 'Animal / Wildlife', slug: 'animal', image: sampleVideo5, count: 19 },
  { name: 'Food', slug: 'food', image: sampleVideo6, count: 8 },
  { name: 'Holiday / Travel', slug: 'travel', image: sampleVideo5, count: 15 },
  { name: 'Particle', slug: 'particle', image: sampleVideo6, count: 28 },
  { name: 'Smoke', slug: 'smoke', image: sampleVideo5, count: 17 },
  { name: 'Technology / AI', slug: 'tech', image: sampleVideo4, count: 32 },
  { name: 'Water', slug: 'water', image: sampleVideo4, count: 14 },
  { name: 'Real Estate', slug: 'real-estate', image: sampleVideo1, count: 12 },
  { name: 'Sports', slug: 'sports', image: sampleVideo4, count: 21 },
  { name: 'Christmas', slug: 'christmas', image: sampleVideo6, count: 18 },
  { name: 'Photography', slug: 'photography', image: sampleVideo3, count: 10 },
  { name: 'Television', slug: 'television', image: sampleVideo2, count: 8 },
  { name: 'New Year', slug: 'new-year', image: sampleVideo6, count: 12 },
  { name: 'Festivals', slug: 'festivals', image: sampleVideo6, count: 20 },
  { name: 'Others', slug: 'others', image: sampleVideo1, count: 45 },
];

const Categories = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="section-title mb-4">Animation Effect Categories</h1>
            <p className="section-subtitle">
              Choose from 200+ stunning animation effects to bring your logo to life
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} {...category} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
