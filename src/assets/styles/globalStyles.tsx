import './fonts.css';

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    font-family: 'Open Sans', sans-serif;
  }
`;
