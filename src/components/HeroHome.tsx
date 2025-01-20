import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="relative max-w-7xl mx-auto">
        <div className="relative pb-6 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20">
          <main className="mt-6 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 lg:mt-10 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <motion.div 
                className="sm:text-center lg:text-left lg:col-span-6"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl tracking-tight font-extrabold text-[#8566FB] sm:text-5xl md:text-6xl">
                  <span className="block">BeneMed cuida da sua saúde</span>
                  <span className="block">com benefícios exclusivos</span>
                </h1>               
                <div className="mt-3 space-y-4 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">                  
                  <p className="text-gray-900">
                    Observando a dificuldade de grande parte da população em acessar serviços de saúde de qualidade, um grupo de especialistas com vasta experiência nos setores de saúde, seguros e benefícios decidiu unir forças.
                  </p>                  
                  <p className="text-gray-900">
                    BeneMed Saúde é uma forma inovadora de entregar acesso à saúde, englobando diversas assistências e benefícios, gerando conveniência e tranquilidade.
                  </p>
                </div>
              </motion.div>                        
              <motion.div 
                className="mt-8 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/saude.png"
                  alt="Profissionais da saúde"
                  className="w-full h-auto object-contain rounded-[40px]"
                />
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;
