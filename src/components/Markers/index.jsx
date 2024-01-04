import { Button } from "../Button";
import { Container, NewMarkerButton } from "./styles";

import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

export function Markers() {
  return (
    <Container>
      
        <div>
          <Button
          variant="secondary"
            title={
              <>
                <span>React</span>
                <AiOutlineClose />
              </>
            }
          ></Button>
        </div>

        <NewMarkerButton>
           <span></span> Novo marcador <AiOutlinePlus />
        </NewMarkerButton>
      
    </Container>
  );
}
