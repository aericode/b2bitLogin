import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

import { InfoDisplayBlock } from "../../components/InfoDisplayBlock";
import { sendTokenLoginRequest } from "../../utils/sendTokenLoginRequest";
import { UserData } from "../../Types/UserData";
import { Container, ProfileHeaderText, ProfileImage, ProfilePictureBlock, UserCard, Wrapper } from "./styles";
import { Header } from "../../components/Header";

export function UserScreen() {
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const fetchData = async () => {
      try {
        const requestResponse = await sendTokenLoginRequest();
        const fetchedUserData: UserData = requestResponse as UserData
        setUserData!(fetchedUserData);

      } catch (error) {
        console.log(error);
      }
    };


    if (isLoggedIn === 'true' && !userData) {
      fetchData();
    }
  }, []);


  return (
    <Container>
        <Header />
      <UserCard>
        <Wrapper>
          {userData &&
            <>
              <ProfilePictureBlock>
                <ProfileHeaderText> Profile Picture </ProfileHeaderText>
                <ProfileImage src={userData.avatar.low}/>
              </ProfilePictureBlock>

              < InfoDisplayBlock
                displayText={userData.name}
                blockLabel="Name"
              />

              <InfoDisplayBlock
                displayText={userData.email}
                blockLabel="E-mail"
              />
            </>
          }
        </Wrapper>
      </UserCard>
    </Container>
  )
}