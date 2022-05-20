import { FC, ReactNode } from 'react'
import { Root } from '~/components/layout'
import TopMenu from './TopMenu'

type Props = {
  children: ReactNode
}

const component: FC<Props> = ({ children }) => (
  <Root>
    <TopMenu />
    {children}
  </Root>
)

component.displayName = 'layouts/Base'

export default component
