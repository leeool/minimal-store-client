import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
  }

  a {
    color: inherit;
  }

`

export default GlobalStyle
