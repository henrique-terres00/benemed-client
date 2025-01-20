import { motion } from 'framer-motion';
import { 
  FaVideo, 
  FaPrescriptionBottleAlt, 
  FaUserMd,
  FaFlask,
  FaShieldAlt,
  FaPaw
} from 'react-icons/fa';

const WhyBeneMed = () => {
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
    <section className="py-16 bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#8566FB] mb-4">
            Por que escolher a BeneMed?
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Benefícios exclusivos para você e sua família
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
  );
};

export default WhyBeneMed;
