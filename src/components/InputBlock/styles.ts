import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const StyledLabel = styled.p`
font-size: ${({ theme }) => theme.FONT_SIZE.LG};
font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
margin-bottom: 5px;
`

export const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  height: 35px;
  border-radius: 9px;
  padding: 2px 10px;

  background-color: ${({ theme }) => theme.COLORS.WHITE_3};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_6};
`;