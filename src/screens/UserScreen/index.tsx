import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

import { InfoDisplayBlock } from "../../components/InfoDisplayBlock";
import { sendTokenLoginRequest } from "../../utils/sendTokenLoginRequest";
import { UserData } from "../../Types/UserData";
import { Container, ProfileHeaderText, ProfilePicture, ProfilePictureBlock, ProfilePictureWrapper, UserCard, Wrapper } from "./styles";
import { Header } from "../../components/Header";
import { Spinner } from "../../components/Spinner";
import { useNavigate } from "react-router-dom";

export function UserScreen() {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();



  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const fetchData = async () => {
      try {
        const requestResponse = await sendTokenLoginRequest();

        const fetchedUserData: UserData = requestResponse;
        setUserData!(fetchedUserData);

      } catch (error) {
        console.log(error);
      }
    };

    if (isLoggedIn !== 'true') {
      navigate('/unauthorized');
    }


    if (isLoggedIn === 'true' && !userData) {
      fetchData();
    }
  }, []);


  return (
    <Container>
      <Header />
      <UserCard>
        <Wrapper>
          {userData ?
            <>
              <ProfilePictureBlock>
                <ProfileHeaderText> Profile Picture </ProfileHeaderText>
                {
                  userData ?
                  <ProfilePictureWrapper>
                    <ProfilePicture src={userData.avatar.low} />
                  </ProfilePictureWrapper>
                :
                <Spinner />
                }
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
            :
            <Spinner />
          }
        </Wrapper>
      </UserCard>
    </Container>
  )
}