import axios from "axios";

export const sendLoginRequest = async (emailInput: string, passwordInput: string) => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axios.post(
      'https://api.homologation.cliqdrive.com.br/auth/login/'
      ,
      {
        headers: {
          'Authorization' : accessToken,
          'Accept': 'application/json;version=v1_web',
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(response.data)
    return response.data;
  } catch (error) {
    if(error instanceof Error)throw error;
  }
};