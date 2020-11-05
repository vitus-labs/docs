import React from 'react'
import Layout from '~/components/layouts/Base'
import UiSystems from '~/components/sections/home/UiSystems'
import Bg from '~/components/base/Bg'
import Heading from '~/components/base/Heading'
import Text from '~/components/base/Text'

const component = () => (
  <Layout>
    <Bg primary>
      <Heading level1 label="Libraries for easier development" />
      <Text>
        Group of libraries to build your UI design systems with less headaches and
        enjoying all that stuff
      </Text>
      <UiSystems />
    </Bg>
    <Bg secondary>
      <Heading level1 label="Libraries for easier development" />
      <Text>
        Group of libraries to build your UI design systems with less headaches and
        enjoying all that stuff
      </Text>
      <UiSystems />
    </Bg>
  </Layout>
)

export default component
