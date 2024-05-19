import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE_1};
  width: 100vw;
  height: 70px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 300px;
  height: 50px;
  padding: 10px;

`