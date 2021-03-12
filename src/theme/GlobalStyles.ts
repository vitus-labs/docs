import { createGlobalStyle, css } from 'styled-components'
import type { Theme } from './theme'

export default createGlobalStyle<{ theme: Theme }>`
  body {
    ${({ theme: t }) => css`
      font-size: ${t.rootSize}px;
      margin: ${t.spacing.reset};
      padding: ${t.spacing.reset};
      background: ${t.layout.root.background};

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    `};
  }
`
