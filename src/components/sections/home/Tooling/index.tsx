import { Container, Row, Col } from '~/components/grid'
import { Background } from '~/components/base'
import Section from '../components/Section'
import BoxList from '../components/BoxList'

const data = [
  {
    title: 'Rollup',
    icon: 'rollup',
    label: 'Ready to use and optimized Rollup.js configuration',
    link: (r: any) => r.tooling.rollup.base,
  },
  {
    title: 'Babel',
    icon: 'babel',
    label: 'Babel.js preset for creating and building NPM packages',
    link: (r: any) => r.tooling.babel.base,
  },
  {
    title: 'Storybook',
    icon: 'storybook',
    label: 'Start writing stories right away',
    link: (r: any) => r.tooling.storybook.base,
  },
  {
    title: 'Lint',
    icon: 'lint',
    label: 'ESLint and Stylelint configurations',
    link: (r: any) => r.tooling.lint.base,
  },
]

const component = () => (
  <Background id="tooling" secondary>
    <Section
      heading="Tooling to bootstrap your productivity"
      label="Set of preconfigured tools ready to be used"
    >
      <Container gap={36} size={{ xs: 1, md: 6, lg: 3 }}>
        <Row>
          <BoxList
            data={data}
            wrapComponent={Col}
            itemProps={{ variant: 'secondary', state: 'light' }}
          />
        </Row>
      </Container>
    </Section>
  </Background>
)

export default component
