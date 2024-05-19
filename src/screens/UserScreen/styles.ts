import styled from "styled-components";

export const Container = styled.div`
background-color: ${({ theme }) => theme.COLORS.WHITE_6};
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

export const UserCard = styled.div`
background-color: ${({ theme }) => theme.COLORS.WHITE};
width: 356px;
height: 315px;
padding: 20px 26px;
border-radius: 18px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);


display: flex;
align-items: center;
justify-content: center;

`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height:270px;
width: 90%;
`;

export const ProfilePictureBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`

export const ProfileHeaderText = styled.p`
font-size: ${({ theme }) => theme.FONT_SIZE.SM};
font-weight: ${({ theme }) => theme.FONT_WEIGHT.SEMIBOLD};
margin-bottom: 8px;
`;

export const ProfileImage = styled.img`
width: 80px;
height: 80px;
margin-bottom: 20px;
border-radius: 8px;
`;
