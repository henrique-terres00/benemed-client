import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/BENEMED-logo.png"
              alt="BeneMed Logo"
              className="h-32 w-auto mb-4"
            />
          </div>

          {/* Atendimento */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Atendimento ao Cliente
            </h3>
            <p className="text-gray-600 mb-2">Nossos Canais de Atendimento:</p>
            <a
              href="https://wa.me/5551993831000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary flex items-center justify-center md:justify-start gap-2 mb-2"
            >
              <FaWhatsapp className="text-green-500" />
              (51) 99383-1000
            </a>
            <a
              href="mailto:atendimento@benemedsaude.com.br"
              className="text-gray-600 hover:text-primary"
            >
              atendimento@benemedsaude.com.br
            </a>
          </div>

          {/* Redes Sociais */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Siga nossas redes
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <a
                href="https://wa.me/5551993831000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-green-500 hover:text-green-600 transition-colors"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com/_benemed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-pink-500 hover:text-pink-600 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            Copyright {currentYear} Benemed Saúde | Todos Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
