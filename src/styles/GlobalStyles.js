import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fontFamily}, sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${(props) => props.theme.primaryHover};
    }
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  input, button, textarea {
    font-family: inherit;
  }

  ::selection {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;

export default GlobalStyles;
