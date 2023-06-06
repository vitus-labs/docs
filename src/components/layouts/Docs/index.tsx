import { FC, ReactNode } from 'react'
import { useIsSmallViewport } from '~/hooks/useViewport'
import { SidePanelLayout } from '~/components/layout'
import TopMenu from './TopMenu'
import SideMenuLinks from './SideMenuLinks'

type Props = {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => {
  const isSmallViewPort = useIsSmallViewport()

  return (
    <>
      <TopMenu />
      <SidePanelLayout sidePanel={isSmallViewPort ? null : <SideMenuLinks />}>
        {children}
      </SidePanelLayout>
    </>
  )
}

Component.displayName = 'layouts/Docs'

export default Component
