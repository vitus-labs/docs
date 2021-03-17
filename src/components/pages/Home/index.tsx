import React from 'react'
import Layout from '~/components/layouts/Base'
import TopMenu from '~/components/layouts/TopMenu'
import Intro from '~/components/sections/home/Intro'
import UiSystems from '~/components/sections/home/UiSystems'
import Tooling from '~/components/sections/home/Tooling'
import Background from '~/components/base/Background'

const component = () => (
  <Layout>
    <TopMenu />
    <Background primary>
      <Intro />
      <UiSystems />
    </Background>
    <Background secondary>
      <Tooling />
    </Background>
  </Layout>
)

export default component
