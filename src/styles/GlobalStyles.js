import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.background || "#f9f9f9"};
    color: ${({ theme }) => theme.text};
  }
`;

export default GlobalStyle;
