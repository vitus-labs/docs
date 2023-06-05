import { FC, ReactNode } from 'react'
import { Root } from '~/components/layout'
import TopMenu from './TopMenu'

type Props = {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => (
  <Root>
    <TopMenu />
    {children}
  </Root>
)

Component.displayName = 'layouts/Base'

export default Component
