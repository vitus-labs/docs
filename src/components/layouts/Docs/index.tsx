import { FC } from 'react'
import SideMenu from '~/components/base/menu/SideMenu'
import TopMenu from './TopMenu'
import LeftSidePanel from '../LeftSidePanel'

type Props = {
  menu: Array<{
    title: string
    slug: string
    submenu: Array<{
      title: string
      anchor: string
    }>
  }>
}

const component: FC<Props> = ({ children, menu }) => {
  if (!children || !menu) return null

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
        {children}
      </LeftSidePanel>
    </>
  )
}

component.displayName = 'layouts/Docs'

export default component
