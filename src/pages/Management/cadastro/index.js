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
            <p>Dados Administrativos</p>
            <InputGroup type="text">
              <label htmlFor="formRef">Referência do corretor</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <input type="checkbox" id="formExclusividade" />
              <label for="formExclusividade">Exclusividade</label>
            </InputGroup>
          </ContextGroup>
          <ContextGroup>
            <p>Proprietário</p>
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
              <label for="formRef">Estado Civil</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <label for="formRef">Profissão</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <label for="formRef">E-mail</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <label for="formRef">Telefone Residencial</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <label for="formRef">Telefone Comercial</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <label for="formRef">Telefone Celular</label>
              <input type="text" id="formRef" />
            </InputGroup>
            <InputGroup>
              <label for="formRef">CEP</label>
              <input type="text" id="formRef" />
            </InputGroup>
          </ContextGroup>
          <ContextGroup>
            <p>Imóvel</p>
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
