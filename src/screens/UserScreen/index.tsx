import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { Container, LoginCard, Wrapper } from "../Login/styles";

export function UserScreen() {
  const { userData, setUserData } = useContext(UserContext);



  return (
    <Container>
      <LoginCard>
        <Wrapper>
          <img src={userData.avatar.low} alt="Your Image" />
          <p>{userData.name}</p>
          <p>{userData.email}</p>
        </Wrapper>
      </LoginCard>
    </Container>
  )
}