import { createGlobalStyle } from "styled-components";
import Gellix from "./assets/fonts/Gellix-Regular.woff";

export const GlobalStyles = createGlobalStyle`
    body{padding:0;
        margin:0;
        box-sizing: border-box;
        width:100%;
        height:100%;
        
    }
    @font-face {
        font-family:Gellix; 
        src:url(${Gellix});
        }
`;
