import { FC } from 'react'
import Base from '~/components/base/Base'
import { Container } from '~/components/base/grid'
import { SideMenu, Content } from '~/components/base/layout'
import Markdown from '~/components/base/Markdown'
import Layout from '../Base'
import TopMenu from '../TopMenu'
import Menu from './SideMenu'

type Props = {
  menu: Array<Record<string, unknown>>
}

const component: FC<Props> = ({ children, menu }) => {
  const transformedData = menu.map((item) => ({
    label: item.title,
    href: item.slug,
    data: item.submenu.map((item) => ({
      label: item.title,
      href: item.anchor,
    })),
  }))

  return (
    <Layout>
      <TopMenu />
      <Container>
        <Base
          contentDirection="inline"
          beforeContentAlignY="top"
          beforeContent={
            menu && <SideMenu content={<Menu data={transformedData} />} />
          }
        >
          <Content light>
            <Markdown>{children}</Markdown>
          </Content>
        </Base>
      </Container>
    </Layout>
  )
}

component.displayName = 'layouts/Docs'

export default component
