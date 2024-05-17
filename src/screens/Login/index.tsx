import { MouseEvent, useState } from 'react'
import logo from '../../assets/B2Bit_logo.png'
import { Container, HeaderImage, LoginCard, Wrapper } from './styles'
import { InputBlock } from '../../components/InputBlock';
import { Button } from '../../components/Button';

import axios from 'axios';


export function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSubmit = async () => {

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

  return (
    <Container>
      <LoginCard>
        <Wrapper>

          <HeaderImage src={logo} />
          <InputBlock
            input={emailInput}
            setInput={setEmailInput}
            blockLabel='E-mail'
            inputType='email'
            placeholderText='your@email.com'
          />

          <InputBlock
            input={passwordInput}
            setInput={setPasswordInput}
            blockLabel='Password'
            inputType='password'
            placeholderText='your password'
          />

          <Button
            onClick={() => handleSubmit()}
            text='Sign In'
          />
        </Wrapper>
      </LoginCard>
    </Container>
  )
}