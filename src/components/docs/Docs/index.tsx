import React, { FC } from 'react'
import Heading from '~/components/base/Heading'
import { DocsLinksProvider } from '~/components/docs/context/DocsLinks'
import Layout from './Layout'
import SideMenu from './SideMenu'

type Props = {
  title: string
}

const component: FC<Props> = ({ children, title }) => (
  <DocsLinksProvider>
    <Layout sidePanel={SideMenu}>
      <Heading level1 label={title} />
      {children}
    </Layout>
  </DocsLinksProvider>
)

export default component
