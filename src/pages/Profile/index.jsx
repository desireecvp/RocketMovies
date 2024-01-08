import { Header } from "./styles";
import { Button } from "../../components/Button";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Avatar, Form } from "./styles";
import { Input } from "../../components/Input";

export function Profile() {
  return (
    <>
      <Header>
        <Button
          title={
            <>
              <FiArrowLeft />
              Voltar
            </>
          }
          variant="link"
        ></Button>
      </Header>

      <Avatar>
        <img src="https://github.com/desireecvp.png" alt="" />
        <label htmlFor="avatar">
          <FiCamera />
        </label>
        <input id="avatar" type="file" placeholder="" />
      </Avatar>

      <Form>
                <Input
                placeholder="Nome"
                type="text"
                icon={<FiUser/>}
                />

                <Input 
                placeholder="E-mail"
                type="text"
                icon={<FiMail/>}
                />

                <Input 
                placeholder="Senha atual"
                type="password"
                icon={<FiLock/>}
                />

                <Input 
                placeholder="Nova senha"
                type="password"
                icon={<FiLock/>}
                />

                <Button title="Salvar"></Button>
      </Form>
    </>
  );
}
