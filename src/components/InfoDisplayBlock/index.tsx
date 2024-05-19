import { Container, LabelBlock, LabelEnd, LabelStart, StyledInput } from "./styles";

type InfoDisplayBlockProps = {
  displayText: string
  blockLabel: string
}

export function InfoDisplayBlock({ displayText, blockLabel }: InfoDisplayBlockProps) {


  return (
    <Container>
      <LabelBlock>
        <LabelStart>
          Your&nbsp;
        </LabelStart>
        <LabelEnd>
          {blockLabel}
        </LabelEnd>
      </LabelBlock>
      <StyledInput
        value={displayText}
        readOnly
      />
    </Container>
  );
};