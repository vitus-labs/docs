import { FC } from 'react'
import { Root } from '~/components/base/layout'
import TopMenu from './TopMenu'

const component: FC = ({ children }) => (
  <Root>
    <TopMenu />
    {children}
  </Root>
)

component.displayName = 'layouts/Base'

export default component
