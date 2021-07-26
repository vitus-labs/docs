import Layout from '~/components/layouts/Base'
import Intro from '~/components/sections/home/Intro'
import UiSystems from '~/components/sections/home/UiSystems'
import Tooling from '~/components/sections/home/Tooling'

const component = () => (
  <Layout>
    <Intro />
    <UiSystems />
    <Tooling />
  </Layout>
)

export default component
