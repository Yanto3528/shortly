import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.darkgrey};
  }
  h1, h2,h3,h4,h5,h6 {
    font-family: "Poppins", sans-serif;
  }
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
