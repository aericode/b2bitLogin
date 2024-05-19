import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const LabelBlock = styled.div`
  margin-bottom: 8px;
`
export const LabelStart = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
`

export const LabelEnd = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`

export const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  height: 35px;
  border-radius: 9px;
  padding: 2px 10px;

  background-color: ${({ theme }) => theme.COLORS.WHITE_3};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_6};
`;