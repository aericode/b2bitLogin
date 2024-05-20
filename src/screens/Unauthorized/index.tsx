
import { Container, Card, Wrapper, StyledHeader, StyledText } from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function Unauthorized() {
  const navigate = useNavigate();

  function redirectToLogin(){
    navigate('/');
  }
  return (
    <Container>
      <Card>
        <Wrapper>
          <StyledHeader>Content available only for logged users</StyledHeader>
          <StyledText>Please login to access this page</StyledText>
          <Button onClick={()=>redirectToLogin()} text="Back to Login"/>
        </Wrapper>
      </Card>
    </Container>
  )
}