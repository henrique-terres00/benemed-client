import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Benefícios para você e toda a família',
      description: 'Acesso a uma ampla rede de serviços de saúde com descontos exclusivos.',
      link: '/beneficios-familia',
      buttonText: 'Quero conhecer!',
      image: '/familia.png',
      overlayColor: 'rgba(133, 102, 251, 0.6)'
    },
    {
      title: 'Benefícios para empresas',
      description: 'Soluções completas de saúde para seus colaboradores.',
      link: '/beneficios-empresa',
      buttonText: 'Quero conhecer!',
      image: '/equipe.png',
      overlayColor: 'rgba(133, 102, 251, 0.6)'
    },
    {
      title: 'Benefícios para parceiros',
      description: 'Faça parte da nossa rede e cresça conosco.',
      link: '/parceiros',
      buttonText: 'Seja parceiro',
      image: '/handshake.png',
      overlayColor: 'rgba(133, 102, 251, 0.6)'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-h-[400px] group"
              variants={item}
            >
              {/* Imagem de fundo */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("${benefit.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.9
                }}
              />
              {/* Overlay colorido */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundColor: benefit.overlayColor,
                  mixBlendMode: 'multiply'
                }}
              />
              {/* Conteúdo */}
              <div className="relative flex flex-col items-center justify-center h-full p-8 z-10">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-white text-center mb-8">
                  {benefit.description}
                </p>
                <div className="mt-auto">
                  <Link
                    to={benefit.link}
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#38B6FF] hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
                    style={{
                      transform: 'translateY(0)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {benefit.buttonText}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitsSection;