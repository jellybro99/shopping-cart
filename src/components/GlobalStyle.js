import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Comic Sans MS";
    src: url("public\COMIC.TTF");
  }
  *, *::before, *::after {
  box-sizing: border-box;
  }
  * {
    margin: 0;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  html, body {
    height:100%;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
`;
export default GlobalStyle;
