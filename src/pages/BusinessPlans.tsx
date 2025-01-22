import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaCheck, FaUsers } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface Benefit {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

const businessFormSchema = z.object({
  companyName: z.string().min(3, 'Nome da empresa deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  numberOfEmployees: z.string().min(1, 'Número de funcionários é obrigatório'),
  message: z.string().optional(),
  selectedBenefits: z.array(z.string())
});

type BusinessFormType = z.infer<typeof businessFormSchema>;

export default function BusinessPlans() {
  const [showCustomPlan, setShowCustomPlan] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<BusinessFormType>({
    resolver: zodResolver(businessFormSchema),
    defaultValues: {
      selectedBenefits: []
    }
  });

  const selectedBenefits = watch('selectedBenefits');

  const predefinedPlans = [
    {
      id: '1',
      name: 'Plano Básico',
      description: 'Boa opção para pequenas empresas',
      price: 49.90,
      business_plan_benefits: {
        assistencias: [
          { id: '1', name: 'Orientação saúde + Teleconsulta' },
          { id: '2', name: 'Desconto em redes médicas' },
          { id: '3', name: 'Descontos em medicamentos' }
        ],
        coberturas: []
      }
    },
    {
      id: '2',
      name: 'Plano Completo',
      description: 'Boa opção para médias empresas',
      price: 89.90,
      business_plan_benefits: {
        assistencias: [
          { id: '1', name: 'Orientação saúde + Teleconsulta' },
          { id: '2', name: 'Desconto em redes médicas' },
          { id: '3', name: 'Descontos em medicamentos' },
          { id: '4', name: 'Teleconsulta nutricional' },
          { id: '5', name: 'Teleconsulta psicológica' }
        ],
        coberturas: [
          { id: '17', name: 'Seguro Acidentes Pessoais' }
        ]
      }
    },
    {
      id: '3',
      name: 'Plano Premium',
      description: 'Boa opção para grandes empresas',
      price: 129.90,
      business_plan_benefits: {
        assistencias: [
          { id: '1', name: 'Orientação saúde + Teleconsulta' },
          { id: '2', name: 'Desconto em redes médicas' },
          { id: '3', name: 'Descontos em medicamentos' },
          { id: '4', name: 'Teleconsulta nutricional' },
          { id: '5', name: 'Teleconsulta psicológica' },
          { id: '8', name: 'Check-up anual completo' }
        ],
        coberturas: [
          { id: '17', name: 'Seguro Acidentes Pessoais' },
          { id: '18', name: 'Assistência Funeral Familiar' }
        ]
      }
    }
  ];

  const allPlanBenefits = {
    assistencias: [
      { id: '1', name: 'Orientação saúde + Teleconsulta' },
      { id: '2', name: 'Desconto em redes médicas' },
      { id: '3', name: 'Descontos em medicamentos' },
      { id: '4', name: 'Teleconsulta nutricional' },
      { id: '5', name: 'Teleconsulta psicológica' },
      { id: '8', name: 'Check-up anual completo' }
    ],
    coberturas: [
      { id: '17', name: 'Seguro Acidentes Pessoais' },
      { id: '18', name: 'Assistência Funeral Familiar' }
    ]
  };

  const hasBenefit = (plan: any, benefitId: string, category: 'assistencias' | 'coberturas') => {
    return plan.business_plan_benefits[category].some((b: any) => b.id === benefitId);
  };

  const benefitsList: Benefit[] = [
    // Assistências
    {
      id: '1',
      name: 'Orientação saúde + Teleconsulta',
      description: 'Teleconsulta com médicos generalistas e especialistas',
      price: 25.00,
      category: 'Assistência'
    },
    {
      id: '2',
      name: 'Desconto em redes médicas',
      description: 'Descontos em consultas, odontologia e exames',
      price: 20.00,
      category: 'Assistência'
    },
    {
      id: '3',
      name: 'Descontos em medicamentos',
      description: 'Descontos especiais em farmácias parceiras',
      price: 15.00,
      category: 'Assistência'
    },
    {
      id: '4',
      name: 'Teleconsulta nutricional',
      description: 'Atendimento online com nutricionistas',
      price: 18.00,
      category: 'Assistência'
    },
    {
      id: '5',
      name: 'Teleconsulta psicológica',
      description: 'Atendimento online com psicólogos',
      price: 20.00,
      category: 'Assistência'
    },
    {
      id: '6',
      name: 'Assistência fitness',
      description: 'Acompanhamento e orientação fitness',
      price: 15.00,
      category: 'Assistência'
    },
    {
      id: '7',
      name: 'Assistência nutricional',
      description: 'Acompanhamento e orientação nutricional',
      price: 18.00,
      category: 'Assistência'
    },
    {
      id: '8',
      name: 'Check-up anual completo',
      description: 'Exames completos uma vez por ano',
      price: 30.00,
      category: 'Assistência'
    },
    {
      id: '9',
      name: 'Check-up de rotina',
      description: 'Exames básicos periódicos',
      price: 20.00,
      category: 'Assistência'
    },
    {
      id: '10',
      name: 'Odontologia de urgência',
      description: 'Teleconsulta odontológica de urgência',
      price: 15.00,
      category: 'Assistência'
    },
    {
      id: '11',
      name: 'Assistência odontológica',
      description: 'Reembolso de até R$ 500,00 por ano',
      price: 25.00,
      category: 'Assistência'
    },
    {
      id: '12',
      name: 'Sorteios mensais',
      description: 'Capitalização de R$ 10 mil mensais',
      price: 10.00,
      category: 'Assistência'
    },
    {
      id: '13',
      name: 'Assistência para pets',
      description: 'Cobertura para cuidados veterinários',
      price: 20.00,
      category: 'Assistência'
    },
    {
      id: '14',
      name: 'Assistência psicológica',
      description: 'Cobertura para atendimento psicológico',
      price: 25.00,
      category: 'Assistência'
    },
    {
      id: '15',
      name: 'Assistência residencial',
      description: 'Cobertura para serviços residenciais',
      price: 18.00,
      category: 'Assistência'
    },
    {
      id: '16',
      name: 'Subsídio de medicamentos',
      description: 'Auxílio para compra de medicamentos',
      price: 20.00,
      category: 'Assistência'
    },
    // Coberturas
    {
      id: '17',
      name: 'Seguro Acidentes Pessoais',
      description: 'Cobertura de R$ 5 mil a R$ 40 mil',
      price: 25.00,
      category: 'Cobertura'
    },
    {
      id: '18',
      name: 'Assistência Funeral Familiar',
      description: 'Cobertura de R$ 5 mil',
      price: 15.00,
      category: 'Cobertura'
    }
  ];

  const handleBenefitToggle = (benefit: Benefit) => {
    const currentBenefits = selectedBenefits;
    const newBenefits = currentBenefits.includes(benefit.id)
      ? currentBenefits.filter(id => id !== benefit.id)
      : [...currentBenefits, benefit.id];
    
    setValue('selectedBenefits', newBenefits);
  };

  const calculateTotalPrice = (benefits: string[], employees: number) => {
    return benefits.reduce((total, benefitId) => {
      const benefit = benefitsList.find(b => b.id === benefitId);
      return total + (benefit?.price || 0);
    }, 0) * employees;
  };

  const onSubmit = async (data: BusinessFormType) => {
    setLoading(true);

    const cleanedData = {
      ...data,
      numberOfEmployees: Number(data.numberOfEmployees),
      totalPrice: calculateTotalPrice(data.selectedBenefits, Number(data.numberOfEmployees))
    };

    try {
      console.log('Formulário enviado:', cleanedData);
      setSuccess(true);
      reset();
    } catch (err) {
      alert('Erro ao enviar formulário. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#8566FB] mb-4">
            Planos Empresariais
          </h1>
          <p className="text-xl text-gray-900">
            Selecione o plano ideal para sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {predefinedPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 h-full flex flex-col"
            >
              <div className="flex flex-col items-center flex-1">
                <div className="w-16 h-16 flex items-center justify-center bg-[#38B6FF] bg-opacity-20 rounded-full mb-6">
                  <FaUsers className="w-8 h-8 text-[#38B6FF]" />
                </div>

                <span className="px-4 py-1.5 bg-[#8566FB] text-white rounded-full text-sm mb-6">
                  {plan.name}
                </span>

                <h3 className="text-2xl font-bold text-[#8566FB] mb-4 text-center leading-tight">{plan.description}</h3>
                
                <p className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  R$ {plan.price.toFixed(2)}
                  <span className="text-base font-normal text-gray-500 ml-1">/mês</span>
                </p>

                {/* Benefícios */}
                <div className="w-full mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Assistências</h4>
                  <ul className="space-y-4">
                    {allPlanBenefits.assistencias.map((benefit) => {
                      const isIncluded = hasBenefit(plan, benefit.id, 'assistencias');
                      return (
                        <li 
                          key={benefit.id} 
                          className={`flex items-start ${isIncluded ? 'text-gray-700' : 'text-gray-400 line-through'}`}
                        >
                          <FaCheck className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${isIncluded ? 'text-[#38B6FF]' : 'text-gray-300'}`} />
                          <span className="text-sm leading-relaxed">{benefit.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Coberturas */}
                <div className="w-full mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Coberturas</h4>
                  <ul className="space-y-4">
                    {allPlanBenefits.coberturas.map((benefit) => {
                      const isIncluded = hasBenefit(plan, benefit.id, 'coberturas');
                      return (
                        <li 
                          key={benefit.id} 
                          className={`flex items-start ${isIncluded ? 'text-gray-700' : 'text-gray-400 line-through'}`}
                        >
                          <FaCheck className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${isIncluded ? 'text-[#38B6FF]' : 'text-gray-300'}`} />
                          <span className="text-sm leading-relaxed">{benefit.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => toast.info('Entre em contato conosco para contratar este plano!')}
                className="w-full bg-[#38B6FF] text-white py-3.5 px-6 rounded-lg hover:bg-[#2b9fe6] transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Contratar
              </button>
            </motion.div>
          ))}
        </div>

        {/* Separador */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Botão Monte seu Plano */}
        <div className="relative flex justify-center mb-16">
          <button
            onClick={() => setShowCustomPlan(!showCustomPlan)}
            className="px-8 py-4 bg-[#38B6FF] text-white border-2 border-[#38B6FF] rounded-full text-lg font-medium hover:bg-white hover:text-[#38B6FF] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {showCustomPlan ? 'Ocultar Monte seu Plano' : 'Monte seu Plano Personalizado'}
          </button>
        </div>

        {/* Formulário Monte seu Plano */}
        {showCustomPlan && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa *</label>
                  <input
                    type="text"
                    {...register('companyName')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-[#38B6FF] focus:border-[#38B6FF] ${
                      errors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Digite o nome da empresa"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-xs text-red-500">{errors.companyName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    {...register('email')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-[#38B6FF] focus:border-[#38B6FF] ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="exemplo@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Número de Funcionários *</label>
                  <input
                    type="number"
                    {...register('numberOfEmployees')}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-[#38B6FF] focus:border-[#38B6FF] ${
                      errors.numberOfEmployees ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Digite o número de funcionários"
                    min="1"
                  />
                  {errors.numberOfEmployees && (
                    <p className="mt-1 text-xs text-red-500">{errors.numberOfEmployees.message}</p>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 mt-12">Selecione os Benefícios</h4>
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Assistências</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {benefitsList
                      .filter(benefit => benefit.category === 'Assistência')
                      .map((benefit) => (
                        <div
                          key={benefit.id}
                          onClick={() => handleBenefitToggle(benefit)}
                          className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                            selectedBenefits.includes(benefit.id)
                              ? 'border-[#38B6FF] bg-[#38B6FF]/5'
                              : 'border-gray-200 hover:border-[#38B6FF] hover:bg-[#38B6FF]/5'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                {benefit.name}
                              </h4>
                              <p className="text-xs text-gray-600 leading-snug">
                                {benefit.description}
                              </p>
                            </div>
                            <div className="ml-4 flex items-baseline">
                              <span className="text-xs text-[#8566FB]">R$</span>
                              <span className="text-base font-bold text-[#8566FB] ml-1">
                                {benefit.price.toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="mb-12">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Coberturas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {benefitsList
                      .filter(benefit => benefit.category === 'Cobertura')
                      .map((benefit) => (
                        <div
                          key={benefit.id}
                          onClick={() => handleBenefitToggle(benefit)}
                          className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                            selectedBenefits.includes(benefit.id)
                              ? 'border-[#38B6FF] bg-[#38B6FF]/5'
                              : 'border-gray-200 hover:border-[#38B6FF] hover:bg-[#38B6FF]/5'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                {benefit.name}
                              </h4>
                              <p className="text-xs text-gray-600 leading-snug">
                                {benefit.description}
                              </p>
                            </div>
                            <div className="ml-4 flex items-baseline">
                              <span className="text-xs text-[#8566FB]">R$</span>
                              <span className="text-base font-bold text-[#8566FB] ml-1">
                                {benefit.price.toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Mostrar preço total */}
              {selectedBenefits.length > 0 && (
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-base text-gray-600">Valor por funcionário:</span>
                      <div className="flex items-baseline">
                        <span className="text-sm text-[#8566FB]">R$</span>
                        <span className="text-lg font-bold text-[#8566FB] ml-1">
                          {(calculateTotalPrice(selectedBenefits, 1)).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <div>
                        <span className="text-lg font-semibold text-gray-900">Total mensal</span>
                        <span className="text-sm text-gray-500 ml-2">
                          ({watch('numberOfEmployees') || 0} {Number(watch('numberOfEmployees')) === 1 ? 'funcionário' : 'funcionários'})
                        </span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-sm text-[#8566FB]">R$</span>
                        <span className="text-2xl font-bold text-[#8566FB] ml-1">
                          {calculateTotalPrice(selectedBenefits, Number(watch('numberOfEmployees') || 0)).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    disabled={loading || selectedBenefits.length === 0}
                    className="bg-[#38B6FF] text-white py-3 px-8 rounded-lg hover:bg-[#2b9fe6] transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Enviando...' : 'Contratar'}
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}
