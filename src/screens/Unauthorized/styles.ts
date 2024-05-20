import styled from "styled-components";

export const Container = styled.div`
background-color: ${({ theme }) => theme.COLORS.WHITE_6};
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

export const Card = styled.div`
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

export const StyledHeader = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  text-align: center;
`

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
`