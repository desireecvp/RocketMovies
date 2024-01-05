import { Header } from "../Header";
import { Container as StyledContainer } from "./styles";

export function Container({ children, showHeader = true }) {
  return (
    <>
      {showHeader ? <Header /> : null}
    <StyledContainer>
      {children}
    </StyledContainer>
    </>
  );
}
