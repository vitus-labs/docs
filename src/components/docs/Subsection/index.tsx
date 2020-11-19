import React, { FC } from 'react'
import section from '~/components/base/Section'
import heading from '~/components/base/Heading'

const Section = section.theme({
  marginTop: 16,
})

const Heading = heading.theme({
  marginBottom: 16,
})

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
