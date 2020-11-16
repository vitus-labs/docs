import React, { FC } from 'react'
import { DocsLinksProvider } from '~/components/docs/context/DocsLinks'
import Layout from '~/components/layouts/Docs'
import SideMenu from '../SideMenu'

const component: FC = ({ children }) => (
  <DocsLinksProvider>
    <Layout sidePanel={SideMenu}>{children}</Layout>
  </DocsLinksProvider>
)

export default component
