import { createGlobalStyle, css } from 'styled-components'
import type { Theme } from './theme'

export default createGlobalStyle<{ theme: Theme }>`
  html {
    scroll-behavior: smooth;
  }

  body {
    ${({ theme: t }) => css`
      font-size: ${t.rootSize}px;
      margin: ${t.spacing.reset};
      padding: ${t.spacing.reset};

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    `};
  }
`
