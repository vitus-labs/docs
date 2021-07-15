import { VFC } from 'react'
import element from '~/components/core/element'
import loadIcon from './loadIcon'

const LogoWrapper = element
  .sizes({
    smaller: {
      size: '80%',
    },
    xSmall: {
      size: 16,
    },
    small: {
      size: 24,
    },
    large: {
      size: 64,
    },
    xLarge: {
      size: 108,
    },
  })
  .variants((t) => ({
    circle: {
      backgroundColor: t.color.light.base,
      borderRadius: t.borderRadius.extra,
      padding: 16,
    },
  }))

const Logo = element
  .config({ name: 'base/IconLogo' })
  .compose({ loadIcon })
  .attrs<{ name: string; role?: string }>({
    tag: 'img',
  })
  .theme({ width: '100%', height: 'auto' })

type Props = {
  label?: string
  name: string
  xSmall?: boolean
  small?: boolean
  xLarge?: boolean
  circle?: boolean
}

const component: VFC<Props> = ({ label, name, ...props }) => (
  <LogoWrapper {...props}>
    <Logo label={label} name={name} />
  </LogoWrapper>
)

export default component
