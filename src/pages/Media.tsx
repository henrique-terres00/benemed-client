import { motion } from 'framer-motion';
import InstagramFeed from '../components/InstagramFeed';

const Media = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#8566FB] mb-4">
            Notícias e Mídia
          </h1>
          <p className="text-xl text-gray-900">
            Fique por dentro das novidades do BeneMed
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <InstagramFeed username="_benemed" limit={10} />
        </div>
      </motion.div>
    </div>
  );
};

export default Media;
