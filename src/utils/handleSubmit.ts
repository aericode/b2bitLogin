import axios from 'axios';


export const handleSubmit = async (emailInput: string, passwordInput: string) => {

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

    console.log('Response:', response.data);
  } catch (error) {
    if(error instanceof Error)console.error('Error:', error.message);
  }
};