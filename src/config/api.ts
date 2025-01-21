// Verifica se estamos em desenvolvimento ou produção
const isDevelopment = import.meta.env.DEV;

// Use localhost em desenvolvimento e a URL do Render em produção
const API_URL = isDevelopment 
  ? 'http://localhost:5000'
  : import.meta.env.VITE_API_URL;

console.log('API URL:', API_URL); // Para debug

export const api = {
  baseURL: API_URL,
  endpoints: {
    plans: '/api/plans',
    partners: '/api/partners',
    health: '/health'
  }
};
