import React from "react";

import { Container, Header, Content, Title, Main, Sub } from "./styles.js";
import img from "../../assets/header-img-1.png";

export default function Home() {
  return (
    <Container>
      <Header backgroundImage={img}>
        <Title>
          <Main>JOÃO BARBOSA</Main>
          <Sub>Corretor de Imóveis</Sub>
          <Sub>Lorem ipsum dolor sit amet.</Sub>
        </Title>
      </Header>
      <Content />
    </Container>
  );
}
