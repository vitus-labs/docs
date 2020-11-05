import React from 'react'
import Layout from '~/components/layouts/Base'
import Intro from '~/components/sections/home/Intro'
import UiSystems from '~/components/sections/home/UiSystems'
import Tooling from '~/components/sections/home/Tooling'
import Bg from '~/components/base/Bg'

const component = () => (
  <Layout>
    <Bg primary>
      <Intro />
      <UiSystems />
    </Bg>
    <Bg secondary>
      <Tooling />
    </Bg>
  </Layout>
)

export default component
