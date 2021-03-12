import { FC, ReactNode } from 'react'
import Base from '../Base'
import LeftPanelLayout from '../LeftPanelLayout'
import TopMenu from '../TopMenu'

type Props = {
  sidePanel: ReactNode
}

const component: FC<Props> = ({ sidePanel, children }) => (
  <Base>
    <TopMenu />
    <LeftPanelLayout sidePanel={sidePanel}>{children}</LeftPanelLayout>
  </Base>
)

component.displayName = 'layouts/Docs'

export default component
