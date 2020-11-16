import React, { FC } from 'react'
import Section from '~/components/base/Section'
import Heading from '~/components/base/Heading'

type Props = {
  title: string
}

const component: FC<Props> = ({ children, title, ...props }) => {
  return (
    <Section {...props}>
      <Heading level3>{title}</Heading>
      {children}
    </Section>
  )
}

export default component
