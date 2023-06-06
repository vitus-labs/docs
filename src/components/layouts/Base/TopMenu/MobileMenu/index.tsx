import { FC } from 'react'
import { MobileMenu } from '~/components/layout'
import Menu from '../Menu'

const Component: FC = () => (
  <MobileMenu>
    <Menu block contentDirection="rows" gap="xxl" />
  </MobileMenu>
)

export default Component
