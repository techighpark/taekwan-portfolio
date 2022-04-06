import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const darkMode = {
  bgColor: "black",
  fontColor: "white",
  accentColor: "rgba(254, 23, 162, 1)",
  lightAccentColor: "rgba(254, 23, 162, 0.3)",
  whiteColor: "rgba(255, 255, 255, 0.8)",
  lightWhiteColor: "rgba(255, 255, 255, 0.5)",
  superLightWhiteColor: "rgba(255, 255, 255, 0.3)",
};
export const lightMode = {
  bgColor: "white",
  fontColor: "red",
};

export const fonts = {
  Lato: `'Lato', sans-serif`,
  Staliches: `'Staatliches', cursive`,
  Montserrat: `'Montserrat', sans-serif`,
  Gothic: `'Gothic A1', sans-serif`,
  NotoSans: `'Noto Sans KR', sans-serif`,
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
    /* max-width: 1500px; */
    font-size:12px;
    font-weight:200;
    /* border:3px solid yellow; */
    
}
::-webkit-scrollbar { 
    display: none; 
}

`;
