import { Main, Background, Form, PageTitle, Info } from "../SignUp/styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignUp() {
  return (
    <Main>
      <Background />

      <Form>
        <PageTitle>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Crie sua conta</h2>
        </PageTitle>

        <Info>
          <Input placeholder="Nome" type="text" icon={<FiUser />} />
          <Input placeholder="E-mail" type="text" icon={<FiMail />} />
          <Input placeholder="Senha" type="password" icon={<FiLock />} />

          <Button title="Cadastrar" />
          <Button title={"Voltar para o login"} variant={"link"} icon={<FiArrowLeft/>}/>
        </Info>
      </Form>
    </Main>
  );
}
