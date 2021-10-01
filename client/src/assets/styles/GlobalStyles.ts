import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { fonts, fontSizes, colors } = theme;

const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    font-size: 10px;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${fonts.primary};
    font-size: ${fontSizes.base};
    background-color: ${colors.blue500};
    color: ${colors.white};
    margin:0;
    padding-bottom: 1000px;
    font-weight: 500;
  }

  h1,h2,h3,h4,h5 {
      font-weight:700;
      color:${colors.white};
      margin:0;
  }

  h1{
      font-size: ${fontSizes.xxl};
  }
  h2{
      font-size:  ${fontSizes.xl};
  }
  h3{
      font-size: ${fontSizes.lg};
  }
  h4{
      font-size: ${fontSizes.md}
  }

  h5{
      font-size: ${fontSizes.base}
  }

  button {
    border-radius: 1000px;
    color: ${colors.white};
    cursor: pointer;
	font-weight: 700;
    border:0;
    outline: 0;
    font-family: ${fonts.primary};
  }

  a{
      text-decoration:none;
      color: ${colors.white};
  }


`;

export default GlobalStyle;
