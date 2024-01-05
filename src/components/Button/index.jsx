import { Container } from "./styles";

export function Button({
  title,
  loading = false,
  variant = "primary",
  ...rest
}) {
  return (
    <Container variant={variant} type="button" disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}    
