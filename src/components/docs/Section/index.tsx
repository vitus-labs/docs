import React from 'react'
import section from '~/components/base/Section'
import heading from '~/components/base/Heading'
import registerLinks from './registerLinks'

const Section = section.theme((t) => ({
  marginBottom: 64,
}))

const Heading = heading.theme((t) => ({
  marginBottom: 16,
}))

const component = ({ children, name, title, ...props }) => (
  <Section name={name} {...props}>
    <Heading level2>{title}</Heading>
    {children}
  </Section>
)

export default registerLinks(component)
