/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { FC } from 'react'
import { element } from '~/components/core'
import Link from '~/components/base/Link'

const Logo = element
  .config({
    name: 'base/Logo',
  })
  .attrs({
    tag: 'span',
    contentAlignX: 'left',
    contentAlignY: 'center',
    dangerouslySetInnerHTML: {
      __html: require(`~/assets/logo/logo.svg?include`).default,
    },
  })

const Component: FC = () => (
  <Link href="/">
    <Logo />
  </Link>
)

Component.displayName = 'base/Logo'

export default Component
