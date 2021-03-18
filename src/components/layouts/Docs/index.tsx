import { FC } from 'react'
import SideMenu from '~/components/base/menu/SideMenu'
import Markdown from '~/components/base/Markdown'
import TopMenu from './TopMenu'
import LeftSidePanel from '../LeftSidePanel'

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
    <>
      <TopMenu />
      <LeftSidePanel sidePanel={<SideMenu data={transformedData} />}>
        <Markdown>{children}</Markdown>
      </LeftSidePanel>
    </>
  )
}

component.displayName = 'layouts/Docs'

export default component
