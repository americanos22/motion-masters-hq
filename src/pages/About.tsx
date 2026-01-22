import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Monitor } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "200+ Animation Effects",
    description: "Choose from our extensive library of premium logo animation templates.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround (24–72 hours)",
    description: "Get your animated logo videos delivered quickly to your inbox.",
  },
  {
    icon: Monitor,
    title: "HD & 4K Options",
    description: "High-quality video exports perfect for any platform or screen size.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 uppercase tracking-tight">
              ABOUT DIGITAL WORK
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We help brands bring their logos to life with high-quality animated logo videos designed for social media, ads, websites, and presentations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-12 uppercase">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-display font-bold uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 uppercase">
              How We're Different
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Instead of complicated custom animation projects, we offer an easy, streamlined process: choose an effect, upload your logo, checkout, and receive your finished video by email.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 uppercase">
              Ready to Get Started?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg" className="rounded-full">
                <Link to="/categories">SHOP ANIMATION EFFECTS</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/contact">CONTACT US</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
