import { createGlobalStyle, DefaultTheme } from 'styled-components';
// @ts-ignore
import { styleReset } from 'react95';
// @ts-ignore
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
// @ts-ignore
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme; }>`
${styleReset}

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background: ${({ theme }) => theme.colors.body};
    transition: all 0.25s linear;
  }

`;

export default GlobalStyles;