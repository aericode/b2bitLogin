import axios from "axios";
import { AuthResponse } from "../Types/AuthResponse";

const api = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br',
  headers: {
    'Accept': 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
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
    return Promise.reject(error);
  }
);

export const sendCredentialsLoginRequest = async (emailInput: string, passwordInput: string) => {
  try {
    const payload = {
      email: emailInput,
      password: passwordInput,
    };
    const response = await api.post('/auth/login/', payload) as AuthResponse;
    return response;
  } catch (error) {
    throw error;
  }
};