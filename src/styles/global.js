import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  body {
    background: #ececec;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
  }
`;
