import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Section from '../components/Section'
import Box from '../components/Box'

const component = () => (
  <Section
    heading="Tooling to bootstrap your productivity"
    label="Set of preconfigured tools ready to be used"
  >
    <Container gap={36}>
      <Row>
        <Col>
          <Box
            variant="secondary"
            link={(r) => r.tooling.rollup.base}
            heading="Rollup"
            icon="rollup"
            label="Toolking"
          />
        </Col>
        <Col>
          <Box
            variant="secondary"
            link={(r) => r.tooling.babel.base}
            heading="Babel"
            icon="babel"
            label="Toolking"
          />
        </Col>
        <Col>
          <Box
            variant="secondary"
            link={(r) => r.tooling.storybook.base}
            heading="Storybook"
            icon="storybook"
            label="Toolking"
          />
        </Col>
        <Col>
          <Box
            variant="secondary"
            link={(r) => r.tooling.eslint.base}
            heading="ESLint"
            icon="eslint"
            label="Toolking"
          />
        </Col>
      </Row>
    </Container>
  </Section>
)

export default component
