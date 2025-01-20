import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHandshake, FaMobileAlt, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import HeroPartners from '../components/HeroPartners';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface PartnerForm {
  name: string;
  businessName: string;
  cnpj: string;
  email: string;
  phone: string;
  specialty: string;
  address: string;
  city: string;
  state: string;
}

const Partners = () => {
  useScrollToTop();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PartnerForm>();

  const specialties = [
    'Clínica Geral',
    'Cardiologia',
    'Dermatologia',
    'Ginecologia',
    'Oftalmologia',
    'Ortopedia',
    'Pediatria',
    'Psicologia',
    'Odontologia',
    'Outros'
  ];

  const states = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  const benefits = [
    {
      icon: FaHandshake,
      title: 'Solução Co-branding',
      description: 'Todos os benefícios e vantagens do BeneMed com a sua marca.'
    },
    {
      icon: FaMobileAlt,
      title: 'Plataforma digital completa',
      description: 'Aplicativo validado e fácil de usar, disponível para Android e iOS.'
    },
    {
      icon: FaCheckCircle,
      title: 'Simplicidade e praticidade',
      description: 'Você só precisa enviar os dados da venda, nós cuidamos do resto.'
    },
    {
      icon: FaChartLine,
      title: 'Fonte de renda extra com controle total',
      description: 'Comissionamento por venda, com acompanhamento detalhado através do nosso dashboard inteligente.'
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

  const onSubmit = async (data: PartnerForm) => {
    try {
      console.log(data);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-gray-50">
      <HeroPartners />

      {/* Hero Form Section */}
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
                  src="/partner.png"
                  alt="Parceria BeneMed"
                />
              </div>
            </motion.div>
            <motion.div 
              className="sm:text-center lg:text-left lg:col-span-6 flex flex-col justify-center"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-[#8566FB] sm:text-5xl md:text-6xl">
                <span className="block">Seja um Parceiro</span>
                <span className="block">BeneMed</span>
              </h1>
              <div className="mt-3 space-y-4">
                <p className="text-xl text-gray-900 font-medium">
                  Faça parte da nossa rede de parceiros revendedores e cresça conosco.
                </p>
                <p className="text-lg text-gray-800">
                  Amplie seu portfólio e aumente sua receita com o BeneMed.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Ofereça aos seus clientes um produto inovador e de alta demanda: o plano de benefícios BeneMed. 
                  Com nossa solução Co-branding, você personaliza a oferta com sua marca e conta com uma plataforma 
                  digital completa para gestão de vendas e relacionamento com o cliente.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={() => {
                    const formElement = document.getElementById('partner-form');
                    formElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
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
                  Seja parceiro
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="advantages" className="py-16 bg-gray-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#8566FB] mb-4">
              Vantagens
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Descubra os benefícios de ser um parceiro revendedor BeneMed
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {benefits.map((benefit, index) => (
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
                    <benefit.icon className="w-8 h-8 text-[#38B6FF]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#8566FB] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-900">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Registration Form */}
      <section id="partner-form" className="py-16 bg-gray-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#8566FB] mb-4">
              Cadastre-se como Parceiro
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Preencha o formulário abaixo para se tornar um parceiro BeneMed
            </p>
          </div>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 p-4 bg-green-100 rounded-md"
            >
              <p className="text-green-700 text-center">
                Cadastro enviado com sucesso! Entraremos em contato em breve.
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Nome é obrigatório' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-benemed-blue focus:ring-benemed-blue"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                  Nome da Empresa/Estabelecimento
                </label>
                <input
                  type="text"
                  id="businessName"
                  {...register('businessName', { required: 'Nome do estabelecimento é obrigatório' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-benemed-blue focus:ring-benemed-blue"
                />
                {errors.businessName && (
                  <p className="mt-1 text-sm text-red-600">{errors.businessName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">
                  CNPJ
                </label>
                <input
                  type="text"
                  id="cnpj"
                  {...register('cnpj', {
                    required: 'CNPJ é obrigatório',
                    pattern: {
                      value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
                      message: 'CNPJ inválido'
                    }
                  })}
                  placeholder="00.000.000/0000-00"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-benemed-blue focus:ring-benemed-blue"
                />
                {errors.cnpj && (
                  <p className="mt-1 text-sm text-red-600">{errors.cnpj.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
                  Especialidade
                </label>
                <select
                  id="specialty"
                  {...register('specialty', { required: 'Especialidade é obrigatória' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-benemed-blue focus:ring-benemed-blue"
                >
                  <option value="">Selecione uma especialidade</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
                {errors.specialty && (
                  <p className="mt-1 text-sm text-red-600">{errors.specialty.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-benemed-blue focus:ring-benemed-blue"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', {
                    required: 'Telefone é obrigatório',
                    pattern: {
                      value: /^\(\d{2}\) \d{5}-\d{4}$/,
                      message: 'Formato: (99) 99999-9999'
                    }
                  })}
                  placeholder="(99) 99999-9999"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-benemed-blue focus:ring-benemed-blue"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Endereço Completo
              </label>
              <input
                type="text"
                id="address"
                {...register('address', { required: 'Endereço é obrigatório' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-benemed-blue focus:ring-benemed-blue"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  Cidade
                </label>
                <input
                  type="text"
                  id="city"
                  {...register('city', { required: 'Cidade é obrigatória' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-benemed-blue focus:ring-benemed-blue"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  Estado
                </label>
                <select
                  id="state"
                  {...register('state', { required: 'Estado é obrigatório' })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-benemed-blue focus:ring-benemed-blue"
                >
                  <option value="">Selecione um estado</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
                )}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#38B6FF] hover:shadow-xl transition-all duration-200 shadow-lg"
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
              Enviar Cadastro
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Partners;
