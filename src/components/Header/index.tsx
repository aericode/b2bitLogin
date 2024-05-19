import { useContext } from "react";
import { Button } from "../Button";
import { Container, Wrapper } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { UserData } from "../../Types/UserData";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  function logOut(){
    setUserData!({} as UserData)
    localStorage.setItem('accessToken', '');
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/');
  }

  return (
    <Container>
      <Wrapper>
        <Button
          onClick={ () => logOut()}
          text='Logout'
        />
      </Wrapper>
    </Container>
  )
}