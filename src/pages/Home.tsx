import HeroHome from '../components/HeroHome';
import PartnerDiscount from '../components/PartnerDiscount';
import BenefitsSection from '../components/BenefitsSection';
import WhyBenemed from '../components/WhyBenemed';
import InstagramFeed from '../components/InstagramFeed';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <HeroHome />
      <WhyBenemed />
      <BenefitsSection />     
      <PartnerDiscount />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Admin access icon */}
          <div className="fixed bottom-4 right-4 opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
            <Link to="/admin/login" className="text-gray-400">
              <FaLock className="w-5 h-5" />
            </Link>
          </div>
          <InstagramFeed username="_benemed" limit={5} />
        </div>
      </div>
    </>
  );
};

export default Home;