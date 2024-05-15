import styled from "styled-components";
import logo from '../../assets/logo.png'


export function Login() {
  const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.WHITE_1};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const LoginCard = styled.div`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    width: 440px;
    height: 200px;
    padding: 55px 26px;
    border-radius: 18px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);

    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const HeaderImage = styled.img`
    width: 310px;
    height: auto;
  `;

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