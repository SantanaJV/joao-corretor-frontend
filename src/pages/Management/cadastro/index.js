import React from "react";
import {
  Container,
  Title,
  Form,
  ContextGroup,
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
          <p>Upload de Imagens</p>
        </FileDropContainer>
        <InputContainer>
          <ContextGroup>
            <h3>Dados Administrativos</h3>
            <InputGroup>
              <label for="formRef">Referência do corretor</label>
              <input type="text" id="formRef" />
            </InputGroup>
          </ContextGroup>
          <ContextGroup>
            <h3>Proprietário</h3>
            <InputGroup>
              <label for="formRef">Nome completo</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <label for="formRef">CPF</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <label for="formRef">RG</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <label for="formRef">CEP</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <label for="formRef">E-mail</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <label for="formRef">Telefone</label>
              <input type="text" id="formRef" />
            </InputGroup>
          </ContextGroup>
          <ContextGroup>
            <h3>Imóvel</h3>
            <InputGroup>
              <label for="formRef">Referência do destinatário</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <label for="formRef">Referência do Corretor</label>
              <input type="text" id="formRef" />
            </InputGroup>
          </ContextGroup>
        </InputContainer>
      </Form>
    </Container>
  );
}
