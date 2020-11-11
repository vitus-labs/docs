import React from 'react'
import Box from '~/components/base/Box'
import Link from '~/components/base/Link'
import heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import Icon from '~/components/base/Icon'

const Heading = heading.theme({ marginTop: 16 })

const component = ({ variant = 'primary', heading, label, icon, link }) => (
  <Link transparent href={link}>
    <Box>
      <Icon xLarge name={icon} circle={variant === 'secondary'} />
      <Heading level5 label={heading} />
      <Text>{label}</Text>
    </Box>
  </Link>
)

export default component
