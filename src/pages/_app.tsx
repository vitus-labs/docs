import React from 'react'
import Head from 'next/head'
import { Root } from '~/components/base/layout'
import { Provider } from '~/theme'

const component = ({ Component, pageProps }) => (
  <Provider>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&family=Varela+Round&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Root>
      <Component {...pageProps} />
    </Root>
  </Provider>
)

export default component
