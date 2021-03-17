import { Container, Row, Col } from '~/components/base/grid'
import Section from '../components/Section'
import BoxList from '../components/BoxList'

const data = [
  {
    title: 'Elements',
    label: 'Tool',
    icon: 'elements',
    link: (r) => r.uiSystem.elements.base,
  },
  {
    title: 'Rocketstyle',
    label: 'Tool',
    icon: 'rocketstyle',
    link: (r) => r.uiSystem.rocketstyle.base,
  },
  {
    title: 'Unistyle',
    label: 'Tool',
    icon: 'unistyle',
    link: (r) => r.uiSystem.unistyle.base,
  },
  {
    title: 'Coolgrid',
    label: 'Tool',
    icon: 'coolgrid',
    link: (r) => r.uiSystem.coolgrid.base,
  },
]

const component = () => (
  <Section
    heading="Build better universal UI Systems"
    label="Set of preconfigured tools ready to be used"
  >
    <Container gap={36} size={{ xs: 1, md: 6, lg: 3 }}>
      <Row>
        <BoxList data={data} wrapComponent={Col} />
      </Row>
    </Container>
  </Section>
)

export default component
