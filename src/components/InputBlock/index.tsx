import { ChangeEvent } from "react";
import { Container, StyledInput, StyledLabel } from "./styles";

type InputProps = {
  input: string;
  setInput: (newInput: string) => void
  inputType: string
  blockLabel: string
  placeholderText: string
}

export function InputBlock({ input, setInput, inputType, blockLabel, placeholderText }: InputProps) {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  return (
    <Container>
      <StyledLabel>
        {blockLabel}
      </StyledLabel>
      <StyledInput
        type={inputType}
        value={input}
        onChange={handleInputChange}
        placeholder={placeholderText}
      />
    </Container>
  );
};