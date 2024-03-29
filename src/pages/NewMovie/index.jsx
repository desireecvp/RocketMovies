import { Button } from "../../components/Button";
import { StyledTextArea } from "../../components/StyledTextArea/styles";
import { FiArrowLeft } from "react-icons/fi";
import { DeleteButton, Main, Wrapper } from "./styles";
import { Input } from "../../components/Input";
import { Container } from "../../components/Container";
import { Markers } from "../../components/Markers";

export function NewMovie() {
  return (
    <Main>
      <Button
        title={
          <>
            <FiArrowLeft /> Voltar
          </>
        }
        variant={"link"}
      />

      <h1>Novo filme</h1>

      <Wrapper>
        <div>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>

        <StyledTextArea placeholder="Observações" />

        <p>Marcadores</p>

        <Markers />

        <div>
          <DeleteButton>Excluir filme</DeleteButton>
          <Button variant="primary" title="Salvar alterações"></Button>
        </div>
      </Wrapper>
    </Main>
  );
}
