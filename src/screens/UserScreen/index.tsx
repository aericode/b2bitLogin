import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { Container, LoginCard, Wrapper } from "../Login/styles";

export function UserScreen() {
  const { userData, setUserData } = useContext(UserContext);



  return (
    <Container>
      <LoginCard>
        <Wrapper>
          <p>{userData.email}</p>
          <p>{userData.name}</p>
        </Wrapper>
      </LoginCard>
    </Container>
  )
}