import { ChangeEvent } from "react";
import { Container } from "./styles";

type InputProps = {
  input: string;
  setInput: (newInput: string) => void
  inputType: string
  blockLabel: string
  placeholderText: string
}

export function InputBlock({ input, setInput, inputType, blockLabel, placeholderText }: InputProps) {

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  return (
    <Container>
      <p>{blockLabel}</p>
      <input
        type={inputType}
        value={input}
        onChange={handlePasswordChange}
        placeholder={placeholderText}
      />
    </Container>
  );
};