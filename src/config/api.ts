const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const api = {
  baseURL: API_URL,
  endpoints: {
    plans: '/api/plans',
    health: '/health'
  }
};
