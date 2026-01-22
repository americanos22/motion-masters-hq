import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: 1,
    title: "CHOOSE YOUR ANIMATION EFFECT(S)",
    text: "We have over 200 logo animation effects for you to choose from that we can apply to your logo.\n\nJust go to ORDER NOW > LOGO ANIMATION to view all of our different effect categories or simply click the button below!",
    button: { label: "SHOP ANIMATION EFFECTS", href: "/categories" },
    align: "left" as const,
  },
  {
    number: 2,
    title: "UPLOAD YOUR LOGO DESIGN",
    text: "When you find the perfect effect(s), you can simply upload your logo design and then just select the ADD TO CART button.\n\nNote: If you want more than 1 video, you may use the same logo or a different logo for each video you choose!\n\nDon't have a logo? Let us make one for you!\n\nFor more info/pricing, to see logos we have created for past clients, or to place an order for a new custom logo design, go to ORDER NOW > LOGO DESIGN or click the link below.",
    button: { label: "SHOP LOGO DESIGN", href: "/logo-design" },
    align: "right" as const,
  },
  {
    number: 3,
    title: "SUBMIT PAYMENT",
    text: "After you have added all selections to your cart, just open up 'MY CART' in the upper right corner of your screen to complete the secure checkout process.\n\nOnce your payment has been submitted, our animation team will begin working immediately to complete your order.",
    align: "left" as const,
  },
  {
    number: 4,
    title: "SIT BACK & RELAX!",
    text: "After payment has been successfully processed, your animation video(s) will be completed within 72 hours or less by our animation team. If you pay the small fee to upgrade to expedited delivery, your animation video(s) will be sent within 24 hours or less.\n\nOnce ready, your project will be sent to the same e-mail address that you used during the checkout process so you can download the file(s).\n\nCheck your SPAM/JUNK folder as well, since messages from our team may end up there.\n\nNOTE: If you cannot find the completed order via your e-mail inbox/spam/junk folder, or if you need us to resend your video(s) entirely, please send an e-mail to support@digitalwork.gr so we can assist you with your order!",
    align: "right" as const,
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-4xl md:text-6xl font-display font-bold text-center mb-16 md:mb-24 uppercase tracking-tight">
            HOW IT WORKS
          </h1>

          {/* Steps */}
          <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-start gap-6 md:gap-10 ${
                  step.align === "right" ? "md:flex-row-reverse md:ml-auto" : ""
                } ${step.align === "right" ? "md:pl-24" : "md:pr-24"}`}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-glow">
                  <span className="text-3xl md:text-5xl font-display font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className={`flex-1 ${step.align === "right" ? "md:text-right" : ""}`}>
                  <h2 className="text-xl md:text-2xl font-display font-bold uppercase mb-4 tracking-wide">
                    {step.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-6">
                    {step.text}
                  </div>
                  {step.button && (
                    <Button asChild variant="hero" size="lg" className="rounded-full">
                      <Link to={step.button.href}>{step.button.label}</Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 md:mt-32">
            <Button asChild variant="hero" size="lg" className="rounded-full text-lg px-10 py-6">
              <Link to="/categories">SHOP ANIMATION EFFECTS</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
