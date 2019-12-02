import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Imoveis from "./pages/Imoveis";
import Management from "./pages/Management";

export default function Routes() {
  return (
    <Switch>
      <Route path="/management">
        <Management />
      </Route>
      <Route path="/imoveis">
        <Imoveis />
      </Route>
      <Route path="/sobre">
        <Sobre />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
