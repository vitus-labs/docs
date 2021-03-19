import { element } from '~/components/core'
import Dropdown from '~/components/base/Dropdown'
import IconLogo from '~/components/base/IconLogo'
import DropdownMenu from '~/components/base/menu/DropdownMenu'
import data from './data'

const Trigger = element
  .attrs<{ icon?: string }>(({ icon = 'elements' }) => ({
    label: 'Elements',
    gap: 8,
    beforeContent: icon && <IconLogo small name={icon} />,
  }))
  .theme((t) => ({
    width: 180,
    fontWeight: t.fontWeight.bold,
    color: t.color.light.base,
    cursor: 'pointer',
  }))

const component = () => (
  <Dropdown trigger={Trigger}>
    {data.map((item) => (
      <DropdownMenu title={item.title} data={item.data} />
    ))}
  </Dropdown>
)

export default component
