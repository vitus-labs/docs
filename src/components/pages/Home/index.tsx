import Layout from '~/components/layouts/Base'
import Intro from '~/components/sections/home/Intro'
import UiSystems from '~/components/sections/home/UiSystems'
import Tooling from '~/components/sections/home/Tooling'
import Background from '~/components/base/Background'

const component = () => (
  <Layout>
    <Intro />
    <Background primary>
      <UiSystems />
    </Background>
    <Background secondary>
      <Tooling />
    </Background>
  </Layout>
)

export default component
