import React from "react";

import Routes from "./routes";
import Navbar from "./components/navbar";

import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <GlobalStyle />
    </div>
  );
}
