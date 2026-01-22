import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

const Contact = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Page Title */}
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase tracking-tight">
              CONTACT US
            </h1>

            {/* Subheading */}
            <h2 className="text-xl md:text-2xl font-display font-medium text-muted-foreground mb-8">
              Get in touch
            </h2>

            {/* Body Text */}
            <p className="text-muted-foreground leading-relaxed mb-8">
              If you have any questions about our service or an existing order, please contact our support team via our e-mail address below and we will get back to you ASAP.
            </p>

            {/* Email */}
            <a
              href="mailto:support@digitalwork.gr"
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-display font-bold text-secondary hover:text-secondary/80 transition-colors mb-8"
            >
              <Mail className="w-6 h-6" />
              support@digitalwork.gr
            </a>

            {/* Closing Line */}
            <p className="text-muted-foreground mb-12">
              We look forward to hearing from you!
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-14 h-14 rounded-full bg-primary/10 hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
