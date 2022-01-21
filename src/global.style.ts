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
    font-family: 'Lato', sans-serif;
  }

  #modal-root {
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s linear;
  }

  #modal-root:empty {
    display: none;
  }
`;
