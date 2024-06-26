import { useContext, useState } from 'react'
import logo from '../../assets/B2Bit_logo.png'
import { Container, HeaderImage, LoginCard, Wrapper } from './styles'
import { InputBlock } from '../../components/InputBlock';
import { Button } from '../../components/Button';
import { sendCredentialsLoginRequest } from '../../utils/sendCredentialsLoginRequest';
import { UserData } from '../../Types/UserData';
import { TokenData } from '../../Types/TokenData';
import { UserContext } from '../../contexts/UserContext';

import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  
  
  const handleSubmit = async() => {
    try{
      const requestResponse = await sendCredentialsLoginRequest(emailInput, passwordInput)
      const fetchedUserData  :UserData  = requestResponse.user;
      const fetchedTokenData :TokenData = requestResponse.tokens;

      handleLoginSuccess(fetchedUserData, fetchedTokenData);
    }catch (error) {
      handleLoginFailure();
    }
  }

  function handleLoginSuccess(fetchedUserData  :UserData, fetchedTokenData :TokenData){
    setUserData!(fetchedUserData)
    localStorage.setItem('accessToken', fetchedTokenData.access);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/user');

  }

  function handleLoginFailure(){
    toast.error("Invalid credentials. Please try again.");
  }


  return (
    <Container>
      <LoginCard>
        <Toaster />
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