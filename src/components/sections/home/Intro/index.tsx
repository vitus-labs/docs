import React from 'react'
import { useIsLargeViewport } from '~/hooks/useViewport'
import { Container } from '~/components/grid'
import section from '~/components/base/Section'
import heading from '~/components/base/Heading'
import Text from '~/components/base/Text'

const Section = section.theme({
  minHeight: { xs: 600, md: 740 },
})

const Heading = heading.theme((t) => ({
  marginBottom: { xs: t.spacing.xxLarge, md: t.spacing.xxLarge * 4 },
}))

const Component = () => {
  const isLargeViewport = useIsLargeViewport()
  return (
    <Section centered gapLg>
      <Container>
        <Heading jumbo centered>
          A <Text primary>developer</Text> experience
          <br /> you will <Text primary>love</Text>
        </Heading>
        <Text paragraph xLarge centered>
          Group of libraries to build your UI design systems with less headaches
          {isLargeViewport && <br />} and enjoying all that stuff
        </Text>
      </Container>
    </Section>
  )
}

export default Component
