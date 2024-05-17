import styled from "styled-components";

export const Container = styled.div`
background-color: ${({ theme }) => theme.COLORS.WHITE_1};
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

export const LoginCard = styled.div`
background-color: ${({ theme }) => theme.COLORS.WHITE};
width: 440px;
height: 280px;
padding: 55px 26px;
border-radius: 18px;
box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);

display: flex;
align-items: center;
justify-content: center;

`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100%;
width: 90%;
`;

export const HeaderImage = styled.img`
width: 300px;
height: auto;
margin-bottom: 30px;
`;
