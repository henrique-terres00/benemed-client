import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';

interface BenefitCardProps {
  icon: IconType;
  title: string;
  description: string;
  className?: string;
}

const BenefitCard = ({ icon: Icon, title, description, className = '' }: BenefitCardProps) => {
  return (
    <motion.div
      className={`relative bg-white rounded-xl shadow-lg p-6 group cursor-pointer ${className}`}
      whileHover={{ 
        scale: 1.03,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex flex-col items-center text-center">
        <motion.div 
          className="w-16 h-16 flex items-center justify-center bg-[#38B6FF] bg-opacity-20 rounded-full mb-4"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          <Icon className="w-8 h-8 text-[#38B6FF]" />
        </motion.div>
        <h3 className="text-xl font-bold text-[#8566FB] mb-2">
          {title}
        </h3>
        <p className="text-gray-900">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
