import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import { Container, LoginCard, Wrapper } from "../Login/styles";
import { InfoDisplayBlock } from "../../components/InfoDisplayBlock";
import { sendTokenLoginRequest } from "../../utils/sendTokenLoginRequest";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../Types/UserData";

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
      <LoginCard>
        <Wrapper>
          {userData &&
            <>
              <img src={userData.avatar.low} alt="Profile picture" />

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
      </LoginCard>
    </Container>
  )
}