import React from 'react'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import { Provider } from '~/theme'

import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import Badge from '~/components/base/Badge'
import Editor from '~/components/base/editor'
import { Table, Row, Col } from '~/components/base/Table'

const markdownComponents = {
  h1: ({ children }: any) => <Heading tag="h1" level2 label={children} />,
  h2: ({ children }: any) => <Heading tag="h2" level3 label={children} />,
  h3: ({ children }: any) => <Heading tag="h3" level4 label={children} />,
  p: ({ children }: any) => <Text paragraph label={children} />,
  em: ({ children }: any) => <Text caption label={children} />,
  strong: ({ children }: any) => <Badge label={children} />,
  table: ({ children, ...props }: any) => {
    console.log(children)
    console.log(props)
    return <Table>{children}</Table>
  },
  tr: Row,
  td: ({ children, ...props }: any) => {
    console.log(children)
    console.log(props)
    return <Col>{children}</Col>
  },
  code: Editor,
}

const component = ({ Component, pageProps }) => (
  <MDXProvider components={markdownComponents}>
    <Provider>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </Provider>
  </MDXProvider>
)

export default component
