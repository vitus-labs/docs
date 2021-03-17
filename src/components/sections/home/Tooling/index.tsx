import { Container, Row, Col } from '~/components/base/grid'
import Section from '../components/Section'
import BoxList from '../components/BoxList'

const data = [
  {
    title: 'Rollup',
    icon: 'rollup',
    label: 'Tool',
    link: (r) => r.tooling.rollup.base,
  },
  {
    title: 'Babel',
    icon: 'babel',
    label: 'Tool',
    link: (r) => r.tooling.babel.base,
  },
  {
    title: 'Storybook',
    icon: 'storybook',
    label: 'Tool',
    link: (r) => r.tooling.storybook.base,
  },
  {
    title: 'ESLint',
    icon: 'eslint',
    label: 'Tool',
    link: (r) => r.tooling.eslint.base,
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
          itemProps={{ variant: 'secondary' }}
        ></BoxList>
      </Row>
    </Container>
  </Section>
)

export default component
