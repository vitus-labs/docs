import { FC } from 'react'
import Base from '~/components/base/Base'
import { SideMenu, Content } from '~/components/base/layout'
import Markdown, { formatters } from '~/components/base/Markdown'
import heading from '~/components/base/Heading'
import Layout from '../Base'
import TopMenu from '../TopMenu'
import Menu from './SideMenu'
import { Provider, registerLinks } from './context'

const Heading = heading.compose({ registerLinks })

const markdownFormatters = {
  ...formatters,
  h2: ({ children }: any) => (
    <Heading tag="h2" level2>
      {children}
    </Heading>
  ),
}

const menuData = [
  {
    label: 'Basics',
    href: (r) => r.uiSystem.elements.base,
  },
  {
    label: 'Element',
    href: (r) => r.uiSystem.elements.element,
  },
  {
    label: 'List',
    href: (r) => r.uiSystem.elements.list,
  },
  {
    label: 'Text',
    href: (r) => r.uiSystem.elements.text,
  },
  {
    label: 'Overlay',
    href: (r) => r.uiSystem.elements.overlay,
  },
  {
    label: 'Portal',
    href: (r) => r.uiSystem.elements.portal,
  },
]

type Props = {
  menu: Array<Record<string, unknown>>
}

const component: FC<Props> = ({ children, menu = menuData }) => {
  return (
    <Layout>
      <TopMenu />
      <Provider>
        <Base
          contentDirection="inline"
          beforeContentAlignY="top"
          beforeContent={<SideMenu content={<Menu data={menu} />} />}
        >
          <Markdown formatters={markdownFormatters}>
            <Content light>{children}</Content>
          </Markdown>
        </Base>
      </Provider>
    </Layout>
  )
}

component.displayName = 'layouts/Docs'

export default component
