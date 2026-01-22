import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import heroBg from '@/assets/hero-bg.jpg';

const footerLinks = {
  shop: [
    { label: 'All Categories', href: '/categories' },
    { label: 'Best Sellers', href: '/collection/best-sellers' },
    { label: 'New Releases', href: '/collection/new-release' },
    { label: 'Fire Effects', href: '/collection/fire' },
    { label: 'Neon Effects', href: '/collection/neon' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Track Order', href: '/track-order' },
  ],
  legal: [
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Shipping Policy', href: '/shipping' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

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
            Bring Your Logo to Life
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
              <img src={logo} alt="Digital Work" className="h-10 w-10 rounded-lg" />
              <span className="font-display text-lg font-bold">DIGITAL WORK</span>
            </Link>
            <p className="text-white/60 text-sm mb-4">
              Premium logo animations & 3D intro videos. Transform your brand with stunning visual effects.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">SHOP</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
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
              {footerLinks.support.map((link) => (
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
              {footerLinks.legal.map((link) => (
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
            © {new Date().getFullYear()} Digital Work. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
