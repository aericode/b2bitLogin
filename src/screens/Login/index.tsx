import logo from '../../assets/logo.png'
import { Container, HeaderImage, LoginCard } from './styles'


export function Login() {


  return (
    <Container>
      <LoginCard>
        <HeaderImage src={logo} />
        <p>
          myApps
        </p>
      </LoginCard>
    </Container>
  )
}