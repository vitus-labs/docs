import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '~/core/theme'
import { Root } from '~/components/base/layout'
import GlobalStyles from '~/core/GlobalStyles'

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Root>
      <Component {...pageProps} />
    </Root>
  </ThemeProvider>
)
