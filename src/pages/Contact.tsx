import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      description: '(51) 99383-1000',
      link: 'https://wa.me/5551993831000'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      description: 'contato@benemed.com.br',
      link: 'mailto:contato@benemed.com.br'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Endereço',
      description: 'Porto Alegre, RS',
      link: 'https://goo.gl/maps/your-address'
    },
    {
      icon: FaClock,
      title: 'Horário',
      description: 'Segunda a Sexta: 9h às 18h',
      link: null
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
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-[#8566FB] sm:text-5xl md:text-6xl mb-4">
              Entre em Contato
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-900 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Estamos aqui para ajudar! Entre em contato conosco pelos canais abaixo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 bg-gray-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-xl shadow-lg p-6 group cursor-pointer"
                variants={item}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                onClick={() => info.link && window.open(info.link, '_blank')}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="w-16 h-16 flex items-center justify-center bg-[#38B6FF] bg-opacity-20 rounded-full mb-4"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <info.icon className="w-8 h-8 text-[#38B6FF]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#8566FB] mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-900">
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2367076384366!2d-51.2207815!3d-30.0346792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzU2LjQiUyA1McKwMTMnMTQuOSJX!5e0!3m2!1spt-BR!2sbr!4v1642532097705!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
