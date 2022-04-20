import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --white: #ffffff;
  --gray: #717171;
  --white-200: #f9f9f9;
  --gray-dark: #1a202c;
  --bg-main: #f3f5f7;
  --linear: linear-gradient(88.27deg, #574ae8 0%, #3ea1db 100%);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 77.25%;
  }
}

body {
  -webkit-font-smoothing: antialiased;
}

`;
