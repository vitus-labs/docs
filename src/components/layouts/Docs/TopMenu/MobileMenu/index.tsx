import { FC } from 'react'
import { element } from '~/components/core'
import { List } from '~/components/base'
import { MobileMenu } from '~/components/layout'
import SideMenuLinks from '../../SideMenuLinks'
import Dropdown from '../Dropdown'

const DropdownWrapper = element.theme((t) => ({
  paddingX: t.spacing.large,
}))

const Component: FC = () => (
  <MobileMenu>
    <List gap="xxl">
      <DropdownWrapper>
        <Dropdown />
      </DropdownWrapper>
      <SideMenuLinks />
    </List>
  </MobileMenu>
)

export default Component
