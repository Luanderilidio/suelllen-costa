// src/api/index.ts
import axios from 'axios';

export const VITE_BACK_END_URL = import.meta.env.VITE_BACK_END_URL;

// console.log('API_URL:', VITE_BACK_END_URL); // Verifique se está imprimindo o valor correto no console

const api = axios.create({
  baseURL: VITE_BACK_END_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;