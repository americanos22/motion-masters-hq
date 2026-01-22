import { Play } from 'lucide-react';
import customerWorkGrid from '@/assets/customer-work-grid.jpg';
import sampleVideo1 from '@/assets/sample-video-1.jpg';
import sampleVideo2 from '@/assets/sample-video-2.jpg';
import sampleVideo3 from '@/assets/sample-video-3.jpg';
import sampleVideo4 from '@/assets/sample-video-4.jpg';
import sampleVideo5 from '@/assets/sample-video-5.jpg';
import sampleVideo6 from '@/assets/sample-video-6.jpg';

const videos = [
  { id: 1, image: sampleVideo1, title: 'Fire Explosion' },
  { id: 2, image: sampleVideo2, title: 'Neon Glitch' },
  { id: 3, image: sampleVideo3, title: 'Diamond Shatter' },
  { id: 4, image: sampleVideo4, title: 'Electric Energy' },
  { id: 5, image: sampleVideo5, title: 'Smoke Reveal' },
  { id: 6, image: sampleVideo6, title: 'Gold Particles' },
];

const CustomerWorkSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Customer's Work</h2>
          <p className="section-subtitle">
            See how our clients are using Cheese Motion animations to elevate their brands
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={video.image}
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
