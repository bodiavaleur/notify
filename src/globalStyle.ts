import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --border: rgba(230,230,230);
    --primary: rgba(255,204,0);
    --shadow: #d0d0d0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 16px;
  }

  html,body, #root {
    height: 100%;
    width: 100%;
  }
`;
