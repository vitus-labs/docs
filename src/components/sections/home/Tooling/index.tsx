import { Container, Row, Col } from '~/components/grid'
import Section from '../components/Section'
import BoxList from '../components/BoxList'

const data = [
  {
    title: 'Rollup',
    icon: 'rollup',
    label: 'Tooling',
    link: (r: any) => r.tooling.rollup.base,
  },
  {
    title: 'Babel',
    icon: 'babel',
    label: 'Tooling',
    link: (r: any) => r.tooling.babel.base,
  },
  {
    title: 'Storybook',
    icon: 'storybook',
    label: 'Tooling',
    link: (r: any) => r.tooling.storybook.base,
  },
  {
    title: 'Lint',
    icon: 'lint',
    label: 'Tooling',
    link: (r: any) => r.tooling.lint.base,
  },
]

const component = () => (
  <Section
    heading="Tooling to bootstrap your productivity"
    label="Set of preconfigured tools ready to be used"
  >
    <Container gap={36} size={{ xs: 1, md: 6, lg: 3 }}>
      <Row>
        <BoxList
          data={data}
          wrapComponent={Col}
          itemProps={{ variant: 'secondary', state: 'primary' }}
        ></BoxList>
      </Row>
    </Container>
  </Section>
)

export default component
