import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
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
    font-family: 'Roboto', sans-serif;
  }

  *::-webkit-scrollbar {
    width: 8px;           
    height: 8px;           
  }

  *::-webkit-scrollbar-track {
    background: transparent; 
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(100, 100, 100, 0.5); 
    border-radius: 8px;      
    border: 2px solid transparent; 
    background-clip: content-box; 
  }

  * {
    scrollbar-width: thin;        
    scrollbar-color: rgba(0, 0, 0, 0.5) transparent; 
  }
`;
