import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-size: 1rem;
    box-sizing: border-box;
    border: none;
    outline: none;
  }
  body{
    background-color: #2F2E41;
  }
  main{
    max-width: 1080px;
    margin: auto;
  }
  button{
    background-color: transparent;
    cursor: pointer;
  }
`;
