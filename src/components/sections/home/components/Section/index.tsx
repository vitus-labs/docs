import React, { FC, ReactNode } from 'react'
import Section from '~/components/base/Section'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'

type Props = {
  children: ReactNode
  heading: string
  label: string
}

const Component: FC<Props> = ({ heading, label, children }) => (
  <Section centered gapLg>
    <Heading level3 label={heading} />
    <Text label={label} />
    {children}
  </Section>
)

export default Component
