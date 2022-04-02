import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const darkMode = {
  bgColor: "black",
  fontColor: "white",
};
export const lightMode = {
  bgColor: "white",
  fontColor: "red",
};

export const fonts = {
  Lato: `'Lato', sans-serif`,
  Staliches: `'Staatliches', cursive`,
  Montserrat: `'Montserrat', sans-serif`,
};

export const GlobalStyles = createGlobalStyle`
a{
    text-decoration:none ;
    color:${props => props.theme.fontColor}
}
*{
    box-sizing:border-box ;
}
${reset}
body{
    background-color:${props => props.theme.bgColor};
    color:${props => props.theme.fontColor};
    font-family : ${fonts.Montserrat};
    font-size:12px;
    font-weight:300;
    position:relative;
}
::-webkit-scrollbar { 
    display: none; 
}

`;
