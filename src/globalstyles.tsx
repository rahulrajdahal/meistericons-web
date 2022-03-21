import { createGlobalStyle } from "styled-components";
import Gellix from "./assets/fonts/Gellix-Regular.woff";

export const GlobalStyles = createGlobalStyle`
    html,body,*{padding:0;
        margin:0;
        box-sizing: border-box;
    }
    @font-face {
        font-family:Gellix; 
        src:url(${Gellix});
        }
`;
