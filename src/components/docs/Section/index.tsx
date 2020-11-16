import React from 'react'
import Section from '~/components/base/Section'
import Heading from '~/components/base/Heading'
import registerLinks from './registerLinks'

const component = ({ children, name, title, ...props }) => (
  <Section name={name} {...props}>
    <Heading level2>{title}</Heading>
    {children}
  </Section>
)

export default registerLinks(component)
