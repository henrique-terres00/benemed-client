import { create } from 'zustand';
import { Partner } from '../types';

interface BeneMedStore {
  partners: Partner[];
  setPartners: (partners: Partner[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

export const useBeneMedStore = create<BeneMedStore>((set) => ({
  partners: [],
  setPartners: (partners) => set({ partners }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  error: null,
  setError: (error) => set({ error }),
}));
