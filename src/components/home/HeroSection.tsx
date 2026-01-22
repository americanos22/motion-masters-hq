import { Link } from 'react-router-dom';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Logo Animation Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(261,60%,15%)/95] via-[hsl(261,50%,20%)/80] to-[hsl(261,40%,25%)/60]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(261,60%,10%)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-white/90 text-sm font-medium">Over 200+ Animation Effects</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase mb-6 animate-fade-in animation-delay-100">
            Bring Your
            <span className="block text-gradient">Logo to Life</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl animate-fade-in animation-delay-200">
            Premium custom logo animations & 3D intro videos. Transform your brand with stunning visual effects that captivate your audience.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/categories">
                <Play className="w-5 h-5 fill-current" />
                Shop Logo Animation
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/categories">
                Browse Categories
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-white">200+</p>
              <p className="text-white/60 text-sm">Animation Effects</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-white">10K+</p>
              <p className="text-white/60 text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-white">72h</p>
              <p className="text-white/60 text-sm">Delivery Time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
