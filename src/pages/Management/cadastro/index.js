import React from "react";
import {
  Container,
  Title,
  Form,
  InputGroup,
  FileDropContainer,
  InputContainer
} from "./styles";

export default function Cadastro() {
  return (
    <Container>
      <Title>Ficha de Captação de Imóveis</Title>
      <Form>
        <FileDropContainer>
          <p>Imagens</p>
        </FileDropContainer>
        <InputContainer>
          Dados Administrativos
          <InputGroup>
            <label for="formRef">Referência do Corretor</label>
            <input type="text" id="formRef" />
          </InputGroup>
        </InputContainer>
      </Form>
    </Container>
  );
}
