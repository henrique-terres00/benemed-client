import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHandshake, FaMobileAlt, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import HeroPartners from '../components/HeroPartners';
import { useScrollToTop } from '../hooks/useScrollToTop';
import InputMask from 'react-input-mask';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../config/api';

// Funções de validação
const isValidPhone = (phone: string) => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 11;
};

const isValidCNPJ = (cnpj: string) => {
  const cleaned = cnpj.replace(/\D/g, '');
  return cleaned.length === 14;
};

const partnerSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  companyName: z.string().min(3, 'Nome do estabelecimento deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().refine(isValidPhone, 'Telefone deve ter 11 dígitos'),
  city: z.string().min(2, 'Cidade deve ter no mínimo 2 caracteres'),
  state: z.string().length(2, 'Selecione um estado'),
  cnpj: z.string().refine(isValidCNPJ, 'CNPJ inválido')
});

type PartnerFormType = z.infer<typeof partnerSchema>;

const Partners = () => {
  useScrollToTop();
  const [isSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<PartnerFormType>({
    resolver: zodResolver(partnerSchema)
  });

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

  const onSubmit = async (data: PartnerFormType) => {
    setLoading(true);

    // Remove caracteres especiais do telefone e CNPJ antes de enviar
    const cleanedData = {
      ...data,
      phone: data.phone.replace(/\D/g, ''),
      cnpj: data.cnpj.replace(/\D/g, '')
    };

    try {
      const response = await fetch(`${api.baseURL}${api.endpoints.partners}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao enviar formulário');
      }

      setSuccess(true);
      reset();
    } catch (err) {
      alert('Erro ao enviar formulário. Por favor, tente novamente.');
    } finally {
      setLoading(false);
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

          {success ? (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Formulário enviado com sucesso!</h3>
              <p className="text-gray-600">Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    {...register('name')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary ${errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="Digite seu nome completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa/Estabelecimento *</label>
                  <input
                    type="text"
                    {...register('companyName')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary ${errors.companyName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="Digite o nome da sua empresa"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-xs text-red-500">{errors.companyName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefone *</label>
                  <InputMask
                    mask="(99) 99999-9999"
                    {...register('phone')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="(00) 00000-0000"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    {...register('email')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary ${errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="exemplo@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CNPJ *</label>
                  <InputMask
                    mask="99.999.999/9999-99"
                    {...register('cnpj')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary ${errors.cnpj ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="00.000.000/0000-00"
                  />
                  {errors.cnpj && (
                    <p className="mt-1 text-xs text-red-500">{errors.cnpj.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cidade *</label>
                    <input
                      type="text"
                      {...register('city')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary ${errors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                      placeholder="Digite sua cidade"
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estado *</label>
                    <select
                      {...register('state')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-primary focus:border-primary ${errors.state ? 'border-red-500' : 'border-gray-300'
                        }`}
                    >
                      <option value="">Selecione...</option>
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    {errors.state && (
                      <p className="mt-1 text-xs text-red-500">{errors.state.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  {loading ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Partners;
