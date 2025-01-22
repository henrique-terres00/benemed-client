import { motion } from 'framer-motion';
import { FaHandshake, FaHeartbeat, FaUserShield } from 'react-icons/fa';

const About = () => {
  const valores = [
    {
      icon: FaHeartbeat,
      title: 'Acessibilidade',
      description: 'Democratizar o acesso à saúde de qualidade para todos os brasileiros.'
    },
    {
      icon: FaUserShield,
      title: 'Inovação',
      description: 'Buscar constantemente soluções inovadoras para melhorar nossos serviços.'
    },
    {
      icon: FaHandshake,
      title: 'Compromisso',
      description: 'Dedicação total ao bem-estar e satisfação de nossos beneficiários.'
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
              className="mt-12 relative lg:mt-0 lg:col-span-6"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="/benemed-time.png"
                  alt="Equipe BeneMed"
                />
              </div>
            </motion.div>
            <motion.div 
              className="sm:text-center lg:text-left lg:col-span-6"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-[#8566FB] sm:text-5xl md:text-6xl">
                <span className="block">Prazer! Somos o</span>
                <span className="block">BeneMed Saúde</span>
              </h1>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                Unindo Forças para Facilitar o Acesso à Saúde de Qualidade
              </h2>
              <div className="mt-6 space-y-6 text-base text-gray-900 sm:text-lg md:text-xl">
                <p>
                  Observando a dificuldade de grande parte da população em acessar serviços de saúde de qualidade, um grupo de especialistas com vasta experiência nos setores de saúde, seguros e benefícios decidiu unir forças.
                </p>
                <p>
                  BeneMed Saúde é uma forma inovadora de entregar acesso à saúde, englobando diversas assistências e benefícios.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href="https://wa.me/5551993831000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-[#38B6FF] hover:shadow-xl transition-all duration-200 shadow-lg"
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
                  Saiba Mais
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Valores Section */}
      <section className="py-16 bg-gray-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#8566FB] mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Conheça um pouco sobre as nossas motivações
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {valores.map((valor, index) => (
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
                    <valor.icon className="w-8 h-8 text-[#38B6FF]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#8566FB] mb-2">
                    {valor.title}
                  </h3>
                  <p className="text-gray-900">
                    {valor.description}
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

export default About;
