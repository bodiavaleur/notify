import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: rgba(255,204,0);
    --gray: rgba(230,230,230);
    --text-black: #333;
    --text-gray: rgb(142,142,147);
    --shadow: #d0d0d0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: var(--text-black);
  }

  html {
    font-size: 16px;
  }

  html,body, #root {
    height: 100%;
    width: 100%;
  }
`;
