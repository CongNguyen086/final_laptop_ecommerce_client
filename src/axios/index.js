import axios from 'axios';
import { BASE_URL } from '../config/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  const refreshToken = `Bearer ${localStorage.getItem('refreshToken')}`;
  config.headers.common.authorization = token;
  config.headers.common.refreshtoken = refreshToken;
  return config;
});

export { axiosInstance };
