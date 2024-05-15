import styled, { ThemeProvider } from 'styled-components'
import { theme } from './theme';



function App() {

  const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.WHITE_1};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;



  const LoginCard = styled.div`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    width: 438px;
    height: 200px;
    padding: 55px 26px;
    border-radius: 18px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
  `;


  return (

    <Container>
      <LoginCard>
        <p>
          myApp
        </p>
      </LoginCard>
    </Container>
  )
}

export default App
