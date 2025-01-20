import { motion } from 'framer-motion';

interface HeroProps {
  title: string | React.ReactNode;
  subtitle: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  children?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  hasOverlay?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  image,
  children,
  className = '',
  imageClassName = '',
  hasOverlay = false,
}: HeroProps) => {
  return (
    <section className={`relative py-20 ${className}`}>
      {image && (
        <>
          <div className="absolute inset-0">
            <img
              className={`w-full h-full object-cover ${imageClassName}`}
              src={image.src}
              alt={image.alt}
            />
            {hasOverlay && (
              <div className="absolute inset-0 bg-[#8566FB] opacity-60" />
            )}
          </div>
        </>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            className="sm:text-center lg:text-left lg:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-[#8566FB] sm:text-5xl md:text-6xl">
              {typeof title === 'string' ? (
                <span className="block">{title}</span>
              ) : (
                title
              )}
            </h1>
            <div className="mt-3 space-y-4">
              <p className="text-xl text-gray-900 font-medium">
                {subtitle}
              </p>
              {description && (
                <p className="text-lg text-gray-700">
                  {description}
                </p>
              )}
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
