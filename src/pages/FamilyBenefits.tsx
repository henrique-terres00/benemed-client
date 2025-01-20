import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { 
  FaVideo, 
  FaPrescriptionBottleAlt, 
  FaUserMd, 
  FaFlask,
  FaShieldAlt,
  FaPaw
} from 'react-icons/fa';

const FamilyBenefits = () => {
  useScrollToTop();
  const benefits = [
    {
      icon: FaVideo,
      title: 'Telemedicina 24 horas',
      description: 'Consultas médicas online com diversas especialidades, sem sair de casa.'
    },
    {
      icon: FaPrescriptionBottleAlt,
      title: 'Descontos em medicamentos',
      description: 'Economia na compra de remédios e produtos de saúde'
    },
    {
      icon: FaUserMd,
      title: 'Descontos em consultas médicas e odontológica',
      description: 'Cuidados com a saúde física e bucal para toda a família.'
    },
    {
      icon: FaFlask,
      title: 'Descontos em exames laboratoriais e de imagem',
      description: 'Rede credenciada de laboratórios para realização de exames para toda a família.'
    },
    {
      icon: FaShieldAlt,
      title: 'Seguro de acidentes pessoais e assistência funeral',
      description: 'Com auditoria proprietária, contando com pré-aprovação para prevenir fraudes, e validação automática com uso de inteligência artificial.'
    },
    {
      icon: FaPaw,
      title: 'Assistência Pet',
      description: 'Consultas e serviços veterinários para seus animais de estimação.'
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
                <span className="block">toda a família</span>
              </h1>
              <div className="mt-3 space-y-4">
                <p className="text-xl text-gray-900 font-medium">
                  Cuide da saúde de quem você ama com os melhores benefícios.
                </p>
                <p className="text-lg text-gray-800">
                  Acesso a uma ampla rede de serviços de saúde com descontos exclusivos.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="mt-12 relative lg:mt-0 lg:col-span-6"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <img
                    className="w-full rounded-lg"
                    src="/beneficios-familia.png"
                    alt="Benefícios para família"
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
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    to="/comprar"
                    className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#38B6FF] hover:bg-[#2b9fe6] hover:scale-105 transform transition-all duration-300 shadow-lg"
                  >
                    Contrate agora!
                  </Link>
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
              Conheça todas as vantagens do plano BeneMed para sua família
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
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

export default FamilyBenefits;
