import { useState, useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqItems = [
  {
    question: "HOW MUCH DOES YOUR SERVICE COST?",
    answer: "Please check out the PRICING tab at the top of our website where you will see all of our special pricing deals for both logo animation and logo design packages.\n\nWhen animating an existing logo, the more videos you purchase at one time, the more of a discount you will receive as you'll see in our bundle pricing!",
  },
  {
    question: "Once I pay for my order, how fast will I receive my completed video(s)?",
    answer: "All logo animation orders are normally completed and e-mailed back within 72 hours or less. If you need your videos sooner, you may elect to pay a small fee to upgrade for expedited turnaround which is 24 hour or less.",
  },
  {
    question: "Can you combine different animation effects from different samples into one video?",
    answer: "No, unfortunately we cannot combine template effects. Your video(s) will only come as shown on the specific sample(s) you choose.",
  },
  {
    question: "Can I change the color of animation effects to match my logo design?",
    answer: "Unfortunately, we cannot alter any of our templates.",
  },
  {
    question: "What if I don't have a logo yet?",
    answer: "If you don't already have a logo, we can create one for you at an additional charge!\n\nCheck out ORDER NOW > LOGO DESIGN at the top of our website to see samples of 100% custom logos we have created for past clients, pricing, and all additional information regarding logo design.\n\nYou will own 100% of the rights to your logo that we create for you. Once we e-mail the final logo design files to you, we release all rights of your design to you, and only you!",
  },
  {
    question: "How is my project delivered to me?",
    answer: "Once we have completed your project, it will be e-mailed back using the original e-mail address you provided us with when submitting your order.",
  },
  {
    question: "Where can I use an animated logo video?",
    answer: "• Social Media posts & videos (Instagram, Facebook, TikTok, etc.)\n• Social media ads\n• Great as intros/outros for YouTube!\n• Websites\n• Presentations\n• Promotional/Marketing videos\n• Anywhere a standard video file is accepted",
  },
  {
    question: "Will my logo animation video come with sound?",
    answer: "All animation templates on our site include default audio effects that will automatically be applied to your video. Unfortunately, we cannot alter the default audio that comes with your template.\n\nIf you prefer for your video to have no audio at all, please let our design team know after you place your order and they can remove it completely. Just e-mail them with your full name and order number: support@digitalwork.gr",
  },
  {
    question: "How long will my animation video be?",
    answer: "Your animation video will be the exact same length as the template shown on our page. We unfortunately cannot adjust the duration or timing of our templates.",
  },
  {
    question: "Can I make any changes to the animation template?",
    answer: "Unfortunately, we cannot alter any of our templates.",
  },
  {
    question: "Can you do custom logo animation videos?",
    answer: "Unfortunately, we don't offer custom animation videos, but we have over 200+ animation effect templates to choose from on our site.\n\nIf you are looking for something specific, please reach out to our team on Instagram using the Chat at the bottom right corner of your screen and one of our team members will be happy to assist!",
  },
  {
    question: "How do you accept payment?",
    answer: "We accept Payment by PayPal and Credit/Debit Card.",
  },
  {
    question: "What is your refund policy?",
    answer: "Due to the time consuming and detailed nature of digital animation and logo design work, we do not offer refunds once your order has been started or completed by our designers.\n\nHowever, we will ALWAYS do our best to help remedy a situation if there are any issues with your project once received.\n\nIf you are not happy with your product for any reason, please e-mail our support team and we will help resolve any issues: support@digitalwork.gr\n\nBe sure to visit our \"REVIEWS\" tab above where you'll see over 550+ satisfied clients who have tagged us, and show the completed work that we've done for them.",
  },
  {
    question: "Can I add additional text to my logo/video?",
    answer: "Unfortunately, we cannot add text to your logo design or animation video. We only animate the exact logo design that you provide us with.",
  },
  {
    question: "What file is needed to make a logo animation video?",
    answer: "Currently we can only accept PNG (transparent background) or JPG file when uploading your logo here on our website.",
  },
  {
    question: "Where are you located?",
    answer: "We are a US-based company, with a majority of our team located on the West and East coast.",
  },
  {
    question: "What format will my logo animation video(s) be delivered in?",
    answer: "Video(s) will be in Mp4 format, with 1080p HD quality.",
  },
  {
    question: "Why should I buy more than 1 logo animation video?",
    answer: "Even if you only have one logo design, many clients choose to purchase more than 1 video to showcase their logo, using different effects. These work great for marketing/promo videos, and also posting on social media to stand out from your competitors!\n\nIf you plan to promote different videos throughout the year, planning ahead and buying multiple videos at once will save you money since we discount prices as you bundle!",
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqItems;
    const query = searchQuery.toLowerCase();
    return faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-4xl md:text-6xl font-display font-bold text-center mb-8 uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>

          {/* Search Input */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-full border-border"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card"
                  >
                    <AccordionTrigger className="text-left font-display font-bold text-sm md:text-base uppercase hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="text-center text-muted-foreground">
                No FAQs found matching your search.
              </p>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <Button asChild variant="hero" size="lg" className="rounded-full">
              <Link to="/categories">SHOP ANIMATION EFFECTS</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="mailto:support@digitalwork.gr">CONTACT SUPPORT</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
