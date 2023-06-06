import React, { FC, ReactNode } from 'react'
import { Container } from '~/components/grid'
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
    <Container>
      <Heading level3 centered label={heading} />
      <Text centered label={label} />
    </Container>
    {children}
  </Section>
)

export default Component
