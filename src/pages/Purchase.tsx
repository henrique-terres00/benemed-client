import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import { api } from '../config/api';

interface PlanFeatures {
  orientacao_telemedicina: boolean;
  descontos_medicamentos: boolean;
  rede_fisica: boolean;
  assistencia_residencial: boolean;
  assistencia_pet: boolean;
  check_up: boolean;
  acidentes_pessoais: boolean;
  assistencia_funeral: boolean;
}

interface Plan {
  id: string;
  name: string;
  category: 'Bem-estar' | 'Essencial' | 'Protege' | 'Premium';
  is_family: boolean;
  price: number;
  features: PlanFeatures;
}

export default function Purchase() {
  const [selectedType, setSelectedType] = useState<'individual' | 'family'>('individual');
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${api.baseURL}${api.endpoints.plans}`);
        if (!response.ok) throw new Error('Failed to fetch plans');
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        console.error('Error loading plans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const filteredPlans = plans
    .filter(plan => selectedType === 'individual' ? !plan.is_family : plan.is_family)
    .sort((a, b) => {
      const order = ['Bem-estar', 'Essencial', 'Protege', 'Premium'];
      return order.indexOf(a.category) - order.indexOf(b.category);
    });

  if (loading) {
    return <div>Carregando planos...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#8566FB] mb-4">
            Escolha seu plano
          </h1>
          <p className="text-xl text-gray-900">
            Selecione o plano ideal para você e sua família
          </p>
        </div>

        {/* Seletor de Tipo */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-lg p-2 inline-flex shadow-sm">
            <button
              onClick={() => setSelectedType('individual')}
              className={`px-8 py-3 rounded-md flex items-center space-x-2 ${
                selectedType === 'individual'
                  ? 'bg-[#8566FB] text-white'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              <FaUser className="mr-2" />
              <span>Planos Individuais</span>
            </button>
            <button
              onClick={() => setSelectedType('family')}
              className={`px-8 py-3 rounded-md flex items-center space-x-2 ${
                selectedType === 'family'
                  ? 'bg-[#8566FB] text-white'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              <FaUser className="mr-2" />
              <span>Planos Familiares</span>
            </button>
          </div>
        </div>

        {/* Cards dos Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 max-w-7xl mx-auto">
          {filteredPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[#38B6FF] bg-opacity-20 rounded-full mb-4">
                  <FaUser className="w-8 h-8 text-[#38B6FF]" />
                </div>

                <span className="px-4 py-1 bg-[#8566FB] text-white rounded-full text-sm mb-4">
                  {plan.category}
                </span>

                <h3 className="text-2xl font-bold text-[#8566FB] mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-6">
                  R$ {plan.price.toFixed(2)}
                  <span className="text-base font-normal text-gray-500">/mês</span>
                </p>

                {/* Assistência Saúde */}
                <div className="w-full mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Assistência Saúde</h4>
                  <ul className="space-y-3">
                    <li className={`flex items-center ${plan.features.orientacao_telemedicina ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                      <svg className="w-5 h-5 text-[#38B6FF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Orientação saúde + Telemedicina
                    </li>
                    <li className={`flex items-center ${plan.features.descontos_medicamentos ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                      <svg className="w-5 h-5 text-[#38B6FF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Descontos em medicamentos
                    </li>
                    <li className={`flex items-center ${plan.features.rede_fisica ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                      <svg className="w-5 h-5 text-[#38B6FF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Rede Física
                    </li>
                    <li className={`flex items-center ${plan.features.assistencia_residencial ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                      <svg className="w-5 h-5 text-[#38B6FF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Assistência Residencial
                    </li>
                    <li className={`flex items-center ${plan.features.assistencia_pet ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                      <svg className="w-5 h-5 text-[#38B6FF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Assistência Pet
                    </li>
                    <li className={`flex items-center ${plan.features.check_up ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                      <svg className="w-5 h-5 text-[#38B6FF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Check-up completo
                    </li>
                  </ul>
                </div>

                {/* Seguros */}
                <div className="w-full">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Seguros</h4>
                  <ul className="space-y-3">
                    <li className={`flex items-center ${plan.features.acidentes_pessoais ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                      <svg className="w-5 h-5 text-[#38B6FF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Acidentes pessoais R$10 mil
                    </li>
                    <li className={`flex items-center ${plan.features.assistencia_funeral ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                      <svg className="w-5 h-5 text-[#38B6FF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Assistência funeral R$5 mil
                    </li>
                  </ul>
                </div>

                <button className="mt-8 w-full bg-[#38B6FF] text-white py-3 px-6 rounded-lg hover:bg-[#2b9fe6] transform hover:scale-105 transition-all duration-300">
                  Contratar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
