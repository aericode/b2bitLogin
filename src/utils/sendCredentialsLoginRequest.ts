import axios from "axios";

export const sendCredentialsLoginRequest = async (emailInput: string, passwordInput: string) => {
  
  try {
    const payload = {
      email: emailInput,
      password: passwordInput,
    };
    const response = await axios.post(
      'https://api.homologation.cliqdrive.com.br/auth/login/',
      payload,
      {
        headers: {
          'Accept': 'application/json;version=v1_web',
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    if(error instanceof Error)throw error;
  }
};