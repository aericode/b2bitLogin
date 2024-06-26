import { StyledButton } from "./styles";

interface ButtonProps {
  text: string;
  onClick: (() => Promise<void>) | (() => void);
}

export function Button({text, onClick}: ButtonProps){
  return(
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  )
}