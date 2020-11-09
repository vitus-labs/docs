import React from 'react'
import { Container, Row, Col } from '~/components/base/grid'
import Section from '../components/Section'
import Box from '../components/Box'

export default () => (
  <Section
    heading="Tooling to bootstrap your productivity"
    label="Set of preconfigured tools ready to be used"
  >
    <Container gap={20}>
      <Row>
        <Col>
          <Box heading="Rollup" icon="rollup" label="Toolking" />
        </Col>
        <Col>
          <Box heading="Babel" icon="babel" label="Toolking" />
        </Col>
        <Col>
          <Box heading="Storybook" icon="storybook" label="Toolking" />
        </Col>
        <Col>
          <Box heading="ESLint" icon="eslint" label="Toolking" />
        </Col>
      </Row>
    </Container>
  </Section>
)
