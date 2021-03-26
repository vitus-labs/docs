import { useRouter } from 'next/router'
import { element, List } from '~/components/core'
import Dropdown from '~/components/base/Dropdown'
import IconLogo from '~/components/base/IconLogo'
import Icon from '~/components/base/Icon'
import DropdownMenu from '~/components/base/menu/DropdownMenu'
import data from './data'

const Trigger = element
  .attrs<{ icon?: string }>(({ icon }) => ({
    gap: 16,
    beforeContent: icon && <IconLogo small name={icon} />,
    afterContent: <Icon xSmall name="arrow" />,
  }))
  .theme((t) => ({
    width: 200,
    fontWeight: t.fontWeight.bold,
    color: t.color.light.base,
    cursor: 'pointer',
    userSelect: 'none',
  }))

const component = () => {
  const { asPath } = useRouter()

  const activeItem = data
    .reduce((acc, item) => {
      return acc.concat(item.data)
    }, [])
    .find((item) => asPath.includes(item.href))

  return (
    <Dropdown
      trigger={(props) => (
        <Trigger {...props} label={activeItem.label} icon={activeItem.icon} />
      )}
    >
      <List rootElement={false} data={data} component={DropdownMenu} />
    </Dropdown>
  )
}

export default component
