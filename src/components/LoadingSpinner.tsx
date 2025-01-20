import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  text?: string;
}

export function LoadingSpinner({ text = 'Carregando...' }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
      <motion.div
        className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg text-gray-600 font-medium"
      >
        {text}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-2 text-sm text-gray-500"
      >
        Aguarde enquanto carregamos as melhores opções para você
      </motion.p>
    </div>
  );
}
