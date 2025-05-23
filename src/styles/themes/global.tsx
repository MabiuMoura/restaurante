import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body, html, #root {
      height: 100%;
      width: 100%;
      position: fixed;
      touch-action: none;
    }

`;