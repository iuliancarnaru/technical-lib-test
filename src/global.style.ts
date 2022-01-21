import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit; 
  }

  html {
    box-sizing: border-box;
    // sets a base font of 10px (useful when using rem)
    font-size: 62.5%; 
  }

  body {
    color: #333;
  }
`;
