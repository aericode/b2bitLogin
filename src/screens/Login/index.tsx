import { useState } from 'react'
import logo from '../../assets/B2Bit_logo.png'
import { Container, HeaderImage, LoginCard, Wrapper } from './styles'
import { InputBlock } from '../../components/InputBlock';
import { Button } from '../../components/Button';
import { sendLoginRequest } from '../../utils/sendLoginRequest';
import { UserData } from '../../Types/UserData';
import { TokenData } from '../../Types/TokenData';



export function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  
  const handleSubmit = async() => {
    try{
      const requestResponse = await sendLoginRequest(emailInput, passwordInput)
      const userData  :UserData  = requestResponse.user;
      const tokenData :TokenData = requestResponse.tokens;

      handleLoginSuccess(userData, tokenData);
    }catch (error) {
      handleLoginFailure();
    }
  }

  function handleLoginSuccess(userData  :UserData, tokenData :TokenData){

  }

  function handleLoginFailure(){

  }


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