import { FC } from 'react'
import isCurrentRoute from '~/hooks/isCurrentRoute'
import link from '~/components/base/Link'
import SubMenu from './SubMenu'

const Link = link
  .attrs({
    block: true,
  })
  .theme((t) => ({
    height: 64,
    paddingX: t.spacing.large,
    backgroundColor: 'transparent',
    color: t.color.light.base,
    fontWeight: 600,
    fontSize: 18,

    hover: {
      backgroundColor: t.color.primary.base,
      textDecoration: 'none',
    },

    active: {
      backgroundColor: t.color.primary.base,
    },
  }))

interface Props {
  data?: any
  href: string
}

const component: FC<Props> = ({ data, ...props }) => {
  const isActive = isCurrentRoute(props.href)

  return (
    <>
      <Link {...props} />
      {isActive && data && <SubMenu data={data} />}
    </>
  )
}

export default component
