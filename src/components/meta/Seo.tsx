import { FC } from 'react'
import Head from 'next/head'

type Props = { title?: string }

const component: FC<Props> = ({ title = 'Vitus Labs' }) => (
  <Head>
    <title>{title}</title>
    <meta
      name="description"
      content="A developer experience you will love. Group of libraries to build your UI design systems with less headaches and enjoying all that stuff"
    />
    <meta
      name="keywords"
      content="react, styled-components, elements, rocketstyle, coolgrid, unistyle, frontend, typescript, development, web, application, performance"
    />
  </Head>
)

component.displayName = 'components/meta/Seo'

export default component
