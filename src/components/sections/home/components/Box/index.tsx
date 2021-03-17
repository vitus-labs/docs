import React from 'react'
import Box from '~/components/base/Box'
import Link from '~/components/base/Link'
import heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import IconLogo from '~/components/base/IconLogo'

const Heading = heading.theme({ marginTop: 16 })

const component = ({ variant = 'primary', title, label, icon, link }) => (
  <Link transparent href={link}>
    <Box>
      <IconLogo xLarge name={icon} circle={variant === 'secondary'} />
      <Heading level5 label={title} />
      <Text>{label}</Text>
    </Box>
  </Link>
)

export default component
