import { MouseEvent } from 'react';
import { StyledButton } from "./styles";

interface ButtonProps {
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Button({text, onClick}: ButtonProps){
  return(
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  )
}