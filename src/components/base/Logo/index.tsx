import { VFC } from 'react'
import { element } from '~/components/core'
import Link from '~/components/base/Link'

const Logo = element.attrs({
  contentAlignX: 'left',
  contentAlignY: 'center',
  dangerouslySetInnerHTML: {
    __html: require(`~/assets/logo/vitus-labs.svg?include`),
  },
})

const component: VFC = () => (
  <Link href="/">
    <Logo />
  </Link>
)

component.displayName = 'base/Logo'

export default component
