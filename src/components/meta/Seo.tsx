import { VFC } from 'react'
import Head from 'next/head'

type Props = { title?: string }

const component: VFC<Props> = ({ title = 'Vitus Labs' }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
  </Head>
)

component.displayName = 'components/meta/Seo'

export default component
