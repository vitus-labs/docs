import Layout from '~/components/layouts/Base'
import Intro from '~/components/sections/home/Intro'
import UiSystems from '~/components/sections/home/UiSystems'
import Tooling from '~/components/sections/home/Tooling'
import Background from '~/components/base/Background'

const component = () => (
  <Layout>
    <Intro />
    <Background id="ui-systems" primary>
      <UiSystems />
    </Background>
    <Background id="tooling" secondary>
      <Tooling />
    </Background>
  </Layout>
)

export default component
