import React from 'react'
import Layout from '~/components/layouts/Docs'
import SideMenu from '../SideMenu'

const component = ({ children }) => (
  <Layout sidePanel={SideMenu}>{children}</Layout>
)

export default component
