import { Header } from "../Header";
import { Container as StyledContainer } from "./styles";

export function Container({ children }) {
  return (
    <StyledContainer>
      <Header />
      {children}
    </StyledContainer>
  );
}
