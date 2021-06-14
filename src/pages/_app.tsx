import Head from 'next/head'
import styled, { css, ThemeProvider as context } from 'styled-components'
import { init } from '@vitus-labs/core'
import { Provider } from '~/theme'
import type { AppProps } from 'next/app'
import Meta from '~/components/meta/Meta'
import Favicons from '~/components/meta/Favicons'

init({ styled, css, context })

const component = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <Meta />
      <Favicons />
      <title>Vitus Labs</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&family=Varela+Round&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Provider>
      <Component {...pageProps} />
    </Provider>
  </>
)

export default component
