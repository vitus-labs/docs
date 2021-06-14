import Head from 'next/head'
import styled, { css, ThemeProvider as context } from 'styled-components'
import { init } from '@vitus-labs/core'
import { Provider } from '~/theme'
import type { AppProps } from 'next/app'
import Seo from '~/components/meta/Seo'
import Meta from '~/components/meta/Meta'
import Favicons from '~/components/meta/Favicons'

init({ styled, css, context })

const component = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <Seo />
      <Meta />
      <Favicons />
    </Head>
    <Provider>
      <Component {...pageProps} />
    </Provider>
  </>
)

export default component
