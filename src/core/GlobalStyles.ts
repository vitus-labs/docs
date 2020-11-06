import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  body {
    font-size: 16px;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${({ theme: t }) => css`
      background-color: ${t.layoutColor.bg};
    `}
  }
`
