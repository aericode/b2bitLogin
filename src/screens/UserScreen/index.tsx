import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { Container, LoginCard, Wrapper } from "../Login/styles";
import { InfoDisplayBlock } from "../../components/InfoDisplayBlock";

export function UserScreen() {
  const { userData, setUserData } = useContext(UserContext);



  return (
    <Container>
      <LoginCard>
        <Wrapper>
          {userData.avatar && <img src={userData.avatar.low} alt="Profile picture" />}
          <InfoDisplayBlock
            displayText={userData.name}
            blockLabel="Name"
          />

          <InfoDisplayBlock
            displayText={userData.email}
            blockLabel="E-mail"
          />

        </Wrapper>
      </LoginCard>
    </Container>
  )
}