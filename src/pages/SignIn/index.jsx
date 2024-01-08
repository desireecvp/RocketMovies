import { Main, Background, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";
export function SignIn() {
  return (
    <Main>
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Faça seu login</h2>

          <Input placeholder="E-mail" type="text" icon={<FiMail />} />
          <Input placeholder="Senha" type="password" icon={<FiLock />} />

          <Button title="Entrar" />

          <Button title="Criar conta" variant="link" />
        </div>
      </Form>

      <Background />
    </Main>
  );
}
