import { useState } from 'react'
import logo from '../../assets/B2Bit_logo.png'
import { Container, HeaderImage, LoginCard, Wrapper } from './styles'
import { InputBlock } from '../../components/InputBlock';
import { Button } from '../../components/Button';


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
            onClick={()=>{}}
            text='Sign In'
          />
        </Wrapper>
      </LoginCard>
    </Container>
  )
}