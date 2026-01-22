import { Play } from 'lucide-react';
import productsData from '@/data/products.json';

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

const CustomerWorkSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Customer's Work</h2>
          <p className="section-subtitle">
            See how our clients are using Digital Work animations to elevate their brands
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {productsData.featuredVideos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={imageMap[video.image] || sampleVideo1}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-7 h-7 text-primary fill-primary ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-display font-semibold">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerWorkSection;
