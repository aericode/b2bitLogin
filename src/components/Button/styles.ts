import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.COLORS.BLUE_B2};
  border-radius: 9px;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  width: 100%;
  min-height: 45px;

  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  cursor: pointer;
`;

export default StyledButton;