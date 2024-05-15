import { useState } from 'react'
import logo from '../../assets/logo.png'
import { Container, HeaderImage, LoginCard } from './styles'


export function Login() {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <Container>
      <LoginCard>
        <HeaderImage src={logo} />

      </LoginCard>
    </Container>
  )
}