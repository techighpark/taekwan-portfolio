import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const darkMode = {
  bgColor: "#0e0f11",
  fontColor: "#EEEEEE",
  accentColor: "#FE16A2",
  lightAccentColor: "rgba(254, 23, 162, 0.3)",
  firAccentColor: "#84d632",
  secAccentColor: "#7852FF",
  thiAccentColor: "#fa8a28",
  fouAccentColor: "#c90076",
  whiteColor: "#EEEEEE",
  lightWhiteColor: "#999999",
  superLightWhiteColor: "#333333",
  darkLine: "#1D1D1D",
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
