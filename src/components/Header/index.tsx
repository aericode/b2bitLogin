import { Button } from "../Button";
import { Container, Wrapper } from "./styles";

export function Header() {

  return (
    <Container>
      <Wrapper>
        <Button
          onClick={async () => { }}
          text='Log out'
        />
      </Wrapper>
    </Container>
  )
}