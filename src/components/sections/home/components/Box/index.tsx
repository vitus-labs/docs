import React, { VFC } from 'react'
import box from '~/components/base/Box'
import link from '~/components/base/Link'
import heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import IconLogo from '~/components/base/IconLogo'

const Link = link.config({ provider: true })

const Box = box.config({
  consumer: (ctx) =>
    ctx(({ pseudo }) => ({
      pseudo,
    })),
})
const Heading = heading.theme({ marginTop: 16 })

type Props = {
  variant?: 'primary' | 'secondary'
  title: string
  label: string
  icon: string
  link: string
}

const component: VFC<Props> = ({
  variant = 'primary',
  title,
  label,
  icon,
  link,
  ...props
}) => (
  <Link transparent href={link}>
    <Box {...props}>
      <IconLogo xLarge name={icon} circle={variant === 'secondary'} />
      <Heading level5 label={title} />
      <Text>{label}</Text>
    </Box>
  </Link>
)

export default component
