import { motion } from 'framer-motion';

const HeroPartners = () => {
  const scrollToAdvantages = () => {
    const advantagesSection = document.getElementById('advantages');
    advantagesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[80vh]">
      {/* Imagem de fundo */}
      <div 
        className="absolute inset-0 w-full h-full opacity-70"
        style={{
          backgroundImage: 'url("/sales-partners.png")',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Overlay roxo */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: 'rgba(133, 102, 251, 0.6)',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Conteúdo centralizado */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/favicon.png"
            alt="BeneMed Logo"
            className="w-34 h-34 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-8">
            Benefícios para parceiros revendedores
          </h1>
          <button
            onClick={scrollToAdvantages}
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
            Ver Vantagens
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPartners;
