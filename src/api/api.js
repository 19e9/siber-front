import axios from 'axios';

// Backend API'nin temel URL'si
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000/api',
});

// Admin giriş için API çağrısı
export const login = (formData) => API.post('/admin/login', formData);

// Random Hash endpoint'ini çağıran API
export const fetchHashes = () => API.get('/hash/random-hashes');

// SQL Injection simülasyonu için API
export const sqlLogin = (formData) => API.post('/sql/sql-login', formData);
