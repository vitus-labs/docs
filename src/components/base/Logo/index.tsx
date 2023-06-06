/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { FC } from 'react'
import { element } from '~/components/core'
import Link from '~/components/base/Link'
import LogoSVG from '~/assets/logo/logo.svg?include'

const Logo = element
  .config({
    name: 'base/Logo',
  })
  .attrs({
    tag: 'span',
    contentAlignX: 'left',
    contentAlignY: 'center',
    dangerouslySetInnerHTML: {
      __html: LogoSVG,
    },
  })
  .theme({
    width: { xs: 128, sm: '80%', md: '100%' },
    overflow: 'hidden',
  })
  .styles(
    (css) => css`
      & > svg {
        width: 100%;
      }
    `
  )

const Component: FC = () => (
  <Link transparent href="/">
    <Logo />
  </Link>
)

Component.displayName = 'base/Logo'

export default Component
