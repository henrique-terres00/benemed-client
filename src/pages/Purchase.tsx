import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaUser, FaUsers } from 'react-icons/fa';

interface PlanFeatures {
  assistencias: string[];
  coberturas: string[];
}

interface PlanType {
  id: string;
  name: string;
  type: 'individual' | 'family';
  price: number;
  features: PlanFeatures;
  description: string;
}

export default function Purchase() {
  const [selectedType, setSelectedType] = useState<'individual' | 'family'>('individual');

  const plans: PlanType[] = [
    // Planos Bem-estar
    {
      id: '1',
      name: 'Bem-estar Individual',
      description: 'Proteção essencial para você',
      type: 'individual',
      price: 49.90,
      features: {
        assistencias: [
          'Orientação saúde + Telemedicina',
          'Descontos em medicamentos'
        ],
        coberturas: [
          'Acidentes pessoais R$10 mil',
          'Assistência funeral R$5 mil'
        ]
      }
    },
    {
      id: '2',
      name: 'Bem-estar Familiar',
      description: 'Proteção essencial para sua família',
      type: 'family',
      price: 89.90,
      features: {
        assistencias: [
          'Orientação saúde + Telemedicina',
          'Descontos em medicamentos'
        ],
        coberturas: [
          'Acidentes pessoais R$10 mil',
          'Assistência funeral R$5 mil'
        ]
      }
    },
    // Planos Essencial
    {
      id: '3',
      name: 'Essencial Individual',
      description: 'Proteção completa para você',
      type: 'individual',
      price: 69.90,
      features: {
        assistencias: [
          'Orientação saúde + Telemedicina',
          'Descontos em medicamentos',
          'Rede física',
          'Assistência residencial'
        ],
        coberturas: [
          'Acidentes pessoais R$10 mil',
          'Assistência funeral R$5 mil'
        ]
      }
    },
    {
      id: '4',
      name: 'Essencial Familiar',
      description: 'Proteção completa para sua família',
      type: 'family',
      price: 129.90,
      features: {
        assistencias: [
          'Orientação saúde + Telemedicina',
          'Descontos em medicamentos',
          'Rede física',
          'Assistência residencial'
        ],
        coberturas: [
          'Acidentes pessoais R$10 mil',
          'Assistência funeral R$5 mil'
        ]
      }
    },
    // Planos Protege
    {
      id: '5',
      name: 'Protege Individual',
      description: 'Proteção ampliada para você',
      type: 'individual',
      price: 89.90,
      features: {
        assistencias: [
          'Orientação saúde + Telemedicina',
          'Descontos em medicamentos',
          'Rede física',
          'Assistência residencial',
          'Assistência pet'
        ],
        coberturas: [
          'Acidentes pessoais R$10 mil',
          'Assistência funeral R$5 mil'
        ]
      }
    },
    {
      id: '6',
      name: 'Protege Familiar',
      description: 'Proteção ampliada para sua família',
      type: 'family',
      price: 169.90,
      features: {
        assistencias: [
          'Orientação saúde + Telemedicina',
          'Descontos em medicamentos',
          'Rede física',
          'Assistência residencial',
          'Assistência pet'
        ],
        coberturas: [
          'Acidentes pessoais R$10 mil',
          'Assistência funeral R$5 mil'
        ]
      }
    },
    // Planos Premium
    {
      id: '7',
      name: 'Premium Individual',
      description: 'Proteção máxima para você',
      type: 'individual',
      price: 129.90,
      features: {
        assistencias: [
          'Orientação saúde + Telemedicina',
          'Descontos em medicamentos',
          'Rede física',
          'Assistência residencial',
          'Assistência pet',
          'Check-up completo'
        ],
        coberturas: [
          'Acidentes pessoais R$10 mil',
          'Assistência funeral R$5 mil'
        ]
      }
    },
    {
      id: '8',
      name: 'Premium Familiar',
      description: 'Proteção máxima para sua família',
      type: 'family',
      price: 249.90,
      features: {
        assistencias: [
          'Orientação saúde + Telemedicina',
          'Descontos em medicamentos',
          'Rede física',
          'Assistência residencial',
          'Assistência pet',
          'Check-up completo'
        ],
        coberturas: [
          'Acidentes pessoais R$10 mil',
          'Assistência funeral R$5 mil'
        ]
      }
    }
  ];

  const getFeaturesList = (features: PlanFeatures) => {
    return {
      assistencias: features.assistencias,
      coberturas: features.coberturas
    };
  };

  const allFeatures = {
    assistencias: [
      'Orientação saúde + Telemedicina',
      'Descontos em medicamentos',
      'Rede física',
      'Assistência residencial',
      'Assistência pet',
      'Check-up completo'
    ],
    coberturas: [
      'Acidentes pessoais R$10 mil',
      'Assistência funeral R$5 mil'
    ]
  };

  const hasFeature = (planFeatures: string[], feature: string) => {
    return planFeatures.includes(feature);
  };

  const filteredPlans = plans.filter(plan => 
    selectedType === 'individual' ? plan.type === 'individual' : plan.type === 'family'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#8566FB] mb-4">
            Nossos Planos
          </h1>
          <p className="text-xl text-gray-900">
            Selecione o plano ideal para você ou sua família
          </p>

          {/* Seletor de tipo de plano */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setSelectedType('individual')}
              className={`flex items-center px-6 py-2 rounded-full ${
                selectedType === 'individual'
                  ? 'bg-[#38B6FF] text-white'
                  : 'bg-white text-gray-600 border border-gray-300'
              } transition-all duration-200`}
            >
              <FaUser className="mr-2" />
              Individual
            </button>
            <button
              onClick={() => setSelectedType('family')}
              className={`flex items-center px-6 py-2 rounded-full ${
                selectedType === 'family'
                  ? 'bg-[#38B6FF] text-white'
                  : 'bg-white text-gray-600 border border-gray-300'
              } transition-all duration-200`}
            >
              <FaUsers className="mr-2" />
              Familiar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 h-full flex flex-col"
            >
              <div className="flex flex-col items-center flex-1">
                <div className="w-16 h-16 flex items-center justify-center bg-[#38B6FF] bg-opacity-20 rounded-full mb-6">
                  {selectedType === 'individual' ? (
                    <FaUser className="w-8 h-8 text-[#38B6FF]" />
                  ) : (
                    <FaUsers className="w-8 h-8 text-[#38B6FF]" />
                  )}
                </div>

                <span className="px-4 py-1.5 bg-[#8566FB] text-white rounded-full text-sm mb-6">
                  {plan.name}
                </span>

                <h3 className="text-2xl font-bold text-[#8566FB] mb-4 text-center leading-tight">
                  {plan.description}
                </h3>
                
                <p className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  R$ {plan.price.toFixed(2)}
                  <span className="text-base font-normal text-gray-500 ml-1">/mês</span>
                </p>

                {/* Benefícios */}
                <div className="w-full mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Assistências Saúde</h4>
                  <ul className="space-y-4">
                    {allFeatures.assistencias.map((feature, index) => {
                      const isIncluded = hasFeature(getFeaturesList(plan.features).assistencias, feature);
                      return (
                        <li 
                          key={index} 
                          className={`flex items-start ${isIncluded ? 'text-gray-700' : 'text-gray-400 line-through'}`}
                        >
                          <FaCheck className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${isIncluded ? 'text-[#38B6FF]' : 'text-gray-300'}`} />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Coberturas */}
                <div className="w-full mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Coberturas</h4>
                  <ul className="space-y-4">
                    {allFeatures.coberturas.map((feature, index) => {
                      const isIncluded = hasFeature(getFeaturesList(plan.features).coberturas, feature);
                      return (
                        <li 
                          key={index} 
                          className={`flex items-start ${isIncluded ? 'text-gray-700' : 'text-gray-400 line-through'}`}
                        >
                          <FaCheck className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${isIncluded ? 'text-[#38B6FF]' : 'text-gray-300'}`} />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => console.log('Entre em contato conosco para contratar este plano!')}
                className="w-full bg-[#38B6FF] text-white py-3.5 px-6 rounded-lg hover:bg-[#2b9fe6] transform hover:scale-105 transition-all duration-300 mt-6 font-medium"
              >
                Contratar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
