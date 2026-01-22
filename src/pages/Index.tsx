import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CustomerWorkSection from '@/components/home/CustomerWorkSection';
import SpecialOfferSection from '@/components/home/SpecialOfferSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import UseCasesSection from '@/components/home/UseCasesSection';
import DemoReelSection from '@/components/home/DemoReelSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CustomerWorkSection />
      <SpecialOfferSection />
      <ReviewsSection />
      <BenefitsSection />
      <UseCasesSection />
      <DemoReelSection />
    </Layout>
  );
};

export default Index;
