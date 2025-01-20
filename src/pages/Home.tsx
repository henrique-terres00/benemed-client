import HeroHome from '../components/HeroHome';
import PartnerDiscount from '../components/PartnerDiscount';
import BenefitsSection from '../components/BenefitsSection';
import WhyBenemed from '../components/WhyBenemed';
import InstagramFeed from '../components/InstagramFeed';

const Home = () => {
  return (
    <>
      <HeroHome />
      <WhyBenemed />
      <BenefitsSection />     
      <PartnerDiscount />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <InstagramFeed username="_benemed" limit={5} />
        </div>
      </div>
    </>
  );
};

export default Home;