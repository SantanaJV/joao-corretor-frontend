import React, { useState } from "react";
import {
  Container,
  Title,
  Form,
  ContextGroup,
  InputGroup,
  FileDropContainer,
  InputContainer
} from "./styles";
import Select from "react-select";
import axios from "axios";

export default function Cadastro() {
  const [residenciaProprietario, setResidenciaProprietario] = useState(false);
  const [residenciaProprietarioData, setResidenciaProprietarioData] = useState(
    {}
  );

  function handleChange(event) {}

  function handleSubmit(event) {
    event.persist();
    event.preventDefault();
    const { formNome, formReferencia, formExclusividade } = event.target;
    console.log(formExclusividade.checked);
  }

  async function handleCepChange(event) {
    const cep = event.target.value;
    const validacep = /^[0-9]{8}$/;

    if (!validacep.test(cep)) return console.log("Invalid cep");

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    setResidenciaProprietarioData(response.data);
  }

  return (
    <Container>
      <Title>Ficha de Captação de Imóveis</Title>
      <Form onSubmit={handleSubmit}>
        <FileDropContainer>
          <p>Upload de Imagens</p>
        </FileDropContainer>
        <InputContainer>
          <ContextGroup>
            <p>Dados Administrativos</p>
            <InputGroup type="text">
              <label htmlFor="formCodigo">Código</label>
              <input type="text" id="formCodigo" name="formCodigo" />
            </InputGroup>
            <InputGroup>
              <input
                type="checkbox"
                id="formExclusividade"
                name="formExclusividade"
              />
              <label htmlFor="formExclusividade">Exclusividade</label>
            </InputGroup>
          </ContextGroup>
          <ContextGroup>
            <p>Proprietário</p>
            <InputGroup>
              <label htmlFor="formNome">Nome completo</label>
              <input type="text" id="formNome" name="formNome" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="formCpf">CPF</label>
              <input type="text" id="formCpf" name="formCpf" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="formRg">RG</label>
              <input type="text" id="formRg" name="formRg" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="formRg">RG</label>
              <input type="text" id="formRg" name="formCpf" />
            </InputGroup>
            <InputGroup>
              <input
                type="checkbox"
                id="formResidenciaProprietario"
                name="formResidenciaProprietario"
                onChange={event => {
                  setResidenciaProprietario(event.target.checked);
                }}
              />
              <label htmlFor="formResidenciaProprietario">
                Proprietario reside no imóvel captado
              </label>
            </InputGroup>
            {!residenciaProprietario && (
              <>
                <InputGroup>
                  <label htmlFor="formResidenciaCep">CEP da residência</label>
                  <input
                    type="text"
                    id="formResidenciaCep"
                    name="formResidenciaCep"
                    onChange={handleCepChange}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="formResidenciaComplemento">Estado</label>
                  <input
                    type="text"
                    id="formResidenciaEstado"
                    name="formResidenciaEstado"
                    value={residenciaProprietarioData.uf}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="formResidenciaCidade">Cidade</label>
                  <input
                    type="text"
                    id="formResidenciaCidade"
                    name="formResidenciaCidade"
                    value={residenciaProprietarioData.localidade}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="formResidenciaBairro">Bairro</label>
                  <input
                    type="text"
                    id="formResidenciaBairro"
                    name="formResidenciaBairro"
                    value={residenciaProprietarioData.bairro}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="formResidenciaEndereco">Endereço</label>
                  <input
                    type="text"
                    id="formResidenciaEndereco"
                    name="formResidenciaEndereco"
                    value={residenciaProprietarioData.logradouro}
                  />
                </InputGroup>
              </>
            )}
          </ContextGroup>
          <ContextGroup>
            <p>Imóvel</p>
            <InputGroup>
              <label htmlFor="formEndereco">Endereço</label>
              <input type="text" id="formEndereco" name="formEndereco" />
            </InputGroup>
          </ContextGroup>
          <button type="submit">Enviar</button>
        </InputContainer>
      </Form>
    </Container>
  );
}
