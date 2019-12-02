import React from "react";
import { Container, Content, Title, Nav, NavLink } from "./styles";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import Cadastro from "./cadastro";
import Imoveis from "./imoveis";
import Admin from "./admin";

export default function Management() {
  let { path, url } = useRouteMatch();

  return (
    <Container>
      <Content>
        <Nav>
          <NavLink to={`${url}/cadastro`}>Cadastro</NavLink>
          <NavLink to={`${url}/imoveis`}>Imóveis</NavLink>
          <NavLink to={`${url}/admin`}>Admin</NavLink>
        </Nav>
        <Switch>
          <Route path={`${path}/cadastro`}>
            <Cadastro />
          </Route>
          <Route path={`${path}/imoveis`}>
            <Imoveis />
          </Route>
          <Route path={`${path}/admin`}>
            <Admin />
          </Route>
          <Route path={`${path}/`}>Default</Route>
        </Switch>
      </Content>
    </Container>
  );
}
