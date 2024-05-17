import { useState } from 'react'
import logo from '../../assets/logo.png'
import { Container, HeaderImage, LoginCard, Wrapper } from './styles'
import { InputBlock } from '../../components/InputBlock';


export function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

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
            placeholderText='seu@email.com'
          />

          <InputBlock
            input={passwordInput}
            setInput={setPasswordInput}
            blockLabel='Senha'
            inputType='password'
            placeholderText='sua senha'
          />
        </Wrapper>
      </LoginCard>
    </Container>
  )
}