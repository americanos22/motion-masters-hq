import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import heroBg from '@/assets/hero-bg.jpg';
import navigationData from '@/data/navigation.json';
import siteData from '@/data/site.json';

const socialIcons: Record<string, typeof Facebook> = {
  Facebook,
  Instagram,
  Twitter,
  YouTube: Youtube,
};

const Footer = () => {
  return (
    <footer className="footer-gradient text-white">
      {/* Video Banner Strip */}
      <div className="relative h-32 md:h-48 overflow-hidden">
        <img
          src={heroBg}
          alt="Logo Animation Demo"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(261,60%,20%)] to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xl md:text-3xl font-display font-bold uppercase tracking-wider">
            {siteData.hero.headline}
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            JOIN OUR NEWSLETTER
          </h3>
          <p className="text-white/70 mb-6">
            Get exclusive deals, new releases, and animation tips delivered to your inbox.
          </p>
          <form className="flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary"
              />
            </div>
            <Button variant="hero" size="lg" className="rounded-full">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt={siteData.brand.name} className="h-10 w-10 rounded-lg" />
              <span className="font-display text-lg font-bold">{siteData.brand.name.toUpperCase()}</span>
            </Link>
            <p className="text-white/60 text-sm mb-4">
              {siteData.brand.description}
            </p>
            <div className="flex gap-3">
              {navigationData.socialLinks.map((social) => {
                const Icon = socialIcons[social.platform];
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                    aria-label={social.platform}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">SHOP</h4>
            <ul className="space-y-2">
              {navigationData.footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">SUPPORT</h4>
            <ul className="space-y-2">
              {navigationData.footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">LEGAL</h4>
            <ul className="space-y-2">
              {navigationData.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {siteData.brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
