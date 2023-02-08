import '~/config/init'
import { FC } from 'react'
import Head from 'next/head'
import { Provider } from '~/theme'
import type { AppProps } from 'next/app'
import Meta from '~/components/meta/Meta'
import Favicons from '~/components/meta/Favicons'

const Component: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <Meta />
      <Favicons />
    </Head>
    <Provider>
      <Component {...pageProps} />
    </Provider>
  </>
)

export default Component
