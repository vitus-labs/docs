import Head from 'next/head'
import { Provider } from '~/theme'
import type { AppProps } from 'next/app'

const component = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
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
