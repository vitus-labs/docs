import { FC } from 'react'
import Head from 'next/head'

type Props = { title?: string }

const Component: FC<Props> = ({ title = 'Vitus Labs' }) => (
  <Head>
    <title>{title}</title>
    <meta
      name="description"
      content="A developer experience you will love. Group of libraries to build your UI design systems with less headaches and enjoying all that stuff"
    />
    <meta
      name="keywords"
      content="react, styled-Components, elements, rocketstyle, coolgrid, unistyle, frontend, typescript, development, web, application, performance"
    />
  </Head>
)

Component.displayName = 'components/meta/Seo'

export default Component
