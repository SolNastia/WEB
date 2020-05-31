import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: white;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;
