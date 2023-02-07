import '~/config/init'
import Head from 'next/head'
import { Provider } from '~/theme'
import type { AppProps } from 'next/app'
import Meta from '~/components/meta/Meta'
import Favicons from '~/components/meta/Favicons'

const component = ({ Component, pageProps }: AppProps) => (
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

export default component
