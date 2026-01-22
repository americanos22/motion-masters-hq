import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const DemoReelSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              See the Magic
              <span className="block text-gradient">Behind the Scenes</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Watch how we transform simple logos into stunning animated masterpieces. Our team of professional motion designers uses cutting-edge software to bring your brand to life.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
                <span>Upload your logo (PNG or JPG)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs font-bold">2</span>
                </div>
                <span>Choose your animation effect</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs font-bold">3</span>
                </div>
                <span>Receive your video in 72 hours</span>
              </li>
            </ul>
            <Button variant="hero" size="xl" asChild>
              <Link to="/categories">
                Start Creating
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Video Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroBg}
                alt="Demo Reel"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform animate-pulse-glow">
                  <svg
                    className="w-8 h-8 text-primary ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-secondary/20 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoReelSection;
