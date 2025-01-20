import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '/' },
    {
      name: 'Benefícios',
      children: [
        { name: 'Benefícios para Família', href: '/beneficios-familia' },
        { name: 'Benefícios para Empresa', href: '/beneficios-empresa' }
      ]
    },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
    { name: 'Contrate agora', href: '/comprar' },
    { name: 'Seja Parceiro', href: '/parceiros' },
    { name: 'Mídia/Notícias', href: '/midia' },
  ];

  return (
    <nav className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="/BENEMED-logo.png"
                alt="BeneMed Logo"
                className="h-32"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item, index) => (
              item.children ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className="flex items-center space-x-1 text-gray-900 hover:text-[#8566FB] px-3 py-2 text-base font-medium"
                  >
                    <span>{item.name}</span>
                    <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 w-60 mt-2 bg-white rounded-lg shadow-lg py-2 z-50"
                      >
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            to={child.href}
                            className="block px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-[#8566FB]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.href}
                  className="text-gray-900 hover:text-[#8566FB] px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-[#8566FB]"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-2">
                {navigation.map((item, index) => (
                  item.children ? (
                    <div key={index} className="space-y-2">
                      <div className="font-medium text-gray-900 px-3 py-2">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            to={child.href}
                            className="block text-gray-900 hover:text-[#8566FB] px-3 py-2"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={index}
                      to={item.href}
                      className="text-gray-900 hover:text-[#8566FB] px-3 py-2 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
