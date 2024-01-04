import { Container } from "./styles";
import { ButtonTag } from "../../components/ButtonTag";
import { RatingStar } from '../../components/RatingStar';

export function MovieCard({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>

        <RatingStar />
     

      <p>{children.substring(0, 200)}...</p>

      <div>
        <ButtonTag variant="secondary" title="Ficção Científica" />
        <ButtonTag variant="secondary" title="Drama" />
        <ButtonTag variant="secondary" title="Família" />
      </div>
    </Container>
  );
}
