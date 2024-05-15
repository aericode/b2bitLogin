import { ChangeEvent } from "react";

type InputProps = {
  input: string;
  setInput: (newInput: string)=> void
  inputType: string
  BlockLabel: string
}

export function InputBlock({input,setInput, inputType}:InputProps){

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  return (
    <input
      type= {inputType}
      value={input}
      onChange={handlePasswordChange}
      placeholder="Enter your password"
    />
  );
};