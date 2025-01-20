import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
}

const Loading = ({ size = 'medium' }: LoadingProps) => {
  const sizes = {
    small: 'w-5 h-5',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className={`${sizes[size]} border-4 border-benemed-blue border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default Loading;
