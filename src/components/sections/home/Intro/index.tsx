import React from 'react'
import section from '~/components/base/Section'
import heading from '~/components/base/Heading'
import Text from '~/components/base/Text'

const Section = section.theme({
  minHeight: 740,
})

const Heading = heading.theme((t) => ({
  marginBottom: t.spacing.xxLarge * 4,
}))

const component = () => (
  <Section centered gapLg>
    <Heading jumbo centered>
      A{' '}
      <Text primary inline>
        developer
      </Text>{' '}
      experience
      <br /> you will{' '}
      <Text primary inline>
        love
      </Text>
    </Heading>
    <Text xLarge centered>
      Group of libraries to build your UI design systems with less headaches
      <br /> and enjoying all that stuff
    </Text>
  </Section>
)

export default component
