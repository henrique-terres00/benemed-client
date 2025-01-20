import { motion } from 'framer-motion';
import { FaMapMarked, FaHospital, FaBuilding, FaClipboardList, FaMapMarkedAlt } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const PartnerDiscount = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    {
      icon: FaMapMarked,
      number: 1380,
      label: 'MUNICÍPIOS COBERTOS'
    },
    {
      icon: FaClipboardList,
      number: 4500,
      label: 'PROCEDIMENTOS COBERTOS'
    },
    {
      icon: FaBuilding,
      number: 15400,
      label: 'ESTABELECIMENTOS CREDENCIADOS'
    },
    {
      icon: FaMapMarkedAlt,
      number: 26,
      label: 'ESTADOS + DISTRITO FEDERAL'
    },
    {
      icon: FaHospital,
      number: 60,
      label: 'HOSPITAIS'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#8566FB] mb-4">
            Nossa Rede de Desconto
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Conte com uma ampla rede de atendimento em todo o Brasil
          </p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-6 group cursor-pointer"
              variants={item}
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
                  <stat.icon className="w-8 h-8 text-[#38B6FF]" />
                </motion.div>
                <span className="text-4xl font-bold text-[#8566FB] mb-2">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      separator="."
                    />
                  ) : '0'}
                </span>
                <span className="text-gray-900 font-medium">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PartnerDiscount;
