import { Container, Profile } from "./styles";
import { Button } from "../Button";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <p>Desiree Possiedi</p>
          <Button variant="link" title="sair" />
        </div>

        <img src="https://github.com/desireecvp.png" alt="foto do usuário" />
      </Profile>
    </Container>
  );
}
