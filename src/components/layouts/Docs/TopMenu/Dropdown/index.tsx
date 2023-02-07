import { FC } from 'react'
import { useRouter } from 'next/router'
import { element, List } from '~/components/core'
import { Icon, IconLogo, Dropdown } from '~/components/base'
import DropdownMenu from '~/components/layout/TopMenuDropdown'
import data from './data'

const Trigger = element
  .attrs<{ icon?: string }>(({ icon }) => ({
    gap: 16,
    beforeContent: icon && <IconLogo small name={icon} label={icon} />,
    afterContent: <Icon xSmall name="arrow" />,
  }))
  .theme((t) => ({
    width: 200,
    fontWeight: t.fontWeight.bold,
    color: t.color.light.base,
    cursor: 'pointer',
    userSelect: 'none',
  }))

const DefaultTrigger: FC<any> = ({ label, icon, ...props }) => (
  <Trigger {...props} label={label} icon={icon} />
)

const Component = () => {
  const { asPath } = useRouter()

  const activeItem = data
    .reduce((acc, item) => acc.concat(item.data), [] as any[])
    .find((item) => asPath.includes(item.href))

  return (
    <Dropdown
      trigger={
        <DefaultTrigger label={activeItem.label} icon={activeItem.icon} />
      }
    >
      <List rootElement={false} data={data as any} component={DropdownMenu} />
    </Dropdown>
  )
}

export default Component
