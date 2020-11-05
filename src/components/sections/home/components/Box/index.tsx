import React from 'react'
import Box from '~/components/base/Box'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'
import Icon from '~/components/base/Icon'

export default ({ heading, label, icon }) => (
  <Box>
    <Icon name={icon} />
    <Heading level5 label={heading} />
    <Text>{label}</Text>
  </Box>
)
