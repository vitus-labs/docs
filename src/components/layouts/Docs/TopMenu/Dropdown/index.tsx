import { element, List } from '~/components/core'
import Dropdown from '~/components/base/Dropdown'
import IconLogo from '~/components/base/IconLogo'
import Icon from '~/components/base/Icon'
import DropdownMenu from '~/components/base/menu/DropdownMenu'
import data from './data'

const Trigger = element
  .attrs<{ icon?: string }>(({ icon = 'elements' }) => ({
    label: 'Elements',
    gap: 8,
    beforeContent: icon && <IconLogo small name={icon} />,
    afterContent: <Icon xSmall name="arrow" />,
  }))
  .theme((t) => ({
    width: 180,
    fontWeight: t.fontWeight.bold,
    color: t.color.light.base,
    cursor: 'pointer',
    userSelect: 'none',
  }))

const component = () => (
  <Dropdown trigger={Trigger}>
    <List rootElement={false} data={data} component={DropdownMenu} />
  </Dropdown>
)

export default component
