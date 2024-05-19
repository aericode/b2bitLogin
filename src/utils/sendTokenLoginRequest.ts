import axios from "axios";

export const sendTokenLoginRequest = async () => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axios.get(
      'https://api.homologation.cliqdrive.com.br/auth/profile/'
      ,
      {
        headers: {
          'Authorization' : `Bearer ${accessToken}`,
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