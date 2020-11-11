import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from '~/core/theme'
import { Root } from '~/components/base/layout'
import GlobalStyles from '~/core/GlobalStyles'

const component = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles theme={theme} />

    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&family=Varela+Round&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Root>
      <Component {...pageProps} />
    </Root>
  </ThemeProvider>
)

export default component
