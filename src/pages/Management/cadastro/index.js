import React from "react";
import {
  Container,
  Form,
  Input,
  InputGroup,
  Label,
  FileDropContainer,
  InputContainer
} from "./styles";

export default function Cadastro() {
  return (
    <Container>
      <Form>
        <FileDropContainer>
          <Label>Imagens</Label>
        </FileDropContainer>
        <InputContainer>
          <InputGroup>
            <Label for="formTitulo">Título</Label>
            <Input type="text" id="formTitulo" />
          </InputGroup>
          <InputGroup>
            <Label for="formDescricao">Descrição </Label>
            <Input type="textarea" id="formDescricao" />
          </InputGroup>
          <InputGroup>
            <Label for="formEndereco">Endereço </Label>
            <Input type="text" id="formEndereco" />
          </InputGroup>
          <InputGroup>
            <Label for="formTitulo">Título</Label>
            <Input type="text" id="formTitulo" />
          </InputGroup>
          <InputGroup>
            <Label for="formDescricao">Descrição </Label>
            <Input type="textarea" id="formDescricao" />
          </InputGroup>
          <InputGroup>
            <Label for="formEndereco">Endereço </Label>
            <Input type="text" id="formEndereco" />
          </InputGroup>
          <InputGroup>
            <Label for="formTitulo">Título</Label>
            <Input type="text" id="formTitulo" />
          </InputGroup>
          <InputGroup>
            <Label for="formDescricao">Descrição </Label>
            <Input type="textarea" id="formDescricao" />
          </InputGroup>
          <InputGroup>
            <Label for="formEndereco">Endereço </Label>
            <Input type="text" id="formEndereco" />
          </InputGroup>
          <InputGroup>
            <Label for="formTitulo">Título</Label>
            <Input type="text" id="formTitulo" />
          </InputGroup>
          <InputGroup>
            <Label for="formDescricao">Descrição </Label>
            <Input type="textarea" id="formDescricao" />
          </InputGroup>
          <InputGroup>
            <Label for="formEndereco">Endereço </Label>
            <Input type="text" id="formEndereco" />
          </InputGroup>
        </InputContainer>
      </Form>
    </Container>
  );
}
