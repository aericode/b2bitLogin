import axios from "axios";
import { UserData } from "../Types/UserData";

const api = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br/',
  headers: {
    'Accept': 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

export const sendTokenLoginRequest = async () => {
  try {
    const response = await api.get('auth/profile/') as UserData;
    return response;
  } catch (error) {
      throw error;
  }
};