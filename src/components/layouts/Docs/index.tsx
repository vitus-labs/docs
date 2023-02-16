import { FC, ReactNode } from 'react'
import { SidePanelLayout } from '~/components/layout'
import SideMenuLinks from '~/components/layout/SideMenuLinks'
import TopMenu from './TopMenu'

type Props = {
  children: ReactNode
  menu: Array<{
    title: string
    slug: string
    submenu: Array<{
      title: string
      anchor: string
    }>
  }>
}

const Component: FC<Props> = ({ children, menu = [] }) => {
  const transformedData = menu.map((item) => ({
    label: item.title,
    href: item.slug,
    data: item.submenu?.map((item) => ({
      label: item?.title,
      href: item?.anchor,
    })),
  }))

  return (
    <>
      <TopMenu />
      <SidePanelLayout sidePanel={<SideMenuLinks data={transformedData} />}>
        {children}
      </SidePanelLayout>
    </>
  )
}

Component.displayName = 'layouts/Docs'

export default Component
