import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { 
  FaChartLine,
  FaUsers,
  FaStar,
  FaMobileAlt
} from 'react-icons/fa';

const CompanyBenefits = () => {
  useScrollToTop();
  const benefits = [
    {
      icon: FaChartLine,
      title: 'Redução de custos',
      description: 'Planos acessíveis e gestão inteligente de benefícios'
    },
    {
      icon: FaUsers,
      title: 'Aumento da produtividade',
      description: 'Colaboradores mais saudáveis e satisfeitos são mais produtivos.'
    },
    {
      icon: FaStar,
      title: 'Retenção de talentos',
      description: 'Benefícios diferenciados atraem e motivam os melhores profissionais.'
    },
    {
      icon: FaMobileAlt,
      title: 'Saúde na palma da mão',
      description: 'Plataforma digital completa e fácil de usar, com acesso a diversos serviços de saúde.'
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
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div 
              className="sm:text-center lg:text-left lg:col-span-6 flex flex-col justify-center"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-[#8566FB] sm:text-5xl md:text-6xl">
                <span className="block">Benefícios para</span>
                <span className="block">sua empresa</span>
              </h1>
              <div className="mt-6 space-y-6">
                <p className="text-2xl font-medium text-gray-900">
                  Retenha talentos e impulsione a produtividade com o BeneMed.
                </p>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ofereça aos seus colaboradores um benefício inovador e acessível que garante mais saúde, segurança e tranquilidade para eles e suas famílias.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Com o BeneMed, você demonstra o cuidado com o bem-estar da sua equipe, fortalecendo o vínculo e aumentando a satisfação no trabalho.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nossa plataforma digital completa permite uma gestão simples e intuitiva dos benefícios, com controle total dos recursos de subsídio e acompanhamento da utilização dos serviços.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="mt-12 relative lg:mt-0 lg:col-span-6"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-2xl">
                  <img
                    className="w-full rounded-lg"
                    src="/beneficios-empresa.png"
                    alt="Benefícios para empresas"
                  />
                  {/* Adorno do favicon */}
                  <motion.img
                    src="/favicon.png"
                    alt="BeneMed Icon"
                    className="absolute -bottom-6 -right-8 w-30 h-30 z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6,
                      delay: 0.3,
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                  />
                </div>
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="mt-8">
                    <Link
                      to="/planos-empresariais"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
                    >
                      Comprar já
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Cards Section */}
      <section className="py-16 bg-gray-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#8566FB] mb-4">
              Nossos Benefícios
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Soluções completas de saúde para seus colaboradores
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {benefits.map((benefit, index) => (
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
                    <benefit.icon className="w-8 h-8 text-[#38B6FF]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#8566FB] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-900">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default CompanyBenefits;
