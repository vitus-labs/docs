import { Container, Row, Col } from '~/components/grid'
import { Background } from '~/components/base'
import Section from '../components/Section'
import BoxList from '../components/BoxList'

const data = [
  {
    title: 'Elements',
    label: 'Extensible and reusable primitives',
    icon: 'elements',
    link: (r: any) => r.uiSystem.elements.base,
  },
  {
    title: 'Rocketstyle',
    label: 'Fast and furious UI styling system',
    icon: 'rocketstyle',
    link: (r: any) => r.uiSystem.rocketstyle.base,
  },
  {
    title: 'Unistyle',
    label: 'Use styling best practices right away',
    icon: 'unistyle',
    link: (r: any) => r.uiSystem.unistyle.base,
  },
  {
    title: 'Coolgrid',
    label: 'Flexible grid system',
    icon: 'coolgrid',
    link: (r: any) => r.uiSystem.coolgrid.base,
  },
  {
    title: 'Hooks',
    label: 'React hooks',
    icon: 'coolgrid',
    link: (r: any) => r.uiSystem.hooks.base,
  },
]

const component = () => (
  <Background id="ui-systems" primary>
    <Section
      heading="Build better universal UI Systems"
      label="Set of preconfigured tools ready to be used"
    >
      <Container
        gap={36}
        size={{ xs: 12, md: 6, lg: 4 }}
        contentAlignX="center"
      >
        <Row>
          <BoxList
            data={data}
            wrapComponent={Col}
            itemProps={{ state: 'light' }}
          />
        </Row>
      </Container>
    </Section>
  </Background>
)

export default component
