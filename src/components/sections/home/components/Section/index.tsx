import React from 'react'
import section from '~/components/base/Section'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'

const Section = section
  .attrs({
    contentAlignX: 'center',
  })
  .theme((t) => ({
    paddingY: 80,
  }))

export default ({ heading, label, children }) => (
  <Section>
    <Heading level3 label={heading} />
    <Text label={label} />
    {children}
  </Section>
)
