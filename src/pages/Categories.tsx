import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/products/CategoryCard';
import categoriesData from '@/data/categories.json';

// Import images for mapping
import sampleVideo1 from '@/assets/sample-video-1.jpg';
import sampleVideo2 from '@/assets/sample-video-2.jpg';
import sampleVideo3 from '@/assets/sample-video-3.jpg';
import sampleVideo4 from '@/assets/sample-video-4.jpg';
import sampleVideo5 from '@/assets/sample-video-5.jpg';
import sampleVideo6 from '@/assets/sample-video-6.jpg';

// Map image paths to actual imports
const imageMap: Record<string, string> = {
  '/assets/sample-video-1.jpg': sampleVideo1,
  '/assets/sample-video-2.jpg': sampleVideo2,
  '/assets/sample-video-3.jpg': sampleVideo3,
  '/assets/sample-video-4.jpg': sampleVideo4,
  '/assets/sample-video-5.jpg': sampleVideo5,
  '/assets/sample-video-6.jpg': sampleVideo6,
};

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
            {categoriesData.categories.map((category) => (
              <CategoryCard 
                key={category.slug} 
                name={category.name}
                slug={category.slug}
                image={imageMap[category.image] || sampleVideo1}
                count={category.count}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
